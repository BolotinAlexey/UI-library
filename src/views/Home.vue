<template>
  <div class="home">
    <MyModal>
        <template v-slot:header>

        </template>
        <template v-slot:default>

        </template>
        <template v-slot:trigger>

        </template>
    </MyModal>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import MyModal from '@/components/MyModal.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
      MyModal
  }
}
</script>
