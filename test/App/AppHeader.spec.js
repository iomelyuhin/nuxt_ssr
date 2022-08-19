import { mount } from '@vue/test-utils'
import AppHeader from '@/components/App/AppHeader.vue'


describe("AppHeader", () => {
  it("renders successfully", () => {
    const wrapper = mount(AppHeader)
    expect(wrapper.vm).toBeTruthy()

  })
})
