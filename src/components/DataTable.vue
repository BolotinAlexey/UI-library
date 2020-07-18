<template>
  <div class="container1">
    <div class="navTable">
      <div class="search"
           :class="{hide: !search}">
        <label>Enter the search word:
          <input type="search"
                 placeholder="Search"
                 v-model="keyword">
        </label>
      </div>
    </div>
    <table class="table">
      <!--            drawing of the head-->
      <thead class="tableHead">
      <tr class="trHead">
        <th class="tableHead">№</th>
        <th v-for="el in columns"
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
      <tbody class="tableBody">
      <tr v-for="(tr,index) in sortData" class="trBody">
        <td class="tdBody">{{index+1}}</td>
        <td v-for="td in columns"
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
import Vue from 'vue';

export default Vue.extend({
  name: 'DataTable',
  data() {
    return {
      keyword: '',
      dataSearch: Array,
      sortState: new Map<object, number>(),
    };
  },

  created() {
    this.initSortState();
  },

  props: {
    items: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
    search: {
      type: Object,
      default: null,
    },
  },

  methods: {
    initSortState(): void {
      this.columns.forEach((el: any) => {
        if (el.sortable === true) {
          this.sortState.set(el, 1);
        }
      });
    },

    resort(el: object) {
      let currentState: any = this.sortState.get(el);
      this.initSortState();
      currentState = (currentState + 1) % 3;
      this.sortState.set(el, currentState);
    },
  },


  computed: {
    searchData() {
      const arraySearchFields = (this.search.fields != null)
        ? this.search.fields
        : this.columns.map((item: any) => item.value);
      const arrayFilters = (this.search.filters != null)
        ? this.search.filters
        : [(v: any) => v];
      return this.items.filter((us: any) => {
        return arraySearchFields.filter((nameAtr: string) => {
          return arrayFilters.filter((nameFilter: any) => {
              return nameFilter(us[nameAtr]).includes(nameFilter(this.keyword));
            },
          ).length;
        }).length;
      });
    },

    sortData() {
        const element: any = this.columns.find(((elem: any) => elem.sortable && this.sortState.get(elem) !== 1));
        const newState: any = (element !== null) ? this.sortState.get(element) : 0;
        return (element) ? this.searchData.slice().sort((a: any, b: any) => {
          if (typeof (a[element.value]) === 'number') {
            return (1 - newState) * (a[element.value] - b[element.value]);
          } else { return (1 - newState) *
            ((a[element.value].toLowerCase() < b[element.value].toLowerCase()) ? 1 : -1);
          }
        }) : this.searchData;
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
    font-size: large;
    background-color: aquamarine;
  }

  td {
    color: darkblue;
    background-color: antiquewhite;
    text-align: center;
  }

  th, td {
    padding: 5px 10px;
    border: 1px solid black;
    height: 20px;
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
