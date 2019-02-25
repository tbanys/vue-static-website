<template>
  <div class="col-12 col-sm-6 col-md-3">
    <div class="square_container">
      <div class="square" :style="imageStyle" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: 'none'
    }
  },
  computed: {
    imageStyle() {
      return {
        backgroundImage: `url(${this.url})`
      }
    }
  }
}
</script>
