import MyButton from "*.vue";import DataTable from "*.vue";
<template>
  <div class="carouselView">
    <vue-markdown class="head">
      # **MyCarousel**
    </vue-markdown>
    <p>
      You can use the component <code>&ltMyCarousel&gt</code> to create a carousel
      with the dimensions you specified,the scroll speed and an array of images.
    </p>
    <br>
    <Vue-markdown>
      ***
    </Vue-markdown>
    <br>
    <Vue-markdown>
      ## **Overview**
    </Vue-markdown>
    <p>
      Component <code>&ltMyCarousel&gt</code> draws a slider, images in which
      are flipped using the buttons "scroll left" and "scroll right"
    </p>
    <div>
      <MyCarousel
        :images="images">
      </MyCarousel>
    </div>
    <div class="contCode">
      <pre>
        <code>
          &lt;div&gt;
          &lt;MyCarousel  :images="images"&gt;
          &lt;/MyCarousel&gt;
          &lt;/div&gt;
        </code>
      </pre>
    </div>
    <p>
      where "images" is an array of images:
    </p>
    <div class="contCode">
      <pre>
        <code>
          images: ['https://loremflickr.com/320/240/dog',
                  'https://loremflickr.com/320/240/cat',
                  'https://loremflickr.com/320/240/horse',
                  'https://loremflickr.com/320/240/men',
                  'https://loremflickr.com/320/240/women']
        </code>
      </pre>
    </div>
    <br>
    <hr>
    <br>
    <Vue-markdown>
      ## **Sizing**
    </Vue-markdown>
    <p>
      In the <code>&ltMyCarousel&gt</code>, you can set the width of the carousel.
      Moreover, if this parameter does not match the width of the images in the "images" array,
      then they will stretch or decrease to the specified size of the carousel.
      The height of the carousel is adjusted to the width to comply with the proportions:
    </p>
    <div class="flex">
      <div>
        <p class="sign">width=220</p>
        <MyCarousel
          :images="images"
          :width="220">
        </MyCarousel>
      </div>
      <div>
        <p class="sign">width=320(default)</p>
        <MyCarousel
          :images="images">
        </MyCarousel>
      </div>
      <div>
        <p class="sign">width=400</p>
        <MyCarousel
          :images="images"
          :width="400">
        </MyCarousel>
      </div>
    </div>
    <div class="contCode">
      <pre>
        <code>
          &lt;div class="flex"&gt;
            &lt;div&gt;
              &lt;MyCarousel
                :images="images"
                :width="220"&gt;
              &lt;/MyCarousel&gt;
            &lt;/div&gt;
            &lt;div&gt;
              &lt;MyCarousel  :images="images"&gt;
              &lt;/MyCarousel&gt;
            &lt;/div&gt;
            &lt;div&gt;
              &lt;MyCarousel
                :images="images"
                :width="400"&gt;
              &lt;/MyCarousel&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        </code>
      </pre>
    </div>

    <br>
    <hr>
    <br>
    <Vue-markdown>
      ## **Speed**
    </Vue-markdown>
    <p>
      In the <code>&ltMyCarousel&gt</code>, it is also possible to adjust the speed
      of the image change for more or less smoothness.
      The props speed is responsible for this.
      Default speed = 0.5:
    </p>
    <div class="flex">
      <div>
        <p class="sign">speed=0.2</p>
        <MyCarousel
          :images="images"
          :speed=".2">
        </MyCarousel>
      </div>
      <div>
        <p class="sign">speed=1</p>
        <MyCarousel
          :images="images"
          :speed="1">
        </MyCarousel>
      </div>
    </div>
    <div class="contCode">
     <pre>
       <code>
         &lt;div class="flex"&gt;
	        &lt;div&gt;
		        &lt;MyCarousel
			        :images="images"
			        :speed=".2"&gt;
		        &lt;/MyCarousel&gt;
	        &lt;/div&gt;
	        &lt;div&gt;
		        &lt;MyCarousel
			        :images="images"
			        :speed="1"&gt;
		        &lt;/MyCarousel&gt;
	        &lt;/div&gt;
        &lt;/div&gt;
      </code>
     </pre>
    </div>
    <br>
    <hr>
    <br>
    <Vue-markdown>
      ## **Props**
    </Vue-markdown>
    <DataTable
    DataTable :items="carouselProperties"
    :columns="carouselColumns"
    :search="carouselSearch">
    </DataTable>
    <br>
    <hr>
    <br>

  </div>
</template>

<script>
  import VueMarkdown from "vue-markdown";
  import DataTable from "@/components/DataTable.vue";
  import MyCarousel from "@/components/MyCarousel.vue";

  export default {
    name: "MyCarouselView",
    components: {
      VueMarkdown,
      DataTable,
      MyCarousel,
    },
    data() {
      return {
        images: ['https://loremflickr.com/320/240/dog',
          'https://loremflickr.com/320/240/cat',
          'https://loremflickr.com/320/240/horse',
          'https://loremflickr.com/320/240/men',
          'https://loremflickr.com/320/240/women'],
        carouselProperties: [
          {property: 'images', type: 'Array', default: '[]', description: 'Array of images.'},
          {property: 'width', type: 'Number', default: '320', description: 'Sets the width of the carousel.'},
          {property: 'speed', type: 'Number', default: '0.5', description: 'Sets the animation speed.'},
        ],
        carouselColumns: [
          {title: 'Property', value: 'property', sortable: true},
          {title: 'Type', value: 'type'},
          {title: 'Default', value: 'default'},
          {title: 'Description', value: 'description'},
        ],
        carouselSearch: {
          fields: ['property']
        }
      }
    }
  };
</script>

<style lang="less">
  .carouselView {
    text-align: start;
    margin-left: 2vw;
  }

  .head {
    text-align: center;
  }

  code {
    font-size: large;
    color: darkred;
  }

  .contCode {
    background-color: rgba(0, 200, 0, .1);
  }

  .flex {
    display: flex;
    @media (max-width: 980px) {
      flex-direction: column;
      align-items: center;
    }
  }
  .sign{
    text-align: center;
    font-family: "Book Antiqua";
    color: darkblue;
  }
</style>
