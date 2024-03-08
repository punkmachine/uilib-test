<template>
  <button
    :class="{
      'button--primary': type === 'primary',
      'button--secondary': type === 'secondary',
    }"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

interface IProps {
  type: "primary" | "secondary",
}

defineProps<IProps>();
</script>

<style scoped>
.button--primary {
  background-color: black;
}

.button--secondary {
  background-color: gray;
}
</style>