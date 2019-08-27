import { shallowMount } from "@vue/test-utils";
import SfNotification from "@/components/molecules/SfNotification/SfNotification.vue";

describe("SfNotification.vue", () => {
  it("renders the notification", () => {
    const component = shallowMount(SfNotification);
    expect(component.contains(".sf-notification")).toBe(true);
  });
  it("renders the message when passed via props", () => {
    const message = 'Hello World';
    const component = shallowMount(SfNotification, {
      propsData: {
        message
      }
    });
    expect(component.find(".sf-notification__text").text()).toMatch(message);
  });
});