import Vue from 'vue'
import { config } from '@vue/test-utils'

Vue.config.silent = true

// Mock Nuxt components
config.stubs['nuxt-link'] = true // not needed it you are not in nuxt
config.stubs['no-ssr'] = true // not needed it you are not in nuxt
config.mocks.$i18n = { locale: "en" }
config.mocks.$t = (i) => i
config.mocks.localePath = (i) => i