<template>
    <div class="home">

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
    </div>
</template>

<script>
    // @ is an alias to /src
    import DataTable from '@/components/DataTable.vue'
    import HelloWorld from '@/components/HelloWorld.vue'
    import MyModal from '@/components/MyModal.vue'
    import MyButton from "@/components/MyButton.vue";

    export default {
        name: 'Home',
        components: {
            HelloWorld,
            MyButton,
            DataTable,
            MyModal
        },
        data() {
            return {
                colors: ['primary', 'success', 'warning', 'danger', 'light', 'secondary', 'dark'],
                sizes: ['exsmall', 'small', 'medium', 'large', 'exlarge'],
                size: 'medium',
                color: '',
                href: '',
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
