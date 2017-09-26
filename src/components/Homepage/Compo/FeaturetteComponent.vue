<template>
<div class="container">
  <hr class="featurette-divider">
  <div class="row featurette">
    <div class="col-md-7">
      <h2 class="featurette-heading">{{ title }}.
        <span class="text-muted">Checkmate.</span>
      </h2>
      <p class="lead">{{ description }}</p>
    </div>
    <div class="col-md-5">
      <img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="Generic placeholder image" :src="src">
    </div>
  </div>
  <hr class="featurette-divider">
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
     margin: 80px 0;
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

</style>