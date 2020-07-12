<template>
  <div class="btnView">
    <vue-markdown class="head">
      # **MyButton**
    </vue-markdown>
    <p>
      You can use the component <code>&ltMyButton&gt</code> to create various buttons according
      to a predefined color and size.
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
      Component <code>&ltMyButton&gt</code> generates a div element or a element,
      which has predefined styles
    </p>
    <div>
      <MyButton>Button</MyButton>
      <MyButton :color="'success'">MyButton</MyButton>
      <MyButton :color="'danger'">MyButton</MyButton>
      <MyButton :color="'warning'">MyButton</MyButton>
      <MyButton :color="'dark'">MyButton</MyButton>
    </div>


    <div class="contCode">
        <pre>
          <code>
            &lt;MyButton&gt;Button&lt;/MyButton&gt;
            &lt;MyButton :color="'success'"&gt;MyButton&lt;/MyButton&gt;
            &lt;MyButton :color="'danger'"&gt;MyButton&lt;/MyButton&gt;
            &lt;MyButton :color="'warning'"&gt;MyButton&lt;/MyButton&gt;
            &lt;MyButton :color="'dark'"&gt;MyButton&lt;/MyButton&gt;
</code>
        </pre>
    </div>
    <br>
    <hr>
    <br>
    <Vue-markdown>
      ## **Element type**
    </Vue-markdown>
    <p>
      By default, the button generates a <code>&ltdiv&gt</code> element,
      but if the <code>href</code> props is specified, a link is rendered <code>&lta&gt</code>
    </p>
    <div>
      <MyButton>It's a button</MyButton>
      <MyButton :href="'#'">It's a link</MyButton>
    </div>

    <div class="contCode">
    <pre>
      <code>
        &lt;MyButton&gt;It's a button&lt;/MyButton&gt;
        &lt;MyButton :href="'#'"&gt;It's a link&lt;/MyButton&gt;
      </code>
    </pre>
    </div>
    <br>
    <hr>
    <br>
    <Vue-markdown>
      ## **Sizing**
    </Vue-markdown>
    <p>
      You can also specify the size of the button.
      There are 5 sizes in total:
      <code>exsmall,small,medium(default),large,exlarge</code>
    </p>
    <div>
      <MyButton :size="'exsmall'">exsmall</MyButton>
      <MyButton :size="'small'">small</MyButton>
      <MyButton>default</MyButton>
      <MyButton :size="'large'">large</MyButton>
      <MyButton :size="'exlarge'">exlarge</MyButton>
    </div>

    <div class="contCode">
      <pre>
        <code>
          &lt;MyButton :size="'exsmall'"&gt;exsmall&lt;/MyButton&gt;
          &lt;MyButton :size="'small'"&gt;small&lt;/MyButton&gt;
          &lt;MyButton&gt;default&lt;/MyButton&gt;
          &lt;MyButton :size="'large'"&gt;large&lt;/MyButton&gt;
          &lt;MyButton :size="'exlarge'"&gt;exlarge&lt;/MyButton&gt;
        </code>
      </pre>
    </div>
    <br>
    <hr>
    <br>
    <Vue-markdown>
      ## **Color**
    </Vue-markdown>
    <p>
      There are 7 options for button colors:
      <code>primary, success, warning, danger, light, secondary, dark</code>
    </p>
    <div>
      <MyButton :color="'primary'">MyButton</MyButton>
      <MyButton :color="'success'">MyButton</MyButton>
      <MyButton :color="'warning'">MyButton</MyButton>
      <MyButton :color="'danger'">MyButton</MyButton>
      <MyButton :color="'light'">MyButton</MyButton>
      <MyButton :color="'secondary'">MyButton</MyButton>
      <MyButton :color="'dark'">MyButton</MyButton>
    </div>

    <div class="contCode">
      <pre>
        <code>
        &lt;MyButton :color="'primary'"&gt;MyButton&lt;/MyButton&gt;
        &lt;MyButton :color="'success'"&gt;MyButton&lt;/MyButton&gt;
        &lt;MyButton :color="'warning'"&gt;MyButton&lt;/MyButton&gt;
        &lt;MyButton :color="'danger'"&gt;MyButton&lt;/MyButton&gt;
        &lt;MyButton :color="'light'"&gt;MyButton&lt;/MyButton&gt;
        &lt;MyButton :color="'secondary'"&gt;MyButton&lt;/MyButton&gt;
        &lt;MyButton :color="'dark'"&gt;MyButton&lt;/MyButton&gt;
      </code>
    </pre>
    </div>
    <br>
    <hr>
    <br>
    <Vue-markdown>
    ## **Props**
    </Vue-markdown>
    <DataTable :items="buttonProperties"
               :columns="buttonColumns"
               :search="buttonSearch">
    </DataTable>
    <br>
    <hr>
    <br>
    <Vue-markdown>
      ## **Events**
    </Vue-markdown>
    <p>
      <code>&ltMyButton&gt</code> has only one event - 'click',
      which is emitted when a button is clicked on an element <code>&ltMyButton&gt</code> with the left mouse button
    </p>
    <br>
    <hr>
    <br>
  </div>
</template>


<script>
  import VueMarkdown from 'vue-markdown';
  import MyButton from "@/components/MyButton.vue";
  import DataTable from "@/components/DataTable.vue";


  export default {
    name: "MyButtonView",
    components: {
      VueMarkdown,
      MyButton,
      DataTable,
    },
    data() {
      return {
        buttonProperties: [
          {property: 'color', type: 'String', default: '"primary"', description: 'Sets the color of the button.'},
          {property: 'size', type: 'String', default: '"medium"', description: 'Sets the size of the button.'},
          {property: 'href', type: 'String', default: '-', description: 'URL for link.'},
        ],
        buttonColumns: [
          {title: 'Property', value: 'property', sortable: true},
          {title: 'Type', value: 'type'},
          {title: 'Default', value: 'default'},
          {title: 'Description', value: 'description'},
        ],
        buttonSearch: {
          fields: ['property']
        }
      }
    }
  }
</script>

<style>
  .btnView {
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
