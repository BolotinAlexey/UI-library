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
      ## **Button text**
    </Vue-markdown>
    <p>
      Changing the props "txtBtn" changes the text inside the button:
    </p>
    <div class="flex">
      <MyModal :txtBtn="'Open window1'"></MyModal>
      <MyModal :txtBtn="'Open window2'"></MyModal>
      <MyModal :txtBtn="'Open window3'"></MyModal>
    </div>
    <br>
    <div class="contCode">
      <pre>
        <code>&lt;MyModal :txtBtn="'Open window1'"&gt;&lt;/MyModal&gt;</code>
        <code>&lt;MyModal :txtBtn="'Open window1'"&gt;&lt;/MyModal&gt;</code>
        <code>&lt;MyModal :txtBtn="'Open window1'"&gt;&lt;/MyModal&gt;</code>
      </pre>
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
      <MyModal :txtBtn="'Open pink window'"
               :bgcolor="'pink'">
      </MyModal>
      <MyModal :txtBtn="'Open lightgreen window'"
               :bgcolor="'lightgreen'">
      </MyModal>
      <MyModal :txtBtn="'Open lightblue window'"
               :bgcolor="'lightblue'">
      </MyModal>
    </div>
    <div class="contCode">
     <pre>
       <code>
          &lt;MyModal :txtBtn="'Open pink window'"
                    :bgcolor="'pink'"&gt;
          &lt;/MyModal&gt;
          &lt;MyModal :txtBtn="'Open lightgreen window'"
                    :bgcolor="'lightgreen'"&gt;
          &lt;/MyModal&gt;
          &lt;MyModal :txtBtn="'Open lightblue window'"
                    :bgcolor="'lightblue'"&gt;
         &lt;/MyModal&gt;
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
      in which you can set your button to open the window.
      Here is an example of several buttons demonstrating various components:
    </p>
    <div class="flex">
      <MyModal
        :txtBtn=btn>
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
      <MyModal :txt-btn=tbl>
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
      <MyModal :txt-btn=car>
        <template v-slot:header
                  class="header">
          <h2>{{car}}</h2>
        </template>
        <MyCarousel :images="images">
        </MyCarousel>
      </MyModal>

      <!--            Modal window with my grid inside-->
      <MyModal :txt-btn=grid>
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
               :columns="modalColumns"
               :search="modalSearch">
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
  import MyModal from '@/components/MyModal.vue'
  import Navbar from "../components/Navbar";
  import HelloWorld from "../components/HelloWorld";
  import MyButton from "../components/MyButton";
  import DataTable from "../components/DataTable";
  import MyCarousel from "../components/MyCarousel";
  import Row from "../components/grid/Row";
  import Column from "../components/grid/Column";

  export default {
    name: "MyModalView",
    components: {
      VueMarkdown,
      Navbar,
      HelloWorld,
      MyButton,
      DataTable,
      MyModal,
      MyCarousel,
      Row,
      Column
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
            v => v.toLowerCase(),
            // v => toKeyboardLayout(v, 'ru'),
            // v => toKeyboardLayout(v, 'en')
          ]
        },
        images: ['https://loremflickr.com/320/240/dog',
          'https://loremflickr.com/320/240/cat',
          'https://loremflickr.com/320/240/horse',
          'https://loremflickr.com/320/240/men',
          'https://loremflickr.com/320/240/women'],

        modalProperties: [
          {property: 'txtBtn', type: 'String', default: '"default text"',
            description: 'Content contained in the button for opening a modal window'},
          {property: 'bgcolor', type: 'String', default: '"wheat"',
            description: 'Modal window background сolor'},
        ],

        modalColumns: [
          {title: 'Property', value: 'property', sortable: true},
          {title: 'Type', value: 'type'},
          {title: 'Default', value: 'default'},
          {title: 'Description', value: 'description'},
        ],

        modalSearch: {
          fields: ['property']
        }
      }
    },
  }
</script>

<style lang="less">
  .modalView {
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

  .flex {
    display: flex;
    @media (max-width: 980px) {
      flex-direction: column;
    }
  }
</style>
