<template>
  <div class="tableView">
    <vue-markdown class="head">
      # **DataTable**
    </vue-markdown>
    <p>
      You can use the component <code>&ltDataTable&gt</code> to create
      static tables with different inputs data.
    </p>
    <br>
    <Vue-markdown>
      ***
    </Vue-markdown>
    <br>
    <Vue-markdown>
      ## **Overview**
    </Vue-markdown>
    <p>
      Component <code>&ltDataTable&gt</code> creates a form to search
      for a keyword by generating the <code>&ltinput&gt</code> tag and the table
      itself generating the <code>&lttable&gt</code> tag and its inner tags.
    </p>
    <br>
    <hr>
    <br>
    <Vue-markdown>
      ## **Basic usage**
    </Vue-markdown>
    <p>
      For a <code>&ltDataTable&gt</code>, only the <code>items</code> prop is needed,
      in this basic case the table has the simplest form:
    </p>
    <div>
      <DataTable :items="items1"></DataTable>
    </div>

    <div class="contCode">
     <pre>
       <code>
         &lt;div&gt;
         &lt;DataTable :items="items1"&gt;&lt;/DataTable&gt;
         &lt;/div&gt;

         &lt;script&gt;
         export default {
         data() {
          return {
           items1: [
            { age: 40, name: 'Dickerson', surname: 'Macdonald' },
            { age: 21, name: 'Larsen', surname: 'Shaw' },
            { age: 89, name: 'Geneva', surname: 'Wilson' },
            { age: 38, name: 'Jami', surname: 'Carney' }
            ]
           }
          }
         }
        &lt;/script&gt;
</code></pre>
    </div>
    <br>
    <hr>
    <br>
    <Vue-markdown>
      ## **Items**
    </Vue-markdown>
    <p>
      <code>items</code> necessary props for creating a table is an array
      containing objects, the values ​​of which are set by
      their properties in a column.
    </p>
    <br>
    <hr>
    <br>
    <Vue-markdown>
      ## **Columns**
    </Vue-markdown>
    <p>
      If the <code>columns</code> props is not specified, <code>&ltDataTable&gt</code>
      automatically creates it from the keys of the first record
      of the <code>items</code> props, converting the latter to uppercase.
      As shown in the example above
    </p>
    <p>
      The <code>columns</code> props is an array of objects with "title", "value"
      properties and an optional "sortable" and "type" properties.
    </p>
    <p>
      The first property is responsible for the caption in the table header,
      the second for matching the property in the "items" props.
    </p>
    <p>
      If the <code>sortable</code> property is true, then the column with this property
      can be sorted in order from top to bottom, bottom to top, or by default
      as written in the "items" array.
    </p>
    <p>
      If the props <code>type</code> is "number" in the table, the column is aligned right.
      By default, the alignment is centered.
    </p>
    <DataTable :items="items1"
               :columns="columns1">
    </DataTable>

    <div class="contCode">
      <pre>
       <code>
         &lt;div&gt;
         &lt;DataTable :items="items1"
                    :columns="columns1"
         &gt;&lt;/DataTable&gt;
         &lt;/div&gt;

         &lt;script&gt;
         export default {
         data() {
          return {
           items1: [
            { age: 40, name: 'Dickerson', surname: 'Macdonald' },
            { age: 21, name: 'Larsen', surname: 'Shaw' },
            { age: 89, name: 'Geneva', surname: 'Wilson' },
            { age: 38, name: 'Jami', surname: 'Carney' }
              ],
           columns1: [
            {title: 'Age', value: 'age', type: 'number', sortable: true},
            {title: 'Name', value: 'name'},
            {title: 'Surname', value: 'surname', sortable: true},
              ],
           }
          }
         }
        &lt;/script&gt;
</code></pre>
    </div>

    <br>
    <hr>
    <br>
    <Vue-markdown>
      ## **Search**
    </Vue-markdown>
    <p>
      If the <code>search</code> props is not null then the keyword search
      form is displayed above the table.
    </p>
    <p>
      It can consist of two fields: "fields" and "filters". The "fields" field
      is an array of elements of type string, which must match the corresponding
      values​of the "value" properties of objects in the <code>columns</code>
      props array.If <code>search</code> does not have a "fields" field,
      then a keyword search is performed across all columns.
    </p>
    <p>
      The "fields" field is an array of elements of the function type
      that filter the entered keyword and table fields for matches.
      If the <code>search</code> props does not have a "filters" field,
      then the search will be performed strictly for the keyword match:
    </p>
    <DataTable :items="items2"
               :columns="columns2"
               :search="search1">
    </DataTable>
    <br>
    <hr>
    <br>
    <Vue-markdown>
      ## **Colors**
    </Vue-markdown>
    <p>
      The <code>&ltDataTable&gt</code> has four props for changing the text
      and background color of the table header and body.
    </p>
    <p>
      <code>bgcolorHead</code> is responsible for the background color of the header.
    </p>
    <p>
      <code>bgcolorBody</code> is responsible for the background color of the body.
    </p>
    <p>
      <code>txtcolorHead</code> is responsible for the text color of the header.
    </p>
    <p>
      <code>txtcolorBody</code> is responsible for the text color of the body.
    </p>
    <p>
      These props are type string and has the name of the standard
      color scheme:
    </p>
    <DataTable :items="items1"
               :bgcolor-body="'lightblue'"
               :txtcolor-body="'darkgreen'"
               :bgcolor-head="'lightgreen'"
               :txtcolor-head="'darkred'"
               :search="search2">
    </DataTable>

    <div class="contCode">
      <pre>
        <code>
          &lt;DataTable  :items="items1"
                      :bgcolor-body="'lightblue'"
                      :txtcolor-body="'darkgreen'"
                      :bgcolor-head="'lightgreen'"
                      :txtcolor-head="'darkred'"
                      :search="search2"&gt;
          &lt;/DataTable&gt;
        </code>
      </pre>
    </div>
    <br>
    <hr>
    <br>
    <Vue-markdown>
      ## **Size**
    </Vue-markdown>
    <p>
      The props <code>size</code> has a range from 1 to 4 and sets the font size in the table.
      Moreover, if the entered props is greater than 4,
      it is equal to 4, and if it is less than 1, it is equal to 1:
    </p>
    <div class="flex">
      <div>
        <h3>size=1</h3>
        <DataTable :items="items1"
                   :size=1>
        </DataTable>
      </div>
      <div>
        <h3>size=4</h3>
        <DataTable :items="items1"
                   :size=4>
        </DataTable>
      </div>
    </div>

    <div class="contCode">
      <pre>
        <code>
          &lt;div class="flex"&gt;
            &lt;div&gt;
              &lt;DataTable  :items="items1"
                          :size=1&gt;
              &lt;/DataTable&gt;
            &lt;/div&gt;
            &lt;div&gt;
              &lt;DataTable  :items="items1"
                          :size=4&gt;
              &lt;/DataTable&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        </code>
      </pre>
    </div>

    <br>
    <hr>
    <br>
    <Vue-markdown>
      ## **Table of props**
    </Vue-markdown>
    <DataTable :items="tableProperties"
               :columns="tableColumns"
               :search="tableSearch">
    </DataTable>
    <br>
    <hr>
    <br>
  </div>

</template>

<script lang="ts">
  import VueMarkdown from 'vue-markdown';
  import DataTable from '@/components/DataTable.vue';

  function toKeyboardLayout(v: string, lang: string) {
    const enArr = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'a', 's', 'd',
      'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.'];
    const ruArr = ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ф', 'ы', 'в',
      'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю'];
    const newV = Array<string>();
    const arrV = v.toLowerCase().split('');
    arrV.forEach((char) => {
      if (langFun(lang, false).includes(char)) {
        const index = langFun(lang, false).indexOf(char);
        newV.push(langFun(lang, true)[index]);
      }
    });
    return (arrV.length !== newV.length) ? v.toLowerCase() : newV.join('');

    function langFun(langF: string, bool: boolean): string[] {
      return ((langF === 'ru') && bool) ? ruArr : enArr;
    }
  }

  export default {
    name: 'MyTableView',
    components: {
      VueMarkdown,
      DataTable,
    },
    data() {
      return {
        items1: [
          {age: 40, name: 'Dickerson', surname: 'Macdonald'},
          {age: 21, name: 'Larsen', surname: 'Shaw'},
          {age: 89, name: 'Geneva', surname: 'Wilson'},
          {age: 38, name: 'Jami', surname: 'Carney'},
        ],
        columns1: [
          {title: 'Age', value: 'age', type: 'number', sortable: true},
          {title: 'Name', value: 'name'},
          {title: 'Surname', value: 'surname', sortable: true},
        ],
        items2: [
          {id: 30050, name: 'Вася', surname: 'Петров', age: 12},
          {id: 30051, name: 'Вася', surname: 'Васечкин', age: 15},
          {id: 30052, name: 'Петя', surname: 'Васечкин', age: 16},
          {id: 30053, name: 'Миша', surname: 'Иванов', age: 16},
          {id: 30054, name: 'Маша', surname: 'Петрова', age: 13},
          {id: 30055, name: 'Федя', surname: 'Федоров', age: 14},
          {id: 30056, name: 'Фамильноеимя', surname: 'Фамильноеимя', age: 14},
          {id: 30057, name: 'Adam', surname: 'Eva', age: 19},
          {id: 30058, name: 'Eva', surname: 'Adam', age: 18},
        ],
        columns2: [
          {title: 'Имя', value: 'name'},
          {title: 'Фамилия', value: 'surname', sortable: true},
          {title: 'Возраст', value: 'age', type: 'number', sortable: true},
        ],
        search1: {
          fields: ['name', 'surname'],
          filters: [
            (v: string) => v.toLowerCase(),
            (v: string) => toKeyboardLayout(v, 'ru'),
            (v: string) => toKeyboardLayout(v, 'en'),
          ],
        },
        search2: {
          fields: ['name'],
        },
        tableProperties: [
          {
            property: 'items', type: 'Array<object>', required: 'true', default: '-',
            description: 'Data to fill the body of the table.',
          },
          {
            property: 'columns', type: 'Array<object>', required: 'false', default: '-',
            description: 'Data to fill the head of the table.',
          },
          {
            property: 'search', type: 'object', default: 'null', required: 'false',
            description: 'Contains "fields" and "filters". Data for searching by keyword.',
          },
          {
            property: 'bgcolor-head', type: 'string', required: 'false', default: '"aquamarine"',
            description: 'Background color of the header.',
          },
          {
            property: 'txtcolor-head', type: 'string', required: 'false', default: '"black"',
            description: 'Text color of the header.',
          },
          {
            property: 'bgcolor-body', type: 'string', required: 'false', default: '"antiquewhite"',
            description: 'Background color of the body.',
          },
          {
            property: 'txtcolor-body', type: 'string', required: 'false', default: '"darkblue"',
            description: 'Text color of the body.',
          },
          {
            property: 'size', type: 'number', required: 'false', default: '3',
            description: 'Sets the size of the table.Range: 1 to 4',
          },
        ],
        tableColumns: [
          {title: 'Property', value: 'property', sortable: true},
          {title: 'Type', value: 'type'},
          {title: 'Required', value: 'required'},
          {title: 'Default', value: 'default'},
          {title: 'Description', value: 'description'},
        ],
        tableSearch: {
          fields: ['property'],
        },
      };
    },
  };
</script>

<style lang="less">
  .tableView {
    text-align: start;
    margin-left: 2vw;
  }

  .head {
    text-align: center;
    margin-top: 50px;
  }

  code {
    font-size: large;
    color: darkred;
  }

  .contCode {
    background-color: rgba(0, 200, 0, .1);
  }

  .flex {
    display: flex;
    @media (max-width: 980px) {
      flex-direction: column;
    }

    h3 {
      text-align: center;
    }
  }
</style>
