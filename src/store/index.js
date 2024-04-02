// store/index.js

import { createStore } from "vuex";

const store = createStore({
  state: {
    templates: [
      // Define your initial set of templates here
      {
        id: 1,
        type: "button",
        buttonText: "Click me",
        backgroundColor: "blue",
        textColor: "white",
      },
      {
        id: 2,
        type: "modal",
        modalTitle: "Example Modal",
        modalContent: "This is an example modal.",
        closeButtonLabel: "Close",
      },
      {
        id: 3,
        type: "text",
        textContent: "Example Text",
      },
    ],
    selectedTemplate: null, // The currently selected template for editing
    editedTemplate: null, // The template currently being edited
  },
  mutations: {
    // Mutation to set the currently selected template
    setSelectedTemplate(state, template) {
      state.selectedTemplate = template;
    },
    // Mutation to set the template currently being edited
    setEditedTemplate(state, template) {
      state.editedTemplate = template;
    },
    // Mutation to update a template
    updateTemplate(state, { id, newData }) {
      const index = state.templates.findIndex((template) => template.id === id);
      if (index !== -1) {
        state.templates[index] = { ...state.templates[index], ...newData };
      }
    },
    // Mutation to add a new template
    addTemplate(state, template) {
      state.templates.push(template);
    },
    // Mutation to remove a template
    removeTemplate(state, id) {
      state.templates = state.templates.filter(
        (template) => template.id !== id
      );
    },
  },
  actions: {
    // Action to update a template
    updateTemplate({ commit }, { id, newData }) {
      commit("updateTemplate", { id, newData });
    },
    // Action to add a new template
    addTemplate({ commit }, template) {
      commit("addTemplate", template);
    },
    // Action to remove a template
    removeTemplate({ commit }, id) {
      commit("removeTemplate", id);
    },
  },
  getters: {
    // Getter to retrieve a template by ID
    getTemplateById: (state) => (id) => {
      return state.templates.find((template) => template.id === id);
    },
  },
});

export default store;
