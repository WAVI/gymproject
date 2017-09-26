<template>
  <div>
  <Nbar></Nbar>
  <MainPageComponent :featurettes="featurettes"></MainPageComponent>

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
          src: 'http://via.placeholder.com/500x500'
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

<style >
body {
  padding-top: 3rem;
  padding-bottom: 3rem;
  color: #5a5a5a;
}
</style>
