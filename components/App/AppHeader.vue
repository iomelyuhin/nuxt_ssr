<template>
  <div class="header">
    <div class="header__langs">
      <button 
        v-for="lang in $i18n.locales" 
        :key="lang.code" 
        class="header__langs-btn" 
        @click.prevent="setLocale(lang.code)"
      >
          {{lang.name}}
        </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AppHeader',
  methods: {
    setLocale(locale: string) {
      this.$i18n.setLocale(locale)
    }
  }
})
</script>

<style lang="scss" scoped>
</style>