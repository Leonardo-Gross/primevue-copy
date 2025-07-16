<script setup lang="ts">
import { computed, useSlots } from 'vue';
import type { Align, Orientation, StyleType } from '@Types';
import { ALIGN, STYLETYPE } from '@Enums';
import { ORIENTATION } from './enums';
const props = withDefaults(
  defineProps<{
    orientation?: Orientation;
    type?: StyleType;
    align?: Align;
  }>(),
  {
    orientation: ORIENTATION.HORIZONTAL,
    type: STYLETYPE.SOLID,
    align: ALIGN.CENTER,
  }
);

const slots = useSlots();
const isVertical = computed(() => props.orientation === ORIENTATION.VERTICAL);
const hasSlot = computed(() => !!slots.default);


// Estilo das linhas
const lineStyleClass = computed(() => {
  const base = 'border-gray-300 bg-transparent';
  return (props.type === STYLETYPE.DASHED) ?`border-b border-dashed ${base}`
  : (props.type === STYLETYPE.DOTTED)?`border-b border-dotted ${base}`
  : `border-b ${base}`;
});


const verticalLineClass = computed(() => {
  const base = 'border-gray-300 bg-transparent';
  return (props.type === STYLETYPE.DASHED) ? `border-l border-dashed ${base}`
  : (props.type === STYLETYPE.DOTTED) ? `border-l border-dotted ${base}`
  : `border-l ${base}`;
});

// Tamanhos condicionais
const leftLineStyle = computed(() => {
  return (!hasSlot.value) ? { flex: 1 }
  : (props.align === ALIGN.LEFT) ? { width: '5%' }
  : (props.align === ALIGN.RIGHT) ? { flex: 1 }
  : { flex: 1 }
});

const rightLineStyle = computed(() => {
  return (!hasSlot.value) ? { flex: 1 }
  : (props.align === ALIGN.LEFT) ? { flex: 1 }
  : (props.align === ALIGN.RIGHT) ? { width: '5%' }
  : { flex: 1 };
});



</script>

<template>
  <!-- Horizontal -->
 <div v-if="!isVertical" class="flex items-center my-4 w-full">
  <!-- Linha esquerda -->
  <div
    :class="[lineStyleClass, 'h-px']"
    :style="leftLineStyle"
  ></div>

  <!-- Conteúdo central (ex: OR) -->
  <div
    v-if="$slots.default"
    class="mx-2 text-gray-700 text-sm font-semibold whitespace-nowrap"
  >
    <slot />
  </div>

  <!-- Linha direita -->
  <div
    :class="[lineStyleClass, 'h-px']"
    :style="rightLineStyle"
  ></div>
</div>

  <template v-else>
    <div v-if="$slots.default" class="flex flex-col items-center justify-center mx-2 min-h-[15rem]">
      <div class="w-px grow" :class="verticalLineClass" />

      <div class="text-gray-700 text-sm font-semibold whitespace-nowrap my-2">
        <slot />
      </div>

      <div class="w-px grow" :class="verticalLineClass" />

    </div>
    <div v-else class="w-px self-stretch mx-2" :class="verticalLineClass" />
  </template>

</template>
