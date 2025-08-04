<script setup lang="ts">
import { computed, onMounted } from 'vue'
import type { InputType, Size } from '@Types'
import { INPUT_TYPE, SIZE } from '@Enums'

const props = withDefaults(
  defineProps<{
    disabled?: boolean
    filled?: boolean
    help?: string
    invalid?: boolean
    modelValue?: string
    size?: Size
    type?: InputType
    name?: string
  }>(),
  {
    disabled: false,
    filled: false,
    invalid: false,
    size: SIZE.NORMAL,
    type: INPUT_TYPE.TEXT,
  }
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'register', name: string): void
}>()

onMounted(() => {
  if (props.name) emit('register', props.name)
})

function onInput(event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}

const disabledClass = computed(() =>
  props.disabled ? ['bg-gray-200'] : ''
)

const filledClass = computed(() => [props.filled && 'bg-gray-100'])

const sizeClass = computed(() =>
  props.size === 'small'
    ? 'h-7 w-55 px-3 text-sm'
    : props.size === 'large'
    ? 'h-11 w-75 px-5 text-lg'
    : 'min-h-9 min-w-65 px-4 text-base'
)

// **Só considera a prop invalid explicitamente**
const isInvalid = computed(() => !!props.invalid)

const invalidClass = computed(() =>
  isInvalid.value
    ? ['border-red-600', 'text-red-600', 'hover:border-black']
    : ['border-gray-300', 'text-gray-900']
)

const inputClass = computed(() => [
  disabledClass.value,
  ...filledClass.value,
  sizeClass.value,
  ...invalidClass.value,
].filter(Boolean))
</script>

<template >
  <input v-if="!props.disabled"
    :type="type"
    :name="name"
    :value="modelValue"
    @input="onInput"
    class="border p-1 rounded-md focus:outline-1 focus:border-none"
    :class="inputClass"
  />

  <template v-else>
    <input
      :type="type"
      :name="name"
      :value="modelValue"
      class="bg-gray-100 border p-1 rounded-md focus:outline-1 focus:border-none"
      disabled
    />
  </template>
</template>


