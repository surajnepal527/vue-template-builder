<template>
  <button :style="{ backgroundColor: backgroundColor, color: textColor }">
    {{ buttonText }}
  </button>
</template>

<script>
/* eslint-disable-line vue/no-unused-components */
export default {
  props: {
    buttonText: {
      type: String,
      required: false,
      default: "Button Text",
    },
    backgroundColor: {
      type: String,
      default: "blue",
    },
    textColor: {
      type: String,
      default: "white",
    },
  },
};
</script>
