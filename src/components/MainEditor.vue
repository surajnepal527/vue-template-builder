<template>
  <div class="main-editor" @drop="handleDrop" @dragover.prevent>
    <h2>Main Editor</h2>
    <div class="template-container">
      <div
        v-for="template in editedTemplates"
        :key="template.id"
        class="template-item"
        @click="selectTemplate(template)"
        :style="{
          borderColor: selectedTemplate === template ? 'blue' : 'transparent',
        }"
      >
        <component :is="template.component" v-bind="template.props"></component>
      </div>

      <!-- <component
        :is="
          selectedTemplate && selectedTemplate.type === 'modal'
            ? ModalTemplate
            : 'div'
        "
        v-if="selectedTemplate && selectedTemplate.type === 'modal'"
        :data="selectedTemplate.props"
      >
      </component> -->
    </div>
  </div>
</template>

<script>
import ButtonTemplate from "./ButtonTemplate.vue";
import ModalTemplate from "./ModalTemplate.vue";
import TextTemplate from "./TextTemplate.vue";

export default {
  name: "MainEditor",
  components: {
    ModalTemplate,
    ButtonTemplate,
    TextTemplate,
  },
  props: {
    editedTemplates: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectedTemplate: null,
    };
  },
  methods: {
    handleDrop(event) {
      const templateId = event.dataTransfer.getData("templateId");
      this.$emit("drop-template", templateId);
    },
    selectTemplate(template) {
      this.selectedTemplate = template;
    },
  },
};
</script>

<style scoped>
.main-editor {
  border: 1px solid #ccc;
  padding: 20px;
  background-color: #f9f9f9;
}

.template-container {
  min-height: 300px;
}

.template-item {
  border: 2px solid transparent;
  cursor: pointer;
  padding: 10px;
  margin-bottom: 10px;
}

.template-item:hover {
  border-color: lightgray;
}
</style>
