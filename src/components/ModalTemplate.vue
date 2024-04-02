<template>
  <div class="modal">
    <div class="modal-header">
      <h2>{{ modalTitle }}</h2>
    </div>
    <div class="modal-body">
      <p>{{ modalContent }}</p>
    </div>
    <div class="modal-footer">
      <button>{{ closeButtonLabel }}</button>
    </div>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
export default {
  props: {
    modalTitle: {
      type: String,
      required: false,
      default: "Modal Title",
    },
    modalContent: {
      type: String,
      required: false,
      default: "Modal Content ...",
    },
    closeButtonLabel: {
      type: String,
      default: "Close",
    },
  },
};
</script>

<style scoped>
.modal {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  background-color: #fff;
}

.modal-header {
  text-align: center;
}

.modal-footer {
  text-align: right;
}
</style>
