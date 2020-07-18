<template>
  <div class="tableView">
    <vue-markdown class="head">
      # **DataTable**
    </vue-markdown>
    <p>
      You can use the component <code>&ltDataTable&gt</code> to create
      static tables with different inputs.
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
      For a <code>&ltDataTable&gt</code>, only the items prop is needed,
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
            { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
            { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
            { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
            { age: 38, first_name: 'Jami', last_name: 'Carney' }
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
      "items" necessary props for creating a table is an array
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
      If the "columns" props is not specified, <code>&ltDataTable&gt</code>
      automatically creates it from the keys of the first record
      of the "items" props, converting the latter to uppercase.
      As shown in the example above
    </p>
    <p>
      The "columns" props is an array of objects with "title", "value"
      properties and an optional "sortable" and "type" properties.
    </p>
    <p>
      The first property is responsible for the caption in the table header,
      the second for matching the property in the "items" props.
    </p>
    <p>
      If the "sortable" property is true, then the column with this property
      can be sorted in order from top to bottom, bottom to top, or by default
      as written in the "items" array:
    </p>
    <DataTable :items="items1"
               :columns="columns1">

    </DataTable>
  </div>

</template>

<script>
  import VueMarkdown from 'vue-markdown';
  import MyButton from "@/components/MyButton.vue";
  import DataTable from "@/components/DataTable.vue";

  export default {
    name: 'MyTableView',
    components: {
      VueMarkdown,
      MyButton,
      DataTable,
    },
    data() {
      return {
        items1: [
          {age: 40, name: 'Dickerson', surname: 'Macdonald'},
          {age: 21, name: 'Larsen', surname: 'Shaw'},
          {age: 89, name: 'Geneva', surname: 'Wilson'},
          {age: 38, name: 'Jami', surname: 'Carney'}
        ],
        columns1: [
          {title: 'Age', value: 'age', type: 'number', sortable: true},
          {title: 'Name', value: 'name'},
          {title: 'Surname', value: 'surname', sortable: true},
        ],
      }
    }
  };
</script>

<style>
  .tableView {
    text-align: start;
    margin-left: 2vw;
  }

  .head {
    text-align: center;
  }

  code {
    font-size: large;
    color: darkred;
  }

  .contCode {
    background-color: rgba(0, 200, 0, .1);
  }
</style>
