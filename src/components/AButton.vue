<script setup lang="ts">
import { ref, computed, type PropType, inject, useSlots } from 'vue';

// --- Props ---
const props = defineProps({
  label: String,
  icon: String,
  iconClass: { type: String, default: '' },
  iconPos: { type: String, default: 'left' },
  link: { type: Boolean, default: false },
  href: String,
  target: String,
  disabled: Boolean,
  raised: Boolean,
  rounded: Boolean,
  variant: {
    type: String as PropType<'text' | 'outlined' | 'contained'>,
    default: 'contained',
  },
  iconOnly: Boolean,
  badge: String,
  buttonSize: {
    type: String as PropType<'small' | 'normal' | 'large'>,
    default: 'normal',
  },
  size: {
    type: String as PropType<'small' | 'normal' | 'large'>,
    default: 'normal',
  },
  severity: {
    type: String,
    default: 'primary',
  },
  autoLoading: {
    type: Boolean,
    default: false,
  },
});

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
type Severity =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warn'
  | 'help'
  | 'danger'
  | 'contrast';

const severityKey = (props.severity?.toLowerCase() ?? 'primary') as Severity;

const severityVariants = computed(() => {
  if (props.variant === 'text') {
    return {
      primary: 'text-gray-950 hover:bg-gray-100',
      secondary: 'text-gray-600 hover:bg-gray-100',
      success: 'text-green-500 hover:bg-green-50',
      info: 'text-blue-500 hover:bg-blue-50',
      warn: 'text-orange-500 hover:bg-orange-50',
      help: 'text-purple-600 hover:bg-purple-50',
      danger: 'text-red-500 hover:bg-red-50',
      contrast: 'text-gray-950 hover:bg-gray-100',
    }[severityKey];
  }

  if (props.variant === 'outlined') {
    return {
      primary: 'border border-gray-200 text-gray-950 hover:bg-gray-100',
      secondary: 'border border-gray-300 text-gray-600 hover:bg-gray-100',
      success: 'border border-green-500 text-green-600 hover:bg-green-50',
      info: 'border border-blue-400 text-blue-600 hover:bg-blue-50',
      warn: 'border border-orange-400 text-orange-600 hover:bg-orange-50',
      help: 'border border-purple-600 text-purple-700 hover:bg-purple-50',
      danger: 'border border-red-500 text-red-600 hover:bg-red-50',
      contrast: 'border border-gray-950 text-gray-950 hover:bg-gray-100',
    }[severityKey];
  }

  return {
    primary: 'bg-gray-950 hover:bg-gray-800 text-white',
    secondary: 'bg-gray-300 hover:bg-gray-400 text-gray-600',
    success: 'bg-green-500 hover:bg-green-600 text-white',
    info: 'bg-blue-400 hover:bg-blue-500 text-white',
    warn: 'bg-orange-400 hover:bg-orange-500 text-white',
    help: 'bg-purple-600 hover:bg-purple-700 text-white',
    danger: 'bg-red-500 hover:bg-red-600 text-white',
    contrast: 'bg-gray-950 hover:bg-gray-800 text-white',
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
