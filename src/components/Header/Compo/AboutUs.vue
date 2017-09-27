<template>
<!-- Page Content -->
  <div class="container">

    <!-- Introduction Row -->
    <h1 class="my-4">About Us
      <small>It's Nice to Meet You!</small>
    </h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, explicabo dolores ipsam aliquam inventore corrupti eveniet quisquam quod totam laudantium repudiandae obcaecati ea consectetur debitis velit facere nisi expedita vel?</p>

    <!-- Team Members Row -->
    <div class="row">
      <div class="col-lg-12">
        <h2 class="my-4">Our Team</h2>
      </div>
      <div class="col-lg-4 col-sm-6 text-center mb-4" v-for="(item, index) in staff" :key="index">
        <img class="rounded-circle img-fluid d-block mx-auto" :src="item.src" alt="">
        <h3>{{ item.name }}
          <small>{{ item.title }}</small>
        </h3>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      staff: [
        {
          name: 'Iustin',
          description: 'Joined 4 weeks ago ai',
          title: 'beginner',
          src: 'http://via.placeholder.com/250x250'
        }
      ]
    };
  }
};
</script>

<style>

</style>
