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


    </div>

</template>

<script>
    import Navbar from '@/components/Navbar.vue'


    export default {
        name: 'Home',
        components: {
            Navbar,
        },
    }

</script>


<style lang="less">
    .home {
        display: flex;
        justify-content: center;
        align-items: end;
    }
</style>
