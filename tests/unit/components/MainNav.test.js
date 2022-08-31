import { mount } from "@vue/test-utils";
import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("Display company name", () => {
    const wrapper = mount(MainNav);
    // await wrapper.setData({
    //   company: "Job Page",
    // });
    expect(wrapper.text()).toMatch("Diaz Careers");
  });

  it("Displays menu items for navigation", () => {
    const wrapper = mount(MainNav);
    const expectedNavItems = [
      "Teams",
      "Locations",
      "Life at Diaz Careers",
      "How We Hire",
      "Students",
      "Jobs",
    ];
    // wrapper.find returns the first encounter
    const navMenuItems = wrapper.findAll("[data-test='main-nav-list-item']");
    const navMenuItemsText = navMenuItems.map((menuItem) => {
      return menuItem.text();
    });
    expect(navMenuItemsText).toEqual(expectedNavItems);
  });
});
