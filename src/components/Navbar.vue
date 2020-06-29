<template>
    <div class="containerNav">
        <div class="navForMobile">
            <div class="brand">
                <slot name="brand">
                </slot>
            </div>
            <div class="buttonBurger">
                <button @click="isBurger=!isBurger">
                    <i class="fas fa-bars"
                    v-if="!isBurger"></i>
                    <i class="fas fa-times-circle"
                       v-if="isBurger"></i>
                </button>

            </div>
        </div>

        <div class="menu"
             v-if="isBurger">
            <slot name="menu">
            </slot>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: "Navbar",
        data() {
            return {
                isBurger :false,
            }
        },
        computed:{
            hideMenu() {

            }
        }
    }
</script>

<style scoped lang="less">
    .containerNav {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        color: wheat;
        background-color: darkblue;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;

        @media (min-width: 731px) {
            flex-direction: row;
            justify-content: space-between;
            height: 50px;

        }
    }

    .menu {
        display: flex;
        @media (max-width: 732px) {
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
        @media (max-width: 732px) {
            border: white 2px solid;
        }
    }

    .brand {
        margin: 0 0 5px 5px;
        height: 30px;
    }

     .buttonBurger {
        @media (min-width: 731px) {
            display: none;
        }
        button{
            background-color: darkblue;
            margin: 5px;
        }
    }
    .hide{
        display: none;
    }

</style>