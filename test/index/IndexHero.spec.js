import { mount } from '@vue/test-utils'
import IndexHero from '@/components/index/IndexHero.vue'


describe("IndexHero", () => {
  it("renders successfully", () => {
    const wrapper = mount(IndexHero)
    expect(wrapper.vm).toBeTruthy()
  })
})
