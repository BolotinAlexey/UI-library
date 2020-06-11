<template>
    <div class="col"
         :style="{width: 100*cols/12+'%'}">
        <slot></slot>
    </div>
</template>

<script lang="ts">
    export default {
        name: "Column",
        props: {
            cols: {
                type: Number,
                default: 12,
                validator: function (value:number) {
                    return value >= 1 && value <= 12
                }
            },
        }
    }
</script>

<style  lang="less">
    .col {
        display: flex;
        margin: 2px 1px;
        padding: 2px 1px;
        background-color: #888888;
        border: 1px solid red ;
    }
</style>
