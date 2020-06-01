<template>
    <div class="home">
      <!--    <img alt="Vue logo" src="../assets/logo.png">-->
      <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->

        <!--            Modal window with buttons inside-->
        <MyModal
                @open="showOpen"
                @close="showClose">
            <div v-for="s in sizes">
                <MyButton
                        @clickOn='proc'
                        v-for="c in colors" :color=c :size=s
                        :href="'https://google.com/'+s+'/'+c"
                >{{c}} {{s}}
                </MyButton>
            </div>
        </MyModal>
        <MyModal>
            <DataTable :items="users"
                       :columns="columns1"
                       :search="search1">

            </DataTable>
        </MyModal>
        <MyModal>
        <MyCarousel :images="images">
        </MyCarousel>
        </MyModal>
    </div>
  <Row>
    <Column v-for="i in 12" :cols='12'>1/12 колонки</Column>
  </Row>
  <Row>
    <Column v-for="i in 6" :cols='6'>1/6 колонки</Column>
  </Row>
  <Row>
    <Column v-for="i in 4" :cols='4'>1/4 колонки</Column>
  </Row>
  <Row>
    <Column v-for="i in 3" :cols='3'>1/3 колонки</Column>
  </Row>
  <Row>
    <Column :cols='2'><Column :cols='2'>полколонки в полколонке</Column></Column>
    <Column :cols='2'>1/2 колонки</Column>
  </Row>
  <Row>
    <Column>Колонка по умолчанию</Column>
  </Row>

</template>

<script>

    // @ is an alias to /src
    import DataTable from '@/components/DataTable.vue'
    import HelloWorld from '@/components/HelloWorld.vue'
    import MyModal from '@/components/MyModal.vue'
    import MyButton from "@/components/MyButton.vue";
    import MyCarousel from '@/components/MyCarousel.vue';
    import Row from '@/components/grid/Row.vue'
    import Column from '@/components/grid/Column.vue'

    export default {
        name: 'Home',
        components: {
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
                colors: ['primary', 'success', 'warning', 'danger', 'light', 'secondary', 'dark'],
                sizes: ['exsmall', 'small', 'medium', 'large', 'exlarge'],
                size: 'medium',
                color: '',
                href: '',
              cols: 3,
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

            }
        },
        methods: {
            proc(data) {
                console.log(data);
            },
            showOpen() {
                console.log('Open modal window')
            },
            showClose() {
                console.log('Close modal window')
            },
        }
    }

</script>


<style lang="less">
    .home {
        display: flex;
        justify-content: center;
        align-items: end;
    }
</style>
