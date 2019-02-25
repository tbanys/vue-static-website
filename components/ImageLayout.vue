<template>
  <div class="container imageLayout">
    <div class="row">
      <image-item v-for="image in images" :key="image" :url="image" />
    </div>
  </div>
</template>

<script>
import ImageItem from '~/components/ImageItem.vue'

export default {
  components: {
    ImageItem
  },
  data() {
    return {
      images: [
        'https://i.ibb.co/PGtTVvx/17.jpg',
        'https://i.ibb.co/ZHvpjfz/16.jpg',
        'https://i.ibb.co/nmTzkV5/15.jpg',
        'https://i.ibb.co/LCH6hgn/14.jpg',
        'https://i.ibb.co/52PpjXB/13.jpg',
        'https://i.ibb.co/V2hYBCv/12.jpg',
        'https://i.ibb.co/3vX4NZF/10.jpg',
        'https://i.ibb.co/L1f56b5/9.jpg',
        'https://i.ibb.co/5FtMVVL/8.jpg',
        'https://i.ibb.co/wzBZmSs/7.jpg',
        'https://i.ibb.co/9hHqtxX/6.jpg',
        'https://i.ibb.co/c8y3n2s/5.jpg',
        'https://i.ibb.co/D8n8Zqd/4.jpg',
        'https://i.ibb.co/6BSbHjH/3.jpg',
        'https://i.ibb.co/xqbzh8D/2.jpg',
        'https://i.ibb.co/XzbknCm/1.jpg'
      ]
    }
  }
}
</script>
