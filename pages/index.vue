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
  },
  head() {
    return {
      title: 'Medurys - vidaus ir lauko medinės durys',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Medinės vidaus ir lauko durys. Aukščiausios kokybės medžio masyvo durys. Individualus dizainas, dydis ir spalvos.'
        },
        {
          name: 'google-site-verification',
          content: '5lo4R86EblBBDoWeX6sQEFkVpkw8jWbMOYd-S18vTao'
        }
      ]
    }
  }
}
</script>
