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
                >Text of Button
                </MyButton>
            </div>
        </MyModal>

    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    import MyModal from '@/components/MyModal.vue'
    import MyButton from "@/components/MyButton";

    export default {
        name: 'Home',
        components: {
            HelloWorld,
            MyButton,
            MyModal
        },
        data() {
            return {
                colors: ['primary', 'success', 'warning', 'danger', 'light', 'secondary', 'dark'],
                sizes: ['exsmall', 'small', 'medium', 'large', 'exlarge'],
                size: 'medium',
                color: '',
                href: '',

            }
        },
        methods: {
            proc(data) {
                console.log(data);
            },
            showOpen(){
                console.log('Open modal window')
            },
            showClose(){
                console.log('Close modal window')
            },
        }
    }
</script>


<style lang="less" scoped>

</style>
