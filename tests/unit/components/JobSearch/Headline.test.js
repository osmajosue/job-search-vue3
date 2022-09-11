import { nextTick } from "vue";
import { mount } from "@vue/test-utils";
import Headline from "@/components/JobSearch/Headline.vue";

describe("Headline", () => {
  beforeEach(() => {
    jest.useFakeTimers("legacy");
  });

  afterEach(() => {
    jest.useRealTimers();
  });
  it("should display introductory action verb", () => {
    const wrapper = mount(Headline);
    const actionVerb = wrapper.find("[data-test='action-verb']");
    expect(actionVerb.text()).toBe("Build for everyone");
  });

  it("changes action verb in a consisten interval", () => {
    mount(Headline);
    expect(setInterval).toHaveBeenCalled();
  });

  it("it swaps action verb after interval", async () => {
    const wrapper = mount(Headline);

    jest.runOnlyPendingTimers();
    await nextTick();

    const actionVerb = wrapper.find("[data-test='action-verb']");
    expect(actionVerb.text()).toBe("Create for everyone");
  });

  it("the timer interval is cleared when the component is unmounted", () => {
    const wrapper = mount(Headline);
    wrapper.unmount();
    expect(clearInterval).toHaveBeenCalled();
  });
});
