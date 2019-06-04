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
      const params = {
        method: 'flickr.photosets.getPhotos',
        api_key: '567d27c46a9b55c64dfd98a3ead6d07e',
        photoset_id: '72157704540684422',
        user_id: '169598058@N03',
        extras: 'url_o',
        page: 1,
        format: 'json',
        nojsoncallback: 1,
        per_page: 30
      }
      const images = await this.$axios.$get('rest', { params })
      this.images = this.loopImages(images.photoset.photo)
    },
    loopImages(images) {
      const arr = []
      images.forEach(item => {
        arr.push({
          src: item.url_o,
          w: item.width_o,
          h: item.height_o
        })
      })
      return arr
    }
  }
}
</script>
