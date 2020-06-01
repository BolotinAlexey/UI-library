<template>
    <div class="col"
         :style="{width: 100/cols+'%'}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Column",
        default: 3,
        props: {
            cols: {
                type: Number,
                default: 3,
                validator: function (value) {
                    return value >= 1 && value <= 12
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .col {
        display: flex;
        margin: 4px 2px;
        padding: 2px 1px;
        background-color: #888888;
        border: 1px solid red ;

    }
</style>
