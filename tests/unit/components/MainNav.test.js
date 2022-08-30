import { mount } from "@vue/test-utils";
import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("Display company name", () => {
    const wrapper = mount(MainNav);
    // await wrapper.setData({
    //   company: "Job Page",
    // });
    expect(wrapper.text()).toMatch("Diaz Carreers");
  });
});
