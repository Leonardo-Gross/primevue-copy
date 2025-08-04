<script setup lang="ts">
import { computed, onMounted } from 'vue';
import type { Size } from '@Types';
import { INPUT_MASK_PATTERN, SIZE } from '@Enums';

const props = withDefaults(
  defineProps<{
    autoClear?: boolean
    disabled?: boolean
    filled?: boolean
    invalid?: boolean
    mask: INPUT_MASK_PATTERN
    modelValue?: string
    name?: string
    placeholder?: string
    size?: Size
  }>(),
  {
    autoClear: true,
    disabled: false,
    filled: false,
    invalid: false,
    modelValue: '',
    placeholder: undefined,
    size: SIZE.NORMAL
  },
);

const emit = defineEmits<{
  (e: 'register', name: string): void
}>()

const model = defineModel<string>()

onMounted(() => {
  if (props.name) emit('register', props.name)
})

function onInput(event: Event) {
  const input = event.target as HTMLInputElement;
  const raw = input.value.replace(/\D/g, '');
  const masked = applyMask(raw, props.mask);

  model.value = masked;
}


function maxDigitsByMask(mask: INPUT_MASK_PATTERN) {
  return mask === INPUT_MASK_PATTERN.CELLPHONE ? 11
    : mask === INPUT_MASK_PATTERN.CPF ? 11
    : mask === INPUT_MASK_PATTERN.DATE ? 8
    : mask === INPUT_MASK_PATTERN.PHONE ? 10
    : 100;
}

function maxLengthByMask(mask: INPUT_MASK_PATTERN) {
  return mask === INPUT_MASK_PATTERN.CELLPHONE ? 15
    : mask === INPUT_MASK_PATTERN.CPF ? 14
    : mask === INPUT_MASK_PATTERN.DATE ? 10
    : mask === INPUT_MASK_PATTERN.PHONE ? 14
    : 100;
}

function applyMask(value: string, pattern: INPUT_MASK_PATTERN): string {
  const digits = value.replace(/\D/g, '').slice(0, maxDigitsByMask(pattern));

  return pattern === INPUT_MASK_PATTERN.CELLPHONE
    ? digits.replace(/^(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .slice(0, maxLengthByMask(pattern))
    : pattern === INPUT_MASK_PATTERN.CPF
    ? digits.replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1-$2')
            .slice(0, maxLengthByMask(pattern))
    : pattern === INPUT_MASK_PATTERN.DATE
    ? digits.replace(/(\d{2})(\d)/, '$1/$2')
            .replace(/(\d{2})(\d)/, '$1/$2')
            .slice(0, maxLengthByMask(pattern))
    : pattern === INPUT_MASK_PATTERN.PHONE
    ? digits.replace(/^(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .slice(0, maxLengthByMask(pattern))
    : value;
}

function onKeyDown(event: KeyboardEvent) {
  const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete', 'Tab', 'Home', 'End'];

  if (
    allowedKeys.includes(event.key) ||
    (event.ctrlKey && ['a', 'c', 'v', 'x'].includes(event.key.toLowerCase()))
  ) return;

  if (!/^\d$/.test(event.key)) {
    event.preventDefault();
    return;
  }

  const input = event.target as HTMLInputElement;
  if (input.value.length >= maxLengthByMask(props.mask)) {
    event.preventDefault();
  }
}

const filledClass = computed(() => [props.filled && 'bg-gray-100']);
const isInvalid = computed(() => !!props.invalid);
const invalidClass = computed(() =>
  isInvalid.value
    ? ['border-red-600', 'text-red-600', 'hover:border-black']
    : ['border-gray-300', 'text-gray-900']
);

const sizeClass = computed(() =>
  props.size === 'small'
    ? 'h-7 w-55 px-3 text-sm'
    : props.size === 'large'
    ? 'h-11 w-75 px-5 text-lg'
    : 'min-h-9 min-w-65 px-4 text-base'
);

const inputClasses = computed(() => {
  const base = ['border', 'p-1', 'rounded-md', 'outline-none', 'transition-colors'];
  const state = props.disabled
    ? ['bg-gray-200', 'cursor-not-allowed']
    : ['focus:ring-2', 'focus:ring-blue-500'];
  return [...base, ...state, sizeClass.value, ...filledClass.value, ...invalidClass.value]
    .flat()
    .join(' ');
});
</script>

<template>
  <input
    :name="props.name"
    v-model="model"
    :placeholder="placeholder ?? props.mask"
    :disabled="disabled"
    :class="inputClasses"
    inputmode="numeric"
    pattern="[0-9]*"
    @keydown="onKeyDown"
    @input="onInput"
  />
</template>
