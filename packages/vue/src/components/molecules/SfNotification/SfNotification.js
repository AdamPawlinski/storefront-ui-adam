export default {
  name: "SfNotification",
  components: {
    SfIcon
  },
  props: {
    message: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: "added_to_cart"
    }
  }
};
