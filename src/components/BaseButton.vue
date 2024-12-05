<template>
  <button
    :class="[
      'py-2 px-4 rounded-md w-full',
      isLoading ? 'bg-gray-400 cursor-not-allowed opacity-50' : 'bg-gray-500',
    ]"
    :disabled="isLoading"
    @click="handleClick"
  >
    <span v-if="isLoading">Loading...</span>
    <span v-else>{{ text }}</span>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    onClick: {
      type: Function,
      required: true,
    },
  },
  methods: {
    handleClick() {
      if (!this.isLoading) {
        this.onClick();
      }
    },
  },
};
</script>
