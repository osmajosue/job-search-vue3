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
      const wrapper = mount(MainNav, {
        data() {
          return {
            isLoggedIn: false,
          };
        },
      });

      const loginButton = wrapper.find("[data-test='login-btn']");
      const profileImage = wrapper.find("[data-test='profile-img']");

      expect(loginButton.exists()).toBe(true);
      expect(profileImage.exists()).toBe(false);
    });
  });

  describe("When user is logged in", () => {
    it("shows the profile image", () => {
      const wrapper = mount(MainNav, {
        data() {
          return {
            isLoggedIn: true,
          };
        },
      });

      const loginButton = wrapper.find("[data-test='login-btn']");
      const profileImage = wrapper.find("[data-test='profile-img']");

      expect(loginButton.exists()).toBe(false);
      expect(profileImage.exists()).toBe(true);
    });
  });
});
