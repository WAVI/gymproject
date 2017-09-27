<template>
  <div>
  <Nbar></Nbar>
  <router-view :featurettes="featurettes"></router-view>

  </div>
</template>

<script>
import Nbar from './components/Header/NBar.vue';
import MainPageComponent from './components/Homepage/MainPageComponent.vue';

export default {
  name: 'app',
  data () {
    return {
      featurettes: [
        {
          title: 'MMA',
          description: 'aaa',
          src: 'http://via.placeholder.com/250x250'
        }
      ]
    };
  },
  components: {
    Nbar,
    MainPageComponent
  }
};
</script>

<style>
body {
  padding-top: 4rem;
  padding-bottom: 3rem;
  color: #5a5a5a;
  background: #eee;
  /* background-image: url("./assets/background.jpg"); */
}
</style>
