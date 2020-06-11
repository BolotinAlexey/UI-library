<template>
<div class="total">
    <div class="contModal"
    :class="{hide:isHide}">
        <div class="modal-action">
            <header class="header"
                    :class="{hide: isHide}">
                <slot name="header">
                </slot>
            </header>
            <main class="main"
                    :class="{hide: isHide}">
                <div>
                <slot >
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ab alias assumenda corporis
                        ducimus
                        eos error esse excepturi, libero magni, placeat praesentium qui quo rerum tempore veniam
                        veritatis
                        vitae voluptas?
                    </div>
                    <div>At blanditiis commodi deleniti dicta doloremque doloribus dolorum esse et excepturi explicabo
                        harum
                        ipsum iste iure laborum, maiores nisi nobis non officia possimus, quas similique, velit veniam
                        voluptas! Dolorem, magni!
                    </div>
                </slot></div>
                <MyButton
                        class="xModal"
                        size="exsmall"
                        color="danger"
                        @clickOn="procModal"
                >X
                </MyButton>
            </main>

        </div>
    </div>
    <div class="btnGroup">
        <slot name="trigger">
            <MyButton class="btnTrg"
                    color="primary"
                    @clickOn="procModal"
            >{{txtBtn}}
            </MyButton>
        </slot>
    </div>
</div>
</template>

<script lang="ts">
    import MyButton from "@/components/MyButton.vue"
    import Vue from 'vue';
    export default Vue.extend({
        name: "MyModal",
        components: {
            MyButton
        },

        props:{
            txtBtn: {
               type:String,
               default:"Открыть"
           }
        },

        data() {
            return {
                isHide: true
            }
        },
        methods: {
            procModal() {
                this.isHide=!this.isHide;
                this.$emit((this.isHide)?'close':'open');
            },
        }
    })
</script>

<style  lang="less">
    .shift {
        transform: translate(-50%, -50%);
        position: fixed;
        left: 50%;
    }

    .contModal {
        background-color: rgba(0, 0, 0, .6);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .main{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .modal-action {
        .shift;
        top: 50%;
        background: wheat;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        border: 3px double cornflowerblue;
        padding: 10px;
        max-height: 95%;
        max-height: 95%;
        margin: 2%;
        overflow: auto;
        @media (max-width: 767.98px) {
            min-width: 80%;
        }
    }


    .btnClose {
        display:block;
        margin-top: 10px;
    }

    .btnGroup {
        display: flex;
    }

    .btnTrg{
        display: block;
        margin-right: 10px;
        margin-top: 10px;
    }

    .xModal {
        position: absolute;
        font-weight: bold;
        font-size: larger;
        color: red;
        right: 0;
        top: 0;
    }

    .hide {
        display: none;
    }

</style>
