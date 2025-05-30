<script setup lang="ts">
import { computed, h } from 'vue'

type Severity = 'primary' | 'secondary' | 'success' | 'info' | 'warn' | 'help' | 'danger' | 'contrast'

const props = defineProps({
  label: String,
  icon: String,
  iconClass: {
    type: String,
    default: ''
  },
  iconPos: {
    type: String,
    default: 'left',
  },
  loading: Boolean,
  link: String,
  severity: {
    type: String,
    default: 'primary',
  },
  disabled: Boolean,
  raised: Boolean,
  rounded: Boolean,
  text: Boolean,
  outlined: Boolean,
  iconOnly: Boolean,
  badge: [String, Number],
  size: String,
  template: String,
  buttonGroup: Boolean
})

const severityStyles: Record<Severity, string> = {
  primary: 'bg-gray-950 hover:bg-gray-800 text-white',
  secondary: 'bg-gray-300 hover:bg-gray-400 text-gray-600',
  success: 'bg-green-500 hover:bg-green-600 text-white',
  info: 'bg-blue-400 hover:bg-blue-500 text-white',
  warn: 'bg-orange-400 hover:bg-orange-500 text-white',
  help: 'bg-purple-600 hover:bg-purple-700 text-white',
  danger: 'bg-red-500 hover:bg-red-600 text-white',
  contrast: 'bg-gray-950 hover:bg-gray-800 text-white'
}

const buttonClasses = computed(() => {
  const severityKey = (props.severity?.toLowerCase() ?? 'primary') as Severity
  const severityClass = severityStyles[severityKey]

  return {
    // Base
    'inline-flex items-center justify-center transition-colors duration-200 cursor-pointer rounded': true,

    // Severity
    [severityClass]: true,

    // State
    'opacity-50 cursor-not-allowed': props.disabled,
    'shadow-md': props.raised,
    'rounded-full': props.rounded,
    'bg-transparent text-gray-700 hover:bg-gray-100': props.text,
    'border border-gray-400 bg-transparent text-gray-700': props.outlined,
    'p-2': props.iconOnly && !props.label,
    'p-1 px-3': !(props.iconOnly && !props.label),

    // Size
    'text-sm px-2 py-1': props.size === 'small',
    'text-lg px-4 py-2': props.size === 'large',
  }
})

const iconVNode = computed(() => {
  if (!props.icon) return null
  const spacing = props.iconPos === 'left' ? 'mr-2' : 'ml-2'
  return h('i', {
    class: `${props.icon} ${props.iconClass} ${props.label ? spacing : ''}`
  })
})

const labelVNode = computed(() => {
  return props.label ? h('span', {}, props.label) : null
})
</script>

<template>
  <button :class="buttonClasses" :disabled="props.disabled">
    <component :is="iconVNode" v-if="props.icon && props.iconPos === 'left'" />
    <component :is="labelVNode" v-if="labelVNode" />
    <component :is="iconVNode" v-if="props.icon && props.iconPos === 'right'" />
  </button>
</template>
