<template>
  <div id="app">
    <Navbar>
      <template v-slot:brand>

        <img alt="logo" src="../assets/logo.png"/></template>
      <template v-slot:menu
                :style="{'color':'white'}">
        <router-link to="/button">MyButton</router-link>
        <router-link to="/grid">MyGrid</router-link>
        <router-link to="/modal">MyModal</router-link>
        <router-link to="/carousel">MyCarousel</router-link>
        <router-link to="/table">MyTable</router-link>
        <router-link to="/navbar">Navbar</router-link>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </template>
    </Navbar>
    <router-view/>
  </div>
</template>
<script>
  import Navbar from '@/components/Navbar.vue';

  export default {
    name: 'Home',
    components: {
      Navbar,
    },
  };

</script>
<style lang="less">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 10px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
