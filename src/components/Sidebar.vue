<template>
  <div class="sidebar">
    <h2>Templates</h2>
    <ul>
      <li
        v-for="template in templates"
        :key="template.id"
        @click="selectTemplate(template)"
      >
        {{ template.type }}
      </li>
    </ul>

    <br />
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    templates: {
      type: Array,
      required: true,
    },
  },
  methods: {
    selectTemplate(template) {
      this.$emit("select-template", template);
    },
  },
};
</script>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  cursor: pointer;
  padding: 10px 0;
}

li:hover {
  background-color: #ccc;
}
</style>
