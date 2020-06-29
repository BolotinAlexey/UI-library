<template>
    <div class="home">
        <Navbar>
            <template v-slot:brand>
                <img src="../assets/myLogo.png" alt="logo"/>
            </template>
            <template v-slot:menu>
                <router-link to="/button">MyButton</router-link>
                <router-link to="/grid">MyGrid</router-link>
                <router-link to="/modal">MyModal</router-link>
                <router-link to="/carousel">MyCarousel</router-link>
                <router-link to="/table">MyTable</router-link>
            </template>
        </Navbar>
        <MyModal
                :txtBtn=btn
                @open="showOpen"
                @close="showClose">
            <template v-slot:header
                      class="header">
                <h2>{{btn}}</h2>
            </template>
            <div v-for="s in sizes">
                <MyButton
                        @clickOn='proc'
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
                <Column v-for="i in 6" :cols='2'>1/6 колонки</Column>
            </Row>
            <Row>
                <Column v-for="i in 4" :cols='3'>1/4 колонки</Column>
            </Row>
            <Row>
                <Column v-for="i in 3" :cols='4'>1/3 колонки</Column>
            </Row>
            <Row>
                <Column :cols='6'>
                    <Column :cols='6'>полколонки в полколонке</Column>
                </Column>
                <Column :cols='6'>1/2 колонки</Column>
            </Row>
            <Row>
                <Column>Колонка по умолчанию</Column>
                <Column :cols='2'>1/6 колонки</Column>
                <Column>Колонка по умолчанию</Column>
            </Row>
        </MyModal>
    </div>

</template>

<script>
    import Navbar from '@/components/Navbar.vue'
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
                btn:'КНОПКИ',
                tbl:'ТАБЛИЦА',
                car:'КАРУСЕЛЬ',
                grid:'СЕТКА',
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
