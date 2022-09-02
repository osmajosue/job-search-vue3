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
      "How we Hire",
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

  describe("When user is logged out", () => {
    it("prompts user to sign in", () => {
      const wrapper = mount(MainNav);
      const loginButton = wrapper.find("[data-test='login-btn']");
      expect(loginButton.exists()).toBe(true);
    });
  });

  describe("When user is logged in", () => {
    it("shows the profile image", async () => {
      const wrapper = mount(MainNav);

      let profileImage = wrapper.find("[data-test='profile-img']");
      let loginButton = wrapper.find("[data-test='login-btn']");

      expect(profileImage.exists()).toBe(false);
      expect(loginButton.exists()).toBe(true);

      await loginButton.trigger("click");

      loginButton = wrapper.find("[data-test='login-btn']");
      expect(loginButton.exists()).toBe(false);

      profileImage = wrapper.find("[data-test='profile-img']");
      expect(profileImage.exists()).toBe(true);
    });
  });
});
