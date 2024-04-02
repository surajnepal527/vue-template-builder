<template>
  <div>
    <Sidebar
      :templates="templates"
      @select-template="handleSelectTemplate"
    ></Sidebar>
    <MainEditor
      :editedTemplates="editedTemplates"
      @drop-template="handleDropTemplate"
    ></MainEditor>
    <MainContent :selectedTemplate="selectedTemplate"></MainContent>
  </div>
  <text-template />
  <button-template />
  <modal-template />
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import MainEditor from "./components/MainEditor.vue";
import MainContent from "./components/MainContent.vue";
import ButtonTemplate from "./components/ButtonTemplate.vue";
import ModalTemplate from "./components/ModalTemplate.vue";
import TextTemplate from "./components/TextTemplate.vue";

export default {
  components: {
    Sidebar,
    MainEditor,
    MainContent,
    ButtonTemplate,
    ModalTemplate,
    TextTemplate,
  },
  data() {
    return {
      templates: [
        {
          id: 1,
          type: "Button",
          component: "ButtonTemplate",
          props: {
            buttonText: "Click me",
            backgroundColor: "blue",
            textColor: "white",
          },
        },
        {
          id: 2,
          type: "Modal",
          component: "ModalTemplate",
          props: {
            modalTitle: "Example Modal",
            modalContent: "This is an example modal.",
            closeButtonLabel: "Close",
          },
        },
        {
          id: 3,
          type: "Text",
          component: "TextTemplate",
          props: {
            textContent: "Example Text",
          },
        },
      ],
      selectedTemplate: null,
      editedTemplates: [],
    };
  },
  methods: {
    handleSelectTemplate(template) {
      console.log("Selected Template:", template);
      this.selectedTemplate = template;
      this.editedTemplates.push({ ...this.selectedTemplate });
      console.log("edited Template:", this.editedTemplates);
    },
    handleDropTemplate(templateId) {
      const selectedTemplate = this.templates.find(
        (template) => template.id === parseInt(templateId)
      );
      if (selectedTemplate) {
        // Clone the selected template and add it to the edited templates array
        this.editedTemplates.push({ ...selectedTemplate });
        console.log("Editted Templates");
        console.log(this.editedTemplates);
      }
    },
  },
};
</script>

<style>
/* Add your styles here */
</style>
