<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
    <div class="container">
      <router-link class="navbar-brand" to="/">
      <img src="../../assets/logo.png" width="150" height="40" alt="">
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" >Why Join Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" >Price</a>
        </li>
        <li class="nav-item">
          <router-link class="nav-link js-scroll-trigger" to="/contact">Contact</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" >Become member</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" >About us</a>
        </li>
      </ul>
    </div>
    </div>
  </nav>
</template>

<script>

</script>

<style scoped>

/* .navbar > .container {
    width:auto;
  } */
</style>