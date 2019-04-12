<template>
  <div>
    <Header />
    <image-layout />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import ImageLayout from '~/components/ImageLayout.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    ImageLayout,
    Footer
  },
  data() {
    return {}
  }
}
</script>
