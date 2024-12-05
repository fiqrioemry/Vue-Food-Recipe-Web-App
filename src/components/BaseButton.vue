<script>
import { Button } from "@/components/ui/button";
export default {
  components: {
    Button,
  },
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

<template>
  <Button
    :variant="desctructive"
    :size="md"
    :disabled="isLoading"
    @click="handleClick"
  >
    <span v-if="isLoading">Loading...</span>
    <span v-else>{{ text }}</span>
  </Button>
</template>
