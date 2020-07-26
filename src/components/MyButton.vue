<template>
  <div class="myButtons">
    <div
      @click="onClick"
      :class="'mybtn-'+color+'-'+size"
    >
            <span v-if="href">
                <a :href="href"></a>
            </span>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MyButton',
    props: {
      size: {
        type: String,
        default: 'medium',
      },
      color: {
        type: String,
        default: 'primary',
      },
      href: {
        type: String,
      },
    },
    methods: {
      onClick(e) {
        this.$emit('click', e.target);
      },
    },
  };

</script>


<style lang="less" scoped>
  .myButtons {
    display: inline-block;
    text-align: center;
    text-decoration: none;
    margin: 5px 4px;
    border-radius: 10px;
  }

  @set-colors: #007bff, #28a745, #ffc107, #dc3545, #f8f9fa, #6c757d, #343a40;
  @set-names: primary, success, warning, danger, light, secondary, dark;
  @set-sizes: exsmall, small, medium, large, exlarge;

  .mix1(@i) {
    @color: extract(@set-colors, @i);
    @name: extract(@set-names, @i);
    @font-color: contrast(@color);
    @focus-hover-color: darken(@color, 20%);
    @shadow-color: darken(@color, -20%);
  }

  .mix2 {
    background-color: @color;
    color: @font-color;
    display: block;
    text-align: center;
    text-decoration: none;

    &:active {
      transform: scale(1.1);
      filter: saturate(600%);
    }

    &:hover,
    &:focus {
      box-shadow: 0 0 1px 2px @shadow-color;
      background-color: @focus-hover-color;
      cursor: pointer;
    }
  }

  .color-generator(@i: 1) when (@i <= length(@set-colors)) {

    .mix1(@i);

    .mybtn-@{name} {
      margin: 5px 4px;
      border-radius: 4px;
      padding: .6em 1.4em;
      .mix2;
    }
    .shadow-@{name} {
      box-shadow: 0 0 1px 2px @shadow-color;
    }

    .color-generator(@i + 1);
  }


  .color-generator2(@i , @j) when (@i <= length(@set-colors)) {
    .mix1(@i);
    @size: extract(@set-sizes, @j);

    .mybtn-@{name}-@{size} {
      padding: .05em+@j*.15em .2em+@j*.1em;

      font-size: .5em + @j *.1em;
      border-radius: 4px;
      .mix2;
    }
    .shadow {
      box-shadow: 0 0 50px 14px @shadow-color;
    }
    .color-generator2(@i + 1, @j)
  }

  .size-generator (@z:1) when (@z <= length(@set-sizes)) {

    .color-generator2(1, @z);
    .size-generator(@z + 1);
  }

  .color-generator();

  .size-generator();

</style>
