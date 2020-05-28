<template>
    <div class="home">
        <MyCarousel :images="images">
        </MyCarousel>
    </div>
</template>

<script lang="ts">
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import MyCarousel from '@/components/MyCarousel.vue';

export default {
    name: 'Home',
    components: {
        HelloWorld,
        MyCarousel,
    },
    data() {
        return {
            images: ['https://loremflickr.com/320/240/dog',
                'https://loremflickr.com/320/240/cat',
                'https://loremflickr.com/320/240/horse',
                'https://loremflickr.com/320/240/men',
                'https://loremflickr.com/320/240/women'],
        };
    },

};
</script>
