<template>
  <div>
    <CarouselComponent></CarouselComponent>
    <FeaturetteComponent v-for="(item,index) in featurettes"
    :key = "index"
    :title = "item.title"
    :description = "item.description"
    :src = "item.src"
    ></FeaturetteComponent> -->
  </div>
</template>

<script>
import CarouselComponent from './Compo/CarouselComponent.vue';
import FeaturetteComponent from './Compo/FeaturetteComponent.vue';

export default {
  props: {
    featurettes: {
      type: Array,
      required: true
    }
  },
  components: {
    CarouselComponent,
    FeaturetteComponent
  }
};
</script>

<style>
</style>