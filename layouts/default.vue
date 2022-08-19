<template>
  <div class="wrapper">
    <AppHeader />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppHeader from '../components/App/AppHeader.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: { AppHeader },
})
</script>

<style lang="scss" scoped>
.hero__title {
  @include h1;
}
</style>