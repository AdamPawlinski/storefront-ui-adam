import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  boolean,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import { SfDropdown, SfList, SfButton } from "@storefront-ui/vue";
storiesOf("Molecules|Dropdown", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfDropdown, SfList, SfButton },
    props: {
      title: {
        default: text("title", "Choose size", "Props"),
      },
      persistent: {
        default: boolean("persistent", false, "Props"),
      },
      isOpen: {
        default: boolean("isOpen", false, "Props"),
      },
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-dropdown--up": "sf-dropdown--up",
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
    },
    data() {
      return {
        actionList: [
          "Add to cart",
          "Add to compare",
          "Add to wishlist",
          "Share",
        ],
      };
    },
    template: 
        `<div style="position: relative;">
          <SfDropdown :class="customClass" :is-open="isOpen" :persistent="persistent" :title="title">
            <template #content>
              <SfList>
                <SfListItem v-for="(action, key) in actionList" :key="key">
                  <SfButton class="sf-button--full-width sf-button--underlined color-primary" @click="!isOpen">{{ action }}</SfButton>
                </SfListItem>
              </SfList>
            </template> 
          </SfDropdown>
        </div>`,
  }))
  .add("With up modifier", () => ({
    components: { SfDropdown, SfList, SfButton },
    props: {
      title: {
        default: text("title", "Choose size", "Props"),
      },
      persistent: {
        default: boolean("persistent", false, "Props"),
      },
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-dropdown--up": "sf-dropdown--up",
          },
          "sf-dropdown--up",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
    },
    data() {
      return {
        isOpen: false,
        actionList: [
          "Add to cart",
          "Add to compare",
          "Add to wishlist",
          "Share",
        ],
      };
    },
    template:
      `<div style="position: relative;">        
        <SfDropdown :class="customClass" :persistent="persistent" :title="title">
          <SfButton>Choose your action</SfButton>
          <SfList>
            <SfListItem v-for="(action, key) in actionList" :key="key">
              <SfButton class="sf-button--full-width sf-button--underlined color-primary" @click="toggle(false)">{{ action }}</SfButton>
            </SfListItem>
          </SfList>
        </SfDropdown>
      </div>`,
  }));
