<template>
  <div class="hero">
    <h1 class="hero__title">Hello world!!!</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>

<style lang="scss" scoped>
.hero__title {
  @include h1;
}
</style>
