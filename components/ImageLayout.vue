<template>
  <div class="container-fluid imageLayout">
    <div v-if="images.length" class="row">
      <div
        v-for="(image, index) in images"
        :key="image.id"
        class="col-12 col-sm-6 col-md-3"
        :src="image.src"
      >
        <div class="square_container">
          <div
            class="square preview-img-item"
            :style="'background-image: url(' + image.src + ')'"
            @click="$photoswipe.open(index, images)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: []
    }
  },
  created() {
    this.fetchImages()
  },
  methods: {
    async fetchImages() {
      const images = await this.$axios.$get('media?per_page=30')
      this.images = this.loopImages(images)
    },
    loopImages(images) {
      const arr = []
      images.forEach(item => {
        arr.push({
          src: item.media_details.sizes.full.source_url,
          w: item.media_details.sizes.full.width,
          h: item.media_details.sizes.full.height
        })
      })
      return arr
    }
  }
}
</script>
