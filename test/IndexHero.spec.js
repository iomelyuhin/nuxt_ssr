import { mount } from '@vue/test-utils'
import IndexHero from '@/components/index/IndexHero.vue'

describe('IndexHero', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(IndexHero)
    expect(wrapper.vm).toBeTruthy()
  })
})
