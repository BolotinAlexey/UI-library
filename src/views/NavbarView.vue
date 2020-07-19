<template>
  <div class="view">
    <vue-markdown class="head">
      # **Navbar**
    </vue-markdown>
    <p>
      The <code>&ltNavbar&gt</code> component is a shell located
      at the top of your page in the form of a vertical strip and
      contains elements such as a logo, links to go to other pages.
      When the page width is reduced to less than 600 pixels,
      the links disappear, but another element appears - "burger",
      when you click to which links are placed in a column.
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
      The <code>&ltNavbar&gt</code> component generates a container in the
      form of a <code>&ltdiv&gt</code> tag, inside which there is a slot named "brand",
      a slot named "menu" and a button "burger menu".
    </p>
    <p>
      An image with a logo is inserted into the "brand" slot.
      The "menu" slot contains links to pages.
    </p>
    <div>
      <h3>Example:</h3>
      <Navbar :style="{'position':'static'}">
        <template v-slot:brand>
          <img src="../assets/myLogo.png" alt="logo"/>
        </template>
        <template v-slot:menu>
          <router-link to="/button">MyButton</router-link>
          <router-link to="/grid">MyGrid</router-link>
          <router-link to="/modal">MyModal</router-link>
          <router-link to="/carousel">MyCarousel</router-link>
          <router-link to="/table">MyTable</router-link>
          <router-link to="/navbar">Navbar</router-link>
        </template>
      </Navbar>
    </div>

    <div class="contCode">
        <pre>
          <code>
            &lt;Navbar :style="{'position':'static'}"&gt;
              &lt;template v-slot:brand&gt;
                &lt;img src="../assets/myLogo.png" alt="logo"/&gt;
              &lt;/template&gt;
              &lt;template v-slot:menu&gt;
                &lt;router-link to="/button"&gt;MyButton&lt;/router-link&gt;
                &lt;router-link to="/grid"&gt;MyGrid&lt;/router-link&gt;
                &lt;router-link to="/modal"&gt;MyModal&lt;/router-link&gt;
                &lt;router-link to="/carousel"&gt;MyCarousel&lt;/router-link&gt;
                &lt;router-link to="/table"&gt;MyTable&lt;/router-link&gt;
                &lt;router-link to="/navbar"&gt;Navbar&lt;/router-link&gt;
              &lt;/template&gt;
            &lt;/Navbar&gt;
          </code>
        </pre>
    </div>
    <br>
    <hr>
    <br>
    <Vue-markdown>
      ## **Colors**
    </Vue-markdown>
    <p>
      <code>&lt;/Navbar&gt;</code> has two props for changing the color interface:
      <code>bgcolor</code> and <code>txtcolor</code>.
    </p>
    <p>
      <code>bgcolor</code> is responsible for the background color of the <code>&lt;/Navbar&gt;</code>.
    </p>
    <p>
      <code>txtcolor</code> is responsible for the text color of the <code>&lt;/Navbar&gt;</code>.
    </p>
      <Navbar :style="{'position':'static'}"
              bgcolor="yellow"
              txtcolor="green">
        <template v-slot:brand>
          <img src="../assets/myLogo.png" alt="logo"/>
        </template>
        <template v-slot:menu>
          <router-link to="/button">MyButton</router-link>
          <router-link to="/grid">MyGrid</router-link>
          <router-link to="/modal">MyModal</router-link>
          <router-link to="/carousel">MyCarousel</router-link>
          <router-link to="/table">MyTable</router-link>
          <router-link to="/navbar">Navbar</router-link>
        </template>
      </Navbar>
    <div class="contCode">
      <pre>
        <code>
          &lt;Navbar :style="{'position':'static'}"
                  bgcolor="yellow"
                  txtcolor="green"&gt;
	          &lt;template v-slot:brand&gt;
		            &lt;img src="../assets/myLogo.png" alt="logo"/&gt;
            &lt;/template&gt;
            &lt;template v-slot:menu&gt;
		            &lt;router-link to="/button"&gt;MyButton&lt;/router-link&gt;
		            &lt;router-link to="/grid"&gt;MyGrid&lt;/router-link&gt;
		            &lt;router-link to="/modal"&gt;MyModal&lt;/router-link&gt;
		            &lt;router-link to="/carousel"&gt;MyCarousel&lt;/router-link&gt;
		            &lt;router-link to="/table"&gt;MyTable&lt;/router-link&gt;
		            &lt;router-link to="/navbar"&gt;Navbar&lt;/router-link&gt;
            &lt;/template&gt;
          &lt;/Navbar&gt;
        </code>
      </pre>

    </div>

    <br>
    <hr>
    <br>
    <Vue-markdown>
      ## **Table of props**
    </Vue-markdown>
    <DataTable :items="propsProperties">
    </DataTable>
    <br>
    <hr>
    <br>
  </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown';
  import Navbar from "@/components/Navbar.vue";
  import DataTable from "@/components/DataTable.vue";

  export default {
    name: "MyButtonView",
    components: {
      VueMarkdown,
      Navbar,
      DataTable,
    },
    data() {
      return {
        propsProperties: [
          {property: 'txtcolor', type: 'string',required: 'false', default: '"wheat"',
            description: 'Text color of the Navbar.'},
          {property: 'bgcolor', type: 'string',required: 'false', default: '"darkblue"',
            description: 'Background color of the Navbar.'},
        ],
      }
    }
  }
</script>

<style lang="less">
  .view {
    text-align: start;
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
</style>
