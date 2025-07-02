<script setup lang="ts">
import { computed, useSlots } from 'vue';
import type { Align, Orientation, StyleType } from '@Types';
import { ALIGN, ORIENTATION, STYLETYPE } from '@Enums';

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
  if (props.type === STYLETYPE.DASHED) return `border-b border-dashed ${base}`;
  if (props.type === STYLETYPE.DOTTED) return `border-b border-dotted ${base}`;
  return `border-b ${base}`;
});


const verticalLineClass = computed(() => {
  const base = 'border-gray-300 bg-transparent';
  if (props.type === STYLETYPE.DASHED) return `border-l border-dashed ${base}`;
  if (props.type === STYLETYPE.DOTTED) return `border-l border-dotted ${base}`;
  return `border-l ${base}`;
});

// Tamanhos condicionais
const leftLineStyle = computed(() => {
  if (!hasSlot.value) return { flex: 1 };
  if (props.align === ALIGN.LEFT) return { width: '5%' };
  if (props.align === ALIGN.RIGHT) return { flex: 1 };
  return { flex: 1 };
});

const rightLineStyle = computed(() => {
  if (!hasSlot.value) return { flex: 1 };
  if (props.align === ALIGN.LEFT) return { flex: 1 };
  if (props.align === ALIGN.RIGHT) return { width: '5%' };
  return { flex: 1 };
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
    v-if="hasSlot"
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
    <div v-if="hasSlot" class="flex flex-col items-center justify-center mx-2 min-h-[15rem]">
      <div class="w-px grow" :class="verticalLineClass" />

      <div class="text-gray-700 text-sm font-semibold whitespace-nowrap my-2">
        <slot />
      </div>

      <div class="w-px grow" :class="verticalLineClass" />

    </div>
    <div v-else class="w-px self-stretch mx-2" :class="verticalLineClass" />
  </template>

</template>
