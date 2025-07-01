<script setup lang="ts">
import { computed, inject, ref, useSlots } from 'vue';
import type { Position, Severity, Size, Variant } from '@Types';
import { POSITION, SEVERITY, SIZE, VARIANT } from '@Enums';

const props = withDefaults(
  defineProps<{
    autoLoading?: boolean;
    badge?: string;
    buttonSize?: Size;
    disabled?: boolean;
    href?: string;
    icon?: string;
    iconClass?: string;
    iconOnly?: boolean;
    iconPos?: Position;
    label?: string;
    link?: boolean;
    raised?: boolean;
    rounded?: boolean;
    severity?: Severity;
    size?: Size;
    target?: string;
    variant?: Variant;
  }>(),
  {
    buttonSize: SIZE.NORMAL,
    iconClass: '',
    iconPos: POSITION.LEFT,
    severity: SEVERITY.PRIMARY,
    size: SIZE.NORMAL,
    variant: VARIANT.CONTAINED,
  }
);

// --- Injeções & Slots ---
const slots = useSlots();
const inGroup = inject('inButtonGroup', false);

// --- Model & Emits ---
const modelLoading = defineModel<boolean>('loading');
const emit = defineEmits(['click']);

// --- Refs & Computeds ---
const isLoadingInternally = ref(false);

const isLoading = computed(() => {
  return props.autoLoading ? isLoadingInternally.value : (modelLoading?.value ?? false);
});

const isVertical = computed(() => ['top', 'bottom'].includes(props.iconPos));
const iconFirst = computed(() => props.iconPos === 'left' || props.iconPos === 'top');

const isIconOnly = computed(() => {
  return !!props.icon && !props.label && !slots.default;
});

const hasDefaultSlot = computed(() => !!slots.default);

// --- Severidade / Variant ---

const severityKey = (props.severity?.toLowerCase() ?? 'primary') as Severity;

const severityVariants = computed(() => {
  if (props.variant === VARIANT.TEXT) {
    return {
      contrast: 'text-gray-950 hover:bg-gray-100',
      danger: 'text-red-500 hover:bg-red-50',
      help: 'text-purple-600 hover:bg-purple-50',
      info: 'text-blue-500 hover:bg-blue-50',
      primary: 'text-gray-950 hover:bg-gray-100',
      secondary: 'text-gray-600 hover:bg-gray-100',
      success: 'text-green-500 hover:bg-green-50',
      warn: 'text-orange-500 hover:bg-orange-50',
    }[severityKey];
  }

  if (props.variant === 'outlined') {
    return {
      contrast: 'border border-gray-950 text-gray-950 hover:bg-gray-100',
      danger: 'border border-red-500 text-red-600 hover:bg-red-50',
      help: 'border border-purple-600 text-purple-700 hover:bg-purple-50',
      info: 'border border-blue-400 text-blue-600 hover:bg-blue-50',
      primary: 'border border-gray-200 text-gray-950 hover:bg-gray-100',
      secondary: 'border border-gray-300 text-gray-600 hover:bg-gray-100',
      success: 'border border-green-500 text-green-600 hover:bg-green-50',
      warn: 'border border-orange-400 text-orange-600 hover:bg-orange-50',
    }[severityKey];
  }

  return {
    contrast: 'bg-gray-950 hover:bg-gray-800 text-white',
    danger: 'bg-red-500 hover:bg-red-600 text-white',
    help: 'bg-purple-600 hover:bg-purple-700 text-white',
    info: 'bg-blue-400 hover:bg-blue-500 text-white',
    primary: 'bg-gray-950 hover:bg-gray-800 text-white',
    secondary: 'bg-gray-300 hover:bg-gray-400 text-gray-600',
    success: 'bg-green-500 hover:bg-green-600 text-white',
    warn: 'bg-orange-400 hover:bg-orange-500 text-white',
  }[severityKey];
});

// --- Classes ---
const sizeClass = computed(() => {
  switch (props.buttonSize) {
    case 'small':
      return 'h-8 px-3 text-sm';
    case 'large':
      return 'h-11 px-5 text-lg';
    default:
      return 'min-h-10 px-4 text-base';
  }
});

const iconSizeClass = computed(() => {
  const base =
    {
      small: 'text-xs',
      large: 'text-xl',
      normal: 'text-base',
    }[props.buttonSize] || 'text-base';

  return `${base}`;
});

const iconOnlySizeClass = computed(() => {
  if (!isIconOnly.value) return '';
  switch (props.buttonSize) {
    case 'small':
      return 'w-8 h-8';
    case 'large':
      return 'w-12 h-12';
    default:
      return 'w-10 h-10';
  }
});

const layoutClass = computed(() => {
  return isVertical.value ? 'flex-col' : 'flex-row';
});

const buttonClasses = computed(() => ({
  'inline-flex items-center justify-center transition-colors duration-200 cursor-pointer': true,
  [severityVariants.value]: !props.link,
  [sizeClass.value]: true,
  [iconOnlySizeClass.value]: true,
  'opacity-50 !cursor-not-allowed': props.disabled || isLoading.value,
  '!shadow-md/30': props.raised,
  'rounded-full': props.rounded,
  'bg-transparent text-black font-medium hover:underline hover:bg-white': props.link,
  rounded: !props.rounded && !inGroup,
  'border border-l-0 first:border-l': inGroup && props.variant !== 'text',
  'first:rounded-l last:rounded-r rounded-none': inGroup,
  '-ml-px first:ml-0': inGroup,
}));

// --- Handlers ---
const handleClick = async (e: Event) => {
  if (props.disabled || isLoading.value) return;

  emit('click', e);

  if (props.autoLoading && modelLoading) {
    modelLoading.value = true;
    await new Promise((resolve) => setTimeout(resolve, 2000));
    modelLoading.value = false;
  }
};
</script>

<template>
  <component
    :is="props.href ? 'a' : 'button'"
    :href="props.href"
    :target="props.target"
    :disabled="props.disabled || isLoading"
    :class="buttonClasses"
    @click="handleClick"
  >
    <!-- 1. Ícone isolado -->
    <template v-if="isIconOnly">
      <span class="flex h-full w-full items-center justify-center">
        <i
          :class="[
            props.iconClass,
            iconSizeClass,
            isLoading ? 'pi pi-spinner animate-spin' : props.icon,
          ]"
        />
      </span>
    </template>

    <!-- 2. Slot externo com conteúdo customizado -->
    <template v-else-if="hasDefaultSlot">
      <slot />
    </template>

    <!-- 3. Layout padrão: ícone + label -->
    <template v-else>
      <div
        :class="['flex items-center justify-center', layoutClass, isVertical ? 'gap-1' : 'gap-2']"
      >
        <span v-if="(props.icon || isLoading) && iconFirst">
          <i
            :class="[
              props.iconClass,
              iconSizeClass,
              isLoading ? 'pi pi-spinner animate-spin' : props.icon,
            ]"
          />
        </span>

        <span v-if="props.label">{{ props.label }}</span>

        <span v-if="(props.icon || isLoading) && !iconFirst">
          <i
            :class="[
              props.iconClass,
              iconSizeClass,
              isLoading ? 'pi pi-spinner animate-spin' : props.icon,
            ]"
          />
        </span>

        <span
          v-if="props.badge"
          class="ml-2 rounded-full bg-white px-2 py-0.5 text-sm leading-none text-black"
        >
          {{ props.badge }}
        </span>
      </div>
    </template>
  </component>
</template>
