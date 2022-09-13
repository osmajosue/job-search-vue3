import { mount } from "@vue/test-utils";
import TextInput from "@/components/Shared/TextInput.vue";

describe("TextInput", () => {
  it("Comunicates the user has entered a character", () => {
    const wrapper = mount(TextInput, {
      props: {
        modelValue: "",
      },
    });
    const input = wrapper.find("input");
    input.setValue("V");
    input.setValue("Vu");
    input.setValue("Vue");
    expect(wrapper.emitted()["update:modelValue"]).toEqual([
      ["V"],
      ["Vu"],
      ["Vue"],
    ]);
  });
});
