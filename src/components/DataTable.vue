<template>
    <div class="container1">
        <div class="navTable">
            <div class="search"
                 :class="{hide: !search}">
                <label>Введите искомое слово:
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

<script lang="js">
    export default {
        name: "DataTable",
        data() {
            return {
                keyword: '',
                dataSearch: Array,
                sortState: {
                    type: Object,
                },
            }
        },

        created() {
            this.initSortState()
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
                default: null
            }
        },

        methods: {
            initSortState() {
                let countSort=0;
                this.sortState = new Map();
                this.columns.forEach(el => {
                    if (el.sortable) {
                        this.sortState.set(el, 1);
                        countSort++;
                    }
                })
                return countSort;
            },

            resort(el) {
                let currentState = this.sortState.get(el);
                const countSort=this.initSortState();
                currentState=(currentState + 1) % (countSort+1);
                 this.sortState.set(el, currentState);
                this.sortData=this.searchData.slice().sort((a, b) => {
                    if (typeof (a[el.value]) === "number") {
                        return (1 - currentState) * (a[el.value] - b[el.value]);
                    } else return (1 - currentState) *
                        ((a[el.value].toLowerCase() < b[el.value].toLowerCase()) ? 1 : -1);
                })
            }
        },


        computed: {
            searchData() {
                const arraySearchFields = (this.search.fields != null)
                    ? this.search.fields
                    : this.columns.map(item => item.value);
                const arrayFilters = (this.search.filters != null)
                    ? this.search.filters
                    : [v => v];
                return this.items.filter(us => {
                    return arraySearchFields.filter(nameAtr => {
                        return arrayFilters.filter(nameFilter => {
                                return nameFilter(us[nameAtr]).includes(nameFilter(this.keyword));
                            }
                        ).length;
                    }).length;
                });
            },

            sortData() {
                let element = this.columns.find((elem => elem.sortable && this.sortState.get(elem) !== 1));
                const newState = element !== null && this.sortState.get(element);

                return (element) ?this.searchData.slice().sort((a, b) => {
                    if (typeof (a[element.value]) === "number") {
                        return (1 - newState) * (a[element.value] - b[element.value]);
                    } else return (1 - newState) *
                        ((a[element.value].toLowerCase() < b[element.value].toLowerCase()) ? 1 : -1);
                }):this.searchData
            }

            },

    }
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
