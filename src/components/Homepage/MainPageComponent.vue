<template>
  <div>
    <CarouselComponent></CarouselComponent>
    <br>
    <div id="designer" class="container">
      <FeaturetteComponent v-for="(item,index) in featurettes"
        :key = "index"
        :title = "item.title"
        :description = "item.description"
        :src = "item.src"
      ></FeaturetteComponent>
      <br>
      <MapLocation></MapLocation>
    </div>
  </div>
</template>

<script>
import CarouselComponent from './Compo/CarouselComponent.vue';
import FeaturetteComponent from './Compo/FeaturetteComponent.vue';
import MapLocation from './Compo/MapLocation.vue';
export default {
  props: {
    featurettes: {
      type: Array,
      required: true
    }
  },
  components: {
    CarouselComponent,
    FeaturetteComponent,
    MapLocation
  }
};
</script>

<style scoped>

#designer {
  background: #fff;
}

</style>