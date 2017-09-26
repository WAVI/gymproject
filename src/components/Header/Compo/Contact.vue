<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 cl-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>Contact an instructor</h1>
          <hr>
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              class="form-control"
              placeholder="Enter your name">
          </div>

          <div class="form-group">
            <label for="mail">Mail</label>
            <input
              type="text"
              id="mail"
              class="form-control"
              placeholder="Enter your mail">
          </div>

          <div class="form-group">
            <label for="number">Number</label>
            <input
              type="text"
              id="mail"
              class="form-control"
              placeholder="Enter your number">
          </div>
        </div>
      </div>
          <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
              <label for="message">Message</label><br>
              <textarea
                id="message"
                rows="5"
                class="from-control"
                placeholder="Enter your message"
                v-model= "message"
              ></textarea>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <button
                class="btn btn-primary"
                @click.prevent="submitted">Submit!
              </button>
          </div>
        </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userData: {
        username: ' ',
        mail: '',
        age: 0
      },
      message: '',
      isSubmitted: false
    };
  },
  methods: {
    submitted () {
      this.isSubmitted = true;
    }
  }
};
</script>

<style scoped>
textarea {
  resize: none;
}
</style>
