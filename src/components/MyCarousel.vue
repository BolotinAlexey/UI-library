<template>
    <div class="container">

        <div class="frame">
            <button class="leftButton"
                    :class="{hide:current===images.length-1}"
                    @click="current++">
                <img src="../assets/left.png"  height="25"/>
            </button>

            <img :src="images[current]"  alt="">

            <button class="rightButton"
                    :class="{hide: current===0}"
                    @click="current--">
                <img src="../assets/right.png" height="25"/>
            </button>
        </div>

    </div>
</template>

<script lang="ts">
export default {
    name: 'MyCarousel',
    components: {
    },
    props: {
        images: Array,
    },
    data() {
        return {
            current: 0,
        };
    },
};
</script>

<style scoped lang="less">
    @w: 320px;
    @h: 240px;

    .mix {
        position: absolute;
        cursor: pointer;
        top: 50%;
        background-color: rgba(0,0,0,0);
        border: none;
        padding: 0;
        :hover, :active {
            background-color: rgba(0,0,0,.6);
            border: none;
        }
    }

    .container{
        height: @h;
        width: @w;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .frame {
       display: block;
    }

    .leftButton {
        .mix;
        display: block;
        left: 0;

    }

    .rightButton {
        .mix;
        display: block;
        right: 0;
    }

    .hide {
        display: none;
    }

</style>
