<script setup lang="ts">
import { computed, useSlots } from 'vue';

const slots = useSlots();

const showDefaultSlot = computed(
  () =>
    slots?.default &&
    !slots?.header &&
    !slots?.title &&
    !slots?.subtitle &&
    !slots?.content &&
    !slots?.footer
);

const showContentWrapper = computed(
  () => slots?.title || slots?.subtitle || slots?.content || slots?.footer
);
</script>

<template>
  <div class="w-full flex-wrap justify-start rounded-lg border border-solid border-gray-200 bg-gray-50 p-0 text-slate-800">
    <!-- Caso apenas o slot default seja usado -->
    <slot v-if="showDefaultSlot" />

    <!-- Slot Header -->
    <div v-if="$slots?.header" class="w-full text-gray-700">
      <slot name="header" />
    </div>

    <!-- Conteúdo estruturado -->
    <div v-if="showContentWrapper" class="p-5">
      <div v-if="$slots?.title" class="mt-4 flex text-lg font-medium">
        <slot name="title" />
      </div>

      <div v-if="$slots?.subtitle" class="text-md mt-4 flex font-normal text-gray-400">
        <slot name="subtitle" />
      </div>

      <div v-if="$slots?.content" class="mt-1 text-gray-700">
        <slot name="content" />
      </div>

      <div v-if="$slots?.footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>
