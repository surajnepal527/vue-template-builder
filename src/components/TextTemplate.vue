<template>
  <div>{{ textContent }}</div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
export default {
  props: {
    textContent: {
      type: String,
      required: false,
      default: "text content ...",
    },
  },
};
</script>
