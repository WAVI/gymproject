<template>
<div>
  <hr class="featurette-divider">
  <div class="row featurette">
    <div class="col-md-7">
      <h2 class="featurette-heading">{{ title }}.
        <span class="text-muted">Checkmate.</span>
      </h2>
      <p class="lead">{{ description }}</p>
    </div>
    <div class="col-md-5">
      <div id="images">
          <img class="gallery_product filter hdpe" data-src="holder.js/500x500/auto" alt="Generic placeholder image" :src="src">
          <img class="gallery_product filter hdpe" data-src="holder.js/500x500/auto" alt="Generic placeholder image" :src="src">
          <img class="gallery_product filter hdpe" data-src="holder.js/500x500/auto" alt="Generic placeholder image" :src="src">
          <img class="gallery_product filter hdpe" data-src="holder.js/500x500/auto" alt="Generic placeholder image" :src="src">
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    }
  }
};

</script>

<style scoped>

.featurette-divider{
     margin: 20px 0;
}
.featurette {
     overflow: hidden;
}
.featurette-image.pull-left {
     margin-right: 40px;
}
.featurette-image.pull-right {
     margin-left: 40px;
}
.featurette-heading {
    font-size: 50px;
}

.gallery_product {
  margin-bottom: 10px;
}

#images {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
}

#images img {
  width: 100%;
}

</style>