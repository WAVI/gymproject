<template>
  <div>
  <Nbar></Nbar>
  <carousel-component></carousel-component>
  <Featurette1></Featurette1>
  </div>
</template>

<script>
import Nbar from './components/Header/NBar.vue'
import CarouselComponent from './components/Header/CarouselComponent.vue'
import Featurette1 from './components/Main/Featurette1.vue'

export default {
  name: 'app',
  components: {
    Nbar,
    CarouselComponent,
    Featurette1
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
