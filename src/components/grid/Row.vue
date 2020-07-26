<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Row',
  };
</script>

<style lang="less">
  .row {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

</style>
