<template>
  <div>
  <Nbar></Nbar>
  <carousel-component></carousel-component>
  <Featurette></Featurette>
  </div>
</template>

<script>
import Nbar from './components/Header/NBar.vue'
import CarouselComponent from './components/Header/CarouselComponent.vue'
import Featurette from './components/Main/Featurette.vue'

export default {
  name: 'app',
  components: {
    Nbar,
    CarouselComponent,
    Featurette
  }
}
</script>

<style >
body {
  padding-top: 3rem;
  padding-bottom: 3rem;
  color: #5a5a5a;
}
</style>
