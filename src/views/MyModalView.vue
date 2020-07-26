<template>
  <div class="modalView">
    <vue-markdown class="head">
      # **MyModal**
    </vue-markdown>
    <p>
      You can use the component <code>&ltMyModal&gt</code> to create a button
      for opening a modal, when clicked it becomes visible modal window
      with content located in it and buttons for closing this modal window.
      Moreover, until the button to close the window is pressed, further actions
      are impossible, since it is displayed in the middle and closes the entire window.
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
      The default component <code>&ltMyModal&gt</code> generates a <code>&ltMyButtonl&gt</code>
      component with the default text "Open" and the text inside the "default text".
    </p>
    <MyModal></MyModal>
    <br>
    <div class="contCode">
      <code>&lt;MyModal&gt;&lt;/MyModal&gt;</code>
    </div>

    <br>
    <hr>
    <br>
    <Vue-markdown>
      ## **Background color**
    </Vue-markdown>
    <p>
      The props <code>bgcolor</code>, which is of type string and has the name of the standard
      color scheme, is responsible for the background color of the modal window.
      By default, the background color has the value: 'wheat':
    </p>
    <br>
    <div class="flex">
      <MyModal :bgcolor="'pink'">
        <template v-slot:trigger>
          <MyButton color="danger">Open pink window
          </MyButton>
        </template>
      </MyModal>
      <MyModal :bgcolor="'lightgreen'">
        <template v-slot:trigger>
          <MyButton color="success">Open lightgreen window
          </MyButton>
        </template>
      </MyModal>
      <MyModal :bgcolor="'lightblue'">
        <template v-slot:trigger>
          <MyButton>Open lightblue window
          </MyButton>
        </template>
      </MyModal>
    </div>
    <div class="contCode">
     <pre>
       <code>

&lt;div class="flex"&gt;
  &lt;MyModal :bgcolor="'pink'"&gt;
	   &lt;template v-slot:trigger&gt;
		    &lt;MyButton color="danger"&gt;Open pink window
	      &lt;/MyButton&gt;
     &lt;/template&gt;
  &lt;/MyModal&gt;
  &lt;MyModal :bgcolor="'lightgreen'"&gt;
	   &lt;template v-slot:trigger&gt;
		    &lt;MyButton color="success"&gt;Open lightgreen window
	      &lt;/MyButton&gt;
     &lt;/template&gt;
  &lt;/MyModal&gt;
  &lt;MyModal :bgcolor="'lightblue'"&gt;
	   &lt;template v-slot:trigger&gt;
		   &lt;MyButton&gt;Open lightblue window
	     &lt;/MyButton&gt;
	   &lt;/template&gt;
  &lt;/MyModal&gt;
&lt;/div&gt;
       </code>
     </pre>
    </div>

    <br>
    <hr>
    <br>
    <Vue-markdown>
      ## **Slots**
    </Vue-markdown>
    <p>
      The component <code>&ltMyModal&gt</code> has a named header slot,
      the default (unnamed) slot for content (if available,
      it replaces the text "default text"), as well as the named slot "trigger",
      in which you can set your buttons to open the window.
      Here is an examples of several buttons demonstrating various components:
    </p>
    <br>
    <br>
    <Vue-markdown>
      ### **Slot "trigger"**
    </Vue-markdown>
    <p>
      An element is inserted into this slot,
      when you click on which the window opens.
      The default button is the inserted element,
      but you can insert some image, text, and the like.
    </p>
    <div class="flex">
      <MyModal>
        <template v-slot:trigger>
          <MyButton color="success">Open window1
          </MyButton>
        </template>
      </MyModal>
      <MyModal>
        <template v-slot:trigger>
          <p>text</p>
        </template>
      </MyModal>
      <MyModal>
        <template v-slot:trigger>

          <img src="../../assets/logo.png"></template>
      </MyModal>
    </div>
    <br>
    <div class="contCode">
      <pre>
        <code>
          &lt;div class="flex"&gt;
            &lt;MyModal&gt;
              &lt;template v-slot:trigger&gt;
                &lt;MyButton color="primary"&gt;Open window1
                &lt;/MyButton&gt;
              &lt;/template&gt;
            &lt;/MyModal&gt;
            &lt;MyModal&gt;
              &lt;template v-slot:trigger&gt;
                &lt;p&gt;text&lt;/p&gt;
              &lt;/template&gt;
            &lt;/MyModal&gt;
            &lt;MyModal&gt;
              &lt;template v-slot:trigger&gt;
                &lt;img src="../../assets/logo.png"&gt;&lt;
              &lt;/template&gt;
            &lt;/MyModal&gt;
          &lt;/div&gt;
        </code>
      </pre>
    </div>

    <br>
    <br>
    <Vue-markdown>
      ### **Slot "header"**
    </Vue-markdown>
    <p>
      The header slot is for introducing the title modal window.
      By default, it is not present, but if present,
      this text is displayed at the top center of the main content of the modal window:
    </p>
    <div class="flex">
      <MyModal>
        <template v-slot:trigger>
          <MyButton color="warning">
            {{btn}}
          </MyButton>
        </template>
        <template v-slot:header
                  class="header">
          <h2>{{btn}}</h2>
        </template>
        <div v-for="s in sizes">
          <MyButton
            v-for="c in colors" :color=c :size=s
            :href="'https://google.com/'+s+'/'+c"
          >{{c}} {{s}}
          </MyButton>
        </div>
      </MyModal>

      <!--            Modal window with table inside-->
      <MyModal>
        <template v-slot:trigger>
          <MyButton color="danger">
            {{tbl}}
          </MyButton>
        </template>
        <template v-slot:header
                  class="header">
          <h2>{{tbl}}</h2>
        </template>
        <DataTable :items="users"
                   :columns="columns1"
                   :search="search1">

        </DataTable>
      </MyModal>

      <!--            Modal window with carousel inside-->
      <MyModal>
        <template v-slot:trigger>
          <MyButton color="dark">
            {{car}}
          </MyButton>
        </template>
        <template v-slot:header
                  class="header">
          <h2>{{car}}</h2>
        </template>
        <MyCarousel :images="images">
        </MyCarousel>
      </MyModal>

      <!--            Modal window with my grid inside-->
      <MyModal>
        <template v-slot:trigger>
          <MyButton color="secondary">
            {{grid}}
          </MyButton>
        </template>
        <template v-slot:header
                  class="header">
          <h2>{{grid}}</h2>
        </template>
        <Row>
          <Column v-for="i in 12" :cols='1'>1/12</Column>
        </Row>
        <Row>
          <Column v-for="i in 6" :cols='2'>1/6 column</Column>
        </Row>
        <Row>
          <Column v-for="i in 4" :cols='3'>1/4 column</Column>
        </Row>
        <Row>
          <Column v-for="i in 3" :cols='4'>1/3 column</Column>
        </Row>
        <Row>
          <Column :cols='6'>
            <Column :cols='6'>1/2 column into 1/2 column</Column>
          </Column>
          <Column :cols='6'>1/2 column</Column>
        </Row>
        <Row>
          <Column>Default column</Column>
          <Column :cols='2'>1/6 column</Column>
        </Row>
      </MyModal>
    </div>

    <br>
    <hr>
    <br>
    <Vue-markdown>
      ## **Table of props**
    </Vue-markdown>
    <DataTable :items="modalProperties"
               :columns="modalColumns">
    </DataTable>
    <br>
    <hr>
    <br>
    <Vue-markdown>
      ## **Events**
    </Vue-markdown>
    <p>
      <code>&ltMyModal&gt</code> can emit two events:
      one when you click the open window button, the "open" event is emitted
      and when you click on the close window button, the "close" event is emitted
    </p>
    <br>
    <hr>
    <br>
  </div>

</template>

<script>
  import VueMarkdown from 'vue-markdown';
  import MyModal from '@/components/MyModal.vue';
  import Navbar from '../components/Navbar';
  import HelloWorld from '../components/HelloWorld';
  import MyButton from '../components/MyButton';
  import DataTable from '../components/DataTable';
  import MyCarousel from '../components/MyCarousel';
  import Row from '../components/grid/Row';
  import Column from '../components/grid/Column';

  export default {
    name: 'MyModalView',
    components: {
      VueMarkdown,
      Navbar,
      HelloWorld,
      MyButton,
      DataTable,
      MyModal,
      MyCarousel,
      Row,
      Column,
    },
    data() {
      return {
        btn: 'BUTTONS',
        tbl: 'TABLE',
        car: 'CAROUSEL',
        grid: 'GRID',
        colors: ['primary', 'success', 'warning', 'danger', 'light', 'secondary', 'dark'],
        sizes: ['exsmall', 'small', 'medium', 'large', 'exlarge'],
        users: [
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
        columns1: [
          {title: 'Имя', value: 'name'},
          {title: 'Фамилия', value: 'surname', sortable: true},
          {title: 'Возраст', value: 'age', type: 'number', sortable: true},
        ],
        search1: {
          fields: ['name', 'surname'],
          filters: [
            (v) => v.toLowerCase(),
            // (v) => toKeyboardLayout(v, 'ru'),
            // (v) => toKeyboardLayout(v, 'en')
          ],
        },
        images: ['https://loremflickr.com/320/240/dog',
          'https://loremflickr.com/320/240/cat',
          'https://loremflickr.com/320/240/horse',
          'https://loremflickr.com/320/240/men',
          'https://loremflickr.com/320/240/women'],

        modalProperties: [
          {
            property: 'bgcolor', type: 'String', default: '"wheat"',
            description: 'Modal window background сolor',
          },
        ],

        modalColumns: [
          {title: 'Property', value: 'property'},
          {title: 'Type', value: 'type'},
          {title: 'Default', value: 'default'},
          {title: 'Description', value: 'description'},
        ],
      };
    },
  };
</script>

<style lang="less">
  .modalView {
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
  }
</style>
