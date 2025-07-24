<script setup lang="ts">
import { computed, ref, watch, onMounted } from 'vue';
import type { Size } from '@Types';
import { SIZE } from '@Enums';

const props = withDefaults(defineProps<{
  autoResize?: boolean;
  cols?: number;
  disabled?: boolean;
  filled?: boolean;
  invalid?: boolean;
  modelValue?: string;
  placeholder?: string;
  readonly?: boolean;
  rows?: number;
  size?: Size;
}>(), {
  autoResize: false,
  cols: 30,
  disabled: false,
  filled: false,
  invalid: false,
  modelValue: '',
  placeholder: '',
  readonly: false,
  rows: 3,
  size: SIZE.NORMAL
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();


const resizeTextarea = () => {
  const el = textareaRef.value;
  if (!el) return;
  el.style.height = 'auto';
  el.style.height = `${el.scrollHeight}px`;
};

const textareaRef = ref<HTMLTextAreaElement | null>(null);

const sizeClass = computed(() =>
  props.size === SIZE.SMALL
    ? 'h-15 w-60 px-2 text-sm'
    : props.size === SIZE.LARGE
    ? 'h-25 w-70 px-6 text-lg'
    : 'h-20 w-65 px-4 text-base'
);

const disabledClass = computed(() =>
  props.disabled ? ['bg-gray-200'] : ''
)

const isInvalid = computed(() => !!props.invalid);
const invalidClass = computed(() =>
  isInvalid.value
    ? ['border-red-600', 'text-red-600', 'hover:border-black']
    : ['border-gray-300', 'text-gray-900']
);

const textareaClass = computed(() => [
  'border rounded-md p-2',
  props.autoResize ? 'resize-none overflow-y-hidden' : 'resize-none',
  'focus:outline-none focus:border-black',
  !props.cols ? 'w-full' : '',
  props.filled && 'bg-gray-100',
  ...invalidClass.value,
  sizeClass.value,
  disabledClass.value
]);

onMounted(() => {
  if (props.autoResize) resizeTextarea();
});

watch(
  () => props.modelValue,
  () => {
    if (props.autoResize) resizeTextarea();
  }
);

function onInput(e: Event) {
  const target = e.target as HTMLTextAreaElement | null;
  if (!target) return;
  emit('update:modelValue', target.value);
  if (props.autoResize) resizeTextarea();
}
</script>

<template>
  <textarea
    ref="textareaRef"
    :value="modelValue"
    :placeholder="placeholder"
    :rows="rows"
    :cols="cols"
    :readonly="readonly"
    :disabled="disabled"
    :class="textareaClass"
    @input="onInput"
  />
</template>
