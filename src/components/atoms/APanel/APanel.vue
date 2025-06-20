<script setup lang="ts">
const { header } = defineProps<{ header?: string; open: boolean }>();
</script>

<template>
  <div class="rounded-lg border border-gray-200 bg-gray-50 p-4">
    <div
      v-if="$slots.header || header"
      class="mb-2 flex items-center justify-between font-bold"
    >
      <span>{{ header }}</span>

      <slot name="header" />

      <slot name="icons" />
    </div>

    <Transition
      enter-active-class="transition-all duration-300 ease-in-out"
      enter-from-class="opacity-0 max-h-0"
      enter-to-class="opacity-100 max-h-[1000px]"
      leave-active-class="transition-all duration-300 ease-in-out"
      leave-from-class="opacity-100 max-h-[1000px]"
      leave-to-class="opacity-0 max-h-0 overflow-hidden"
    >
      <div
        v-show="open"
        class="overflow-hidden"
      >
        <slot />

        <slot name="footer" />
      </div>
    </Transition>
  </div>
</template>
