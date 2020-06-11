<template>
    <div class="contCar">
        <div class="carousel">
            <div class="frames"
                 :style="{width:images.length*320+'px','margin-left': -current*320+'px'}">
                <div class="frame"
                     :style="{}">

                    <button class="leftButton"
                            :class="{hide:current===images.length-1}"
                            @click="current++">
                        <img src="../assets/left.png" width="25"/>
                    </button>
                    <span v-for="image in images">
                    <img :src="image" alt="">
                </span>
                    <button class="rightButton"
                            :class="{hide: current===0}"
                            :style="{left: (320-25)+'px'}"
                            @click="current--">
                        <div><img src="../assets/right.png" width="25"/></div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'MyCarousel',
        props: {
            images: Array,
        },
        data() {
            return {
                current: 0
            };
        },
    };
</script>

<style lang="less">
    @w: 320px;
    @h: 240px;

    .mix {
        position: absolute;
        cursor: pointer;
        top: 50%;
        background-color: rgba(0, 0, 0, 0);
        border: none;
        padding: 0;

        :hover, :active {
            background-color: rgba(0, 0, 0, .6);
            border: none;
        }
    }

    .contCar {
        width: @w;
        height: @h;
        position: relative;
        margin: 5% 0;
        display: flex;
        justify-content: center;
    }

    .carousel {
        justify-content: center;
        height: 100%;
        overflow: hidden;
    }

    .frames {
        display: inline-block;
        transition: all 1s;
        height: 100%;
    }

    .frame {
    }


    .leftButton {
        .mix;
        display: block;
        left: 0;

    }

    .rightButton {
        .mix;
        display: block;
        left: 100%;
    }

    .hide {
        display: none;
    }

</style>
