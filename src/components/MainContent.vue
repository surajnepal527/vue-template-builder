<template>
  <div>
    <h2>Main Content</h2>
    <component
      v-if="selectedTemplate"
      :is="selectedTemplate.component"
      v-bind="selectedTemplate.props"
    ></component>
  </div>
</template>

<script>
import ButtonTemplate from "./ButtonTemplate.vue";
import ModalTemplate from "./ModalTemplate.vue";
import TextTemplate from "./TextTemplate.vue";
export default {
  name: "MainContent",
  props: {
    selectedTemplate: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style>
/* Add your styles here */
</style>
