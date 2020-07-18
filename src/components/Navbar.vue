<template>
  <div class="containerNav"
  :style="styleMenu">

    <div class="navForMobile">

      <div class="brand">
        <slot name="brand">
        </slot>
      </div>

      <div class="buttonBurger">
        <button @click="isBurger=!isBurger"
                :style="styleMenu">
          <i class="fas fa-bars"
             :style="styleMenu"
             v-if="!isBurger"></i>
          <i class="fas fa-times-circle"
             :style="styleMenu"
             v-else></i>
        </button>
      </div>

    </div>

    <div class="menu"
         v-if="showMenu">
      <slot name="menu">
      </slot>
    </div>


  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Navbar',
  data() {
    return {
      isBurger: false,
      width: 0,
    };
  },
  props: {
    bgcolor: {
      type: String,
      default: 'darkblue',
    },
    txtcolor: {
      type: String,
      default: 'wheat',
    },
  },
  computed: {
    showMenu(): boolean {
      return this.width > 599.9 || this.isBurger;
    },
    styleMenu(): object {
      return {
        'background-color': this.bgcolor,
        'color': this.txtcolor,
      };
    },
  },
  methods: {
    handleResize() {
      this.width = window.innerWidth;
    },
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
});
</script>

<style lang="less">
  .containerNav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    color: wheat;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    @media (min-width: 600px) {
      flex-direction: row;
      justify-content: space-between;
      height: 50px;

    }
  }

  .menu {
    color: wheat;
    display: flex;
    margin-right: 10px;
    @media (max-width: 599.9px) {
      flex-direction: column;
    }
  }

  a {
    color: wheat;
    text-decoration: none;
    margin: 4px;

    &:hover,
    &:focus {
      filter: saturate(1000%);
    }

    &:active {
      transform: scale(1.1);
    }
  }

  .navForMobile {
    width: 100vw;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 600px) {
      border: white 1px;
      border-style: none none solid;
    }
  }

  .brand {
    margin: 0 0 5px 10px;
    height: 30px;
  }

  .buttonBurger {
    @media (min-width: 600px) {
      display: none;
    }

    button {
      margin: 5px;
      border: none;
      cursor: pointer;
    }
  }

  .hide {
    display: none;
  }
</style>
