<template>
  <div class="gridView">
    <vue-markdown class="head">
      # **Grid**
    </vue-markdown>
    <p>
      You can use the component <code>&ltRow&gt</code> and <code>&ltColumn&gt</code> to create a grid,
      with which you can position the elements.
    </p>
    <br>
    <Vue-markdown>
      ***
    </Vue-markdown>
    <br>
    <Vue-markdown>
      ## **Overview**
    </Vue-markdown>
    <h3>Row</h3>
    <p>
      Component <code>&ltRow&gt</code> this is a container for the <code>&ltColumn&gt</code> component.
      A total of 12 <code>&ltColumn&gt</code> columns fit in the container
    </p>
    <h3>Column</h3>
    <p>
      Component <code>&ltColumn&gt</code>this is the container for the element inserted into this component,
      moreover, its size depends on the transmitted props
    </p>

    <div>
      <Row>
        <Column v-for="i in 12" :cols='1'>{{i}}</Column>
      </Row>
      <Row>
        <Column v-for="i in 6" :cols='2'>{{i}}</Column>
      </Row>
      <Row>
        <Column v-for="i in 4" :cols='3'>{{i}}</Column>
      </Row>
      <Row>
        <Column v-for="i in 3" :cols='4'>{{i}}</Column>
      </Row>
    </div>


    <div class="contCode">
        <pre>
          <code>
          &lt;Row&gt;
            &lt;Column v-for="i in 12" :cols='1'&gt;1/12&lt;/Column&gt;
          &lt;/Row&gt;
          &lt;Row&gt;
            &lt;Column v-for="i in 6" :cols='2'&gt;1/6 col&lt;/Column&gt;
          &lt;/Row&gt;
          &lt;Row&gt;
            &lt;Column v-for="i in 4" :cols='3'&gt;1/4 col&lt;/Column&gt;
          &lt;/Row&gt;
          &lt;Row&gt;
            &lt;Column v-for="i in 3" :cols='4'&gt;1/3 col&lt;/Column&gt;
          &lt;/Row&gt;
          </code>
        </pre>
    </div>
    <br>
    <hr>
    <br>

    <Vue-markdown>
      ## **Column in column**
    </Vue-markdown>
    <p>
      By default, props is 12, so the length of such a column is equal to the length of the container.

      Since the <code>&ltColumn&gt</code> component is a container, other columns can be used inside.
    </p>
    <div>
      <Row>
        <Column :cols='6'>half column</Column>
      </Row>
      <Row>
        <Column :cols='6'>
          <Column :cols='6'>half column in half column</Column>
        </Column>
      </Row>
      <Row>
        <Column :cols='10'>
          <Column :cols='6'>
            <Column :cols='4'>
              10/12 in 1/2 in 1/3
            </Column>
          </Column>
        </Column>
      </Row>
    </div>

    <div class="contCode">
      <pre>
        <code>
          &lt;Row&gt;
             &lt;Column :cols='6'&gt;half column&lt;/Column&gt;
          &lt;/Row&gt;
          &lt;Row&gt;
             &lt;Column :cols='6'&gt;
                &lt;Column :cols='6'&gt;half column in half column&lt;/Column&gt;
             &lt;/Column&gt;&lt;/Row&gt;
          &lt;Row&gt;
             &lt;Column :cols='10'&gt;
               &lt;Column :cols='6'&gt;
                  &lt;Column :cols='4'&gt;
                    10/12 in 1/2 in 1/3
                  &lt;/Column&gt;
                &lt;/Column&gt;
              &lt;/Column&gt;
          &lt;/Row&gt;
        </code>
      </pre>
    </div>
    <br>
    <hr>
    <br>
    <Vue-markdown>
      ## **Props**
    </Vue-markdown>
    <p>
      Row has no props and Column has only one - <code>col</code>.
      Its numerical value corresponds to the fullness of the external container.
      The smallest is 1 and corresponds to 1/12 of the container.
      And the largest is 12 and corresponds to 100% fullness of the external container.
      By default, props <code>col</code> = 12.
      Type <code>col</code> - Number.
    </p>

    <Row>
      <Column>default column</Column>
    </Row>

    <div class="contCode">
      <pre>
        <code>
          &lt;Row&gt;
             &lt;Column&gt;default column&lt;/Column&gt;
          &lt;/Row&gt;
          </code>
      </pre>
    </div>
    <br>
    <hr>
    <br>
  </div>
</template>


<script>
  import VueMarkdown from 'vue-markdown';
  import Row from '@/components/grid/Row.vue'
  import Column from '@/components/grid/Column.vue'

  export default {
    name: "MyButtonView",
    components: {
      VueMarkdown,
      Row,
      Column,
    },
  }
</script>

<style>
  .gridView {
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
