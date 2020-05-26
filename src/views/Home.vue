<template>
    <div class="home">
        <!--        <img alt="Vue logo" src="../assets/logo.png">-->
        <!--        <HelloWorld msg="Welcome to Your Vue.js App"/>-->
        <div v-for="s in sizes">
            <MyButton
                    @clickOn='proc'
                    v-for="c in colors" :color=c :size=s
                    :href="'https://google.com/'+s+'/'+c"
            >Text of Button
            </MyButton>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    import MyButton from "@/components/MyButton";

    export default {
        name: 'Home',
        components: {
            HelloWorld,
            MyButton,
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
            }
        }
    }
</script>
