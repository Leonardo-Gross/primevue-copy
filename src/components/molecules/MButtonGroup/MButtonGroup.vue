<script setup lang="ts">
import { provide } from 'vue';

provide('inButtonGroup', true);
</script>
<template>
  <div class="inline-flex overflow-hidden rounded-lg !border-0 shadow-sm">
    <slot />
  </div>
</template>
