import { shallowMount } from '@vue/test-utils'
import LoginPage from '@/views/LoginPage.vue'

describe('LoginPage.vue', () => {
  it('text maching test', () => {
    const wrapper = shallowMount(LoginPage);
    expect(wrapper.vm.$el.querySelector('h1').textContent).toEqual('안녕하세요');
  })
})
