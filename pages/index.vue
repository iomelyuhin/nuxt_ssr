<template>
  <IndexHero />
</template>

<script lang="ts">
import Vue from 'vue'
import IndexHero from '../components/index/IndexHero.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: { IndexHero },
})
</script>
