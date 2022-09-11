import { mount } from "@vue/test-utils";
import ActionButton from "@/components/Shared/ActionButton.vue";

describe("Action Button", () => {
  it("Renders text", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "Clickable button",
        type: "primary",
      },
    });

    const button = wrapper.find("[data-test='action-button']");
    expect(button.text()).toMatch("Clickable button");
  });

  it("applies one of several styles to button", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "Clickable button",
        type: "primary",
      },
    });

    const button = wrapper.find("[data-test='action-button']");
    expect(button.classes("primary")).toBe(true);
  });
});
