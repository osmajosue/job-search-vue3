import { mount } from "@vue/test-utils";
import ProfileImage from "@/components/Navigation/ProfileImage.vue";

describe("ProfileImage", () => {
  it("renders the image", () => {
    const wrapper = mount(ProfileImage);
    expect(wrapper.exists()).toBe(true);
  });
});
