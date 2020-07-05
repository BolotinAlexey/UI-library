<template>
    <VueMarkdown>
        # modal
    </VueMarkdown>
</template>

<script>
    import VueMarkdown from 'vue-markdown';
    import MyModal from '@/components/MyModal.vue'

    export default {
        name: "MyModalView",
        components: {
          VueMarkdown,
          MyModal,
        },
    }
</script>

<style scoped>

</style>