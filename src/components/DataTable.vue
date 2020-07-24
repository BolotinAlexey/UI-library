<template>
  <div class="container1">
    <div class="navTable">
      <div class="search"
           :class="{hide: !search}">
        <label>Enter the search word:
          <input type="search"
                 placeholder="Search"
                 v-model="keyword"
                 :style="{'background-color': bgcolorBody}">
        </label>
      </div>
    </div>
    <table class="table">
      <!--            drawing of the head-->
      <thead class="tableHead"
             :style="styleMenuHead">
      <tr class="trHead">
        <th class="tableHead">№</th>
        <th v-for="el in myColumns"
            class="tableHead"
            :class="{alignRight: el.type==='number'}">
          {{el.title}}
          <button class="sortButton"
                  v-if="el.sortable"
                  @click="resort(el)">
            <i class="arrows"
               :class="'fas fa-sort' + ((!sortState.get(el))
                           ? '-down'
                           :(sortState.get(el) === 1)
                           ? '' : '-up')"></i>
          </button>
        </th>
      </tr>
      </thead>

      <!--            table body drawing-->
      <tbody class="tableBody"
             :style="styleMenuBody">
      <tr v-for="(tr,index) in sortData" class="trBody">
        <td class="tdBody">{{index+1}}</td>
        <td v-for="td in myColumns"
            class="tdBody"
            :class="{alignRight: td.type==='number'}"
        >{{tr[td.value]}}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
interface Column {
  title: string;
  value: string;
  sortable?: boolean;
  type?: string;
}

interface Search {
  fields?: string[];
  filters?: func[];
}

type data = string | number;
type func = ((v: string) => string);

import Vue from 'vue';

export default Vue.extend({
  name: 'DataTable',
  data() {
    return {
      keyword: '',
      sortState: new Map<object, number>(),
      myColumns: new Array<Column>(),
      arraySizes: ['smaller', 'small', 'medium', 'large', 'larger'],
      mySize: 3,
      newState: 0,
    };
  },

  created() {
    this.initColumns();
    this.initSize();
    this.initSortState();
  },

  props: {
    items: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
    },
    search: {
      type: Object,
      default: null,
    },
    bgcolorHead: {
      type: String,
      default: 'aquamarine',
    },
    txtcolorHead: {
      type: String,
      default: 'black',
    },
    bgcolorBody: {
      type: String,
      default: 'antiquewhite',
    },
    txtcolorBody: {
      type: String,
      default: 'darkblue',
    },
    size: {
      type: Number,
      default: 3,
    },
  },

  methods: {
    initSortState(): void {
      this.myColumns.forEach((el: Column) => {
        if (el.sortable === true) {
          this.sortState.set(el, 1);
        }
      });
    },

    resort(el: Column) {
      let currentState: number = this.sortState.get(el) as number;
      this.initSortState();
      currentState = (currentState as number + 1) % 3;
      this.sortState.set(el, currentState);
    },

    initColumns() {
      if (this.columns) {
        this.myColumns = this.columns as Column[];
      } else {
        const obj: Column = this.items[0] as Column;
        for (const key in obj) {
          this.myColumns.push({title: key.toLocaleUpperCase(), value: key});
        }
      }
    },

    initSize() {
      this.mySize = (this.size < 1) ? 1
        : (this.size > this.arraySizes.length - 1)
          ? this.arraySizes.length - 1 : this.size;
    },

  },


  computed: {
    searchData(): object[] {
      if (this.search) {
        const arraySearchFields: string[] = (this.search.fields != null)
          ? this.search.fields
          : this.myColumns.map((item: Column) => item.value);
        const arrayFilters: func[] = (this.search.filters != null)
          ? this.search.filters
          : [(v: string) => v];

        return (this.items as object[]).filter((us: object) => {
          return arraySearchFields.filter((nameAtr: string) => {
            return arrayFilters.filter((nameFilter: func) => {
                return nameFilter(us[nameAtr]).includes(nameFilter(this.keyword));
              },
            ).length;
          }).length;
        });
      } else {
        return this.items as object[];
      }
    },

    sortData(): object[] {
      const element: Column | null = this.myColumns.find(((elem: Column) =>
        elem.sortable && this.sortState.get(elem) !== 1)) as Column | null;

      this.newState = (element) ? (typeof (this.sortState.get(element)) === 'number')
        ? this.sortState.get(element) as number : 0 : 0;
      return (element) ? this.searchData.slice().sort((a: any, b: any) => {
        if (typeof (a[element.value]) === 'number') {
          return (1 - this.newState) * (a[element.value] - b[element.value]);
        } else {
          return (1 - this.newState) *
            ((a[element.value].toLowerCase() < b[element.value].toLowerCase()) ? 1 : -1);
        }
      }) : this.searchData;
    },

    styleMenuHead(): object {
      return {
        'background-color': this.bgcolorHead,
        'color': this.txtcolorHead,
        'font-size': this.arraySizes[this.mySize],
      };
    },

    styleMenuBody(): object {
      return {
        'background-color': this.bgcolorBody,
        'color': this.txtcolorBody,
        'font-size': this.arraySizes[this.mySize - 1],
      };
    },
  },

});
</script>

<style lang="less">
  .container1 {
    margin: 10px;
    max-height: 500px;
  }

  table {
    display: table;
    border-collapse: collapse;
  }

  th {
    font-style: italic;
  }

  td {
    text-align: center;
  }

  th, td {
    padding: 5px 10px;
    border: 1px solid black;
  }

  th button {
    margin-left: 5px;
    right: 3px;
  }

  th button i {
    display: flex;
    flex-direction: column;
  }

  .table-search button {
    margin-left: 20px;
  }

  .search {
    color: crimson;
    font-family: fantasy;
  }

  .search input {
    background-color: antiquewhite;
  }

  .navTable {
    margin: 10px 10px 10px 0;
    display: flex;
  }


  .hide {
    display: none;
  }

  .alignRight {
    text-align: right;
  }
</style>
