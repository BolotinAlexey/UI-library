<template>
    <div class="container">
        <div class="modal">
            <header :class="{hide: isHide}">
                <slot name="header">
                </slot>
            </header>
            <main :class="{hide: isHide}">
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
                </slot>
                <MyButton
                        class="xModal"
                        size="exsmall"
                        color="danger"
                        @clickOn="procModal"
                >X
                </MyButton>
            </main>
            <div>
                <slot name="trigger">
                    <MyButton
                            color="primary"
                            @clickOn="procModal"
                    >Open/Close modal
                    </MyButton>
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
    import MyButton from "@/components/MyButton.vue"

    export default {
        name: "MyModal",
        components: {
            MyButton
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
    }
</script>

<style scoped lang="less">
    .shift {
        transform: translate(-50%, -50%);
        position: fixed;
        left: 50%;
    }

    .container {
        background-color: rgba(0, 0, 0, .6);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .modal {
        .shift;
        top: 50%;
        background: wheat;
        display: flex;
        flex-direction: column;
        border: 3px double cornflowerblue;
        padding: 10px;
        max-height: 80%;
        max-width: 80%;
        overflow: auto;
        margin: 15px;
    }

    .btnClose {
        display: inline-block;
        margin-top: 10px;
    }

    .xModal {
        position: absolute;
        font-weight: bold;
        color: red;
        right: 0;
        top: 0;
    }

    .hide {
        display: none;
    }

</style>
