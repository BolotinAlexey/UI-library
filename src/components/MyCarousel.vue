<template>
  <div class="carousel"
       :style="carouselStyle">
      <div class="frames"
           :style="framesStyle">
        <button class="leftButton"
                :class="{hide:currentSlide===images.length-1}"
                @click="currentSlide++">
          <img src="../assets/left.png" alt="" width="25"/>
        </button>
        <div
          v-for="image in images">
          <img :src="image"
               :style="imgStyle">
        </div>
        <button class="rightButton"
                :class="{hide: currentSlide===0}"
                @click="currentSlide--">
          <img src="../assets/right.png" alt="" width="25"/>
        </button>
      </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'MyCarousel',
  props: {
    images: {
      type: Array,
      default: () => [],
    },
    width: {
      type: Number,
      default: 320,
    },
    speed: {
      type: Number,
      default: .5,
    },
  },


  data() {
    return {
      currentSlide: 0,
    };
  },
  computed: {
    carouselStyle(): object {
      return {
        width: this.width + 'px',
      };
    },
    framesStyle(): object {
      const ml: number = -this.currentSlide * 100;
      return {
        'margin-left': ml + '%',
        'transition': 'all ' + this.speed + 's',
      };
    },
    imgStyle(): object {
      return {
        'width': this.width + 'px',
        'object-fit': 'cover'};
    },
  },
});
</script>

<style lang="less">
  .mix {
    position: absolute;
    top: 50%;
    background-color: rgba(0, 0, 0, 0);
    border: none;
    padding: 0;
    cursor: pointer;

    :hover, :active {
      background-color: rgba(0, 0, 0, .6);
      border: none;
    }
  }

  .carousel {
    position: relative;
    margin: 3%;
    overflow: hidden;
  }

  .frames {
    display: flex;

  }


  .leftButton {
    .mix;
    display: block;
    left: 3%;

  }

  .rightButton {
    .mix;
    display: block;
    right: 3%;
  }

  .hide {
    display: none;
  }

</style>
