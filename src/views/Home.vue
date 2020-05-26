<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Row>
      <Column v-for="i in 12" :cols='12'>1/12 колонки</Column>
    </Row>
      <Row>
          <Column v-for="i in 6" :cols='6'>1/6 колонки</Column>
      </Row>
      <Row>
          <Column v-for="i in 4" :cols='4'>1/4 колонки</Column>
      </Row>
      <Row>
          <Column v-for="i in 3" :cols='3'>1/3 колонки</Column>
      </Row>
    <Row>
      <Column :cols='2'><Column :cols='2'>полколонки в полколонке</Column></Column>
        <Column :cols='2'>1/2 колонки</Column>
    </Row>
      <Row>
          <Column>Колонка по умолчанию</Column>
      </Row>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Row from '@/components/grid/Row.vue'
import Column from '@/components/grid/Column.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Row,
    Column
  },
  data: function () {
  return  {cols: 3}
  },
}
</script>
