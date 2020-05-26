<template>
    <div class="container">
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ab alias assumenda corporis ducimus
                    eos error esse excepturi, libero magni, placeat praesentium qui quo rerum tempore veniam veritatis
                    vitae voluptas?
                </div>
                <div>At blanditiis commodi deleniti dicta doloremque doloribus dolorum esse et excepturi explicabo harum
                    ipsum iste iure laborum, maiores nisi nobis non officia possimus, quas similique, velit veniam
                    voluptas! Dolorem, magni!
                </div>
            </slot>
        </main>
        <footer>
            <slot name="trigger">
                <MyButton >
                    Open modal
                </MyButton>
            </slot>
        </footer>
    </div>
</template>

<script>
    import MyButton from "@/components/MyModal.vue"
    export default {
        name: "MyModal",
        components: {
            MyButton
        },
        data() {
            return{
                visible: false,
            }
        }
    }
</script>

<style scoped lang="less">

</style>
