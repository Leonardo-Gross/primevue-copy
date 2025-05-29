<script setup lang="ts">
import { computed } from 'vue';

defineProps({
  label: String,
  icon: String,
  iconClass: {
    type: String,
    default: ''
  },
  iconPos: {
    type: String,
    default: 'left',
  },
  loading: Boolean,
  link: String,
  severety: {
    type: String,
    default: 'Primary',
  },
  disabled: Boolean,
  raised: Boolean,
  rounded: Boolean,
  text: Boolean,
  raisedText: Boolean,
  outlined: Boolean,
  iconOnly: Boolean,
  badge: [String, Number],
  size: String,
  template: String,
  buttonGroup: Boolean
})

</script>

<template>
  <button></button>
</template>

<style scoped>

</style>
