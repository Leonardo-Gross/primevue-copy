<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  type?: 'solid' | 'dotted' | 'dashed',
  vertical?: boolean,
  align?: 'left' | 'right' | 'center',
}>()

const lineClasses = computed(() => {
  return props.vertical
  ? 'w-px h-full border-border-gray-300'
  : 'w-px w-full border-border-gray-300'
} )
</script>

<template>
  abuble
</template>
