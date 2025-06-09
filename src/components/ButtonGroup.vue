 <script setup lang="ts">
import { provide } from 'vue';

provide('inButtonGroup', true)
</script>
<template>
  <div class="inline-flex rounded-lg overflow-hidden shadow-sm !border-0">
    <slot/>
  </div>
</template>
