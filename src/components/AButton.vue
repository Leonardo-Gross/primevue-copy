<script setup lang="ts">
import { ref, computed, h, type PropType } from 'vue'

const props = defineProps({
  label: String,
  icon: String,
  iconClass: {
    type: String,
    default: ''
  },
  iconPos: {
    type: String,
    default: 'left'
  },
  link: {
    type: Boolean,
    default: false
  },
  href: String,
  target: String,
  disabled: Boolean,
  raised: Boolean,
  rounded: Boolean,
  variant: {
    type: String as PropType<'text' | 'outlined' | 'contained'>,
    default: 'contained'
  },
  iconOnly: Boolean,
  badge: [String, Number],
  size: String,
  severity: {
    type: String,
    default: 'primary'
  },
  autoLoading: {
    type: Boolean,
    default: false
  }
})

const modelLoading = defineModel<boolean>('loading')
const emit = defineEmits(['click'])

const isLoadingInternally = ref(false)

const isLoading = computed(() => {
  return props.autoLoading
    ? isLoadingInternally.value
    : modelLoading?.value ?? false
})

const handleClick = async (e: Event) => {
  if (props.disabled || isLoading.value) return

  emit('click', e)

  if (props.autoLoading && modelLoading) {
    modelLoading.value = true
    await new Promise(resolve => setTimeout(resolve, 2000))
    modelLoading.value = false
  }
}

type Severity =
  | 'primary' | 'secondary' | 'success' | 'info'
  | 'warn' | 'help' | 'danger' | 'contrast'

const severityKey = (props.severity?.toLowerCase() ?? 'primary') as Severity

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
      contrast: 'text-gray-950 hover:bg-gray-100'
    }[severityKey]
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
      contrast: 'border border-gray-950 text-gray-950 hover:bg-gray-100'
    }[severityKey]
  }

  // contained (default)
  return {
    primary: 'bg-gray-950 hover:bg-gray-800 text-white',
    secondary: 'bg-gray-300 hover:bg-gray-400 text-gray-600',
    success: 'bg-green-500 hover:bg-green-600 text-white',
    info: 'bg-blue-400 hover:bg-blue-500 text-white',
    warn: 'bg-orange-400 hover:bg-orange-500 text-white',
    help: 'bg-purple-600 hover:bg-purple-700 text-white',
    danger: 'bg-red-500 hover:bg-red-600 text-white',
    contrast: 'bg-gray-950 hover:bg-gray-800 text-white'
  }[severityKey]
})

const layoutClass = computed(() => {
  return ['top', 'bottom'].includes(props.iconPos) ? 'flex-col gap-1' : 'flex-row gap-2'
})

const buttonClasses = computed(() => {
  return {
    'inline-flex items-center justify-center transition-colors duration-200 cursor-pointer rounded': true,
    [layoutClass.value]: true,
    [severityVariants.value]: !props.link,
    'opacity-50 !cursor-not-allowed': props.disabled || isLoading.value,
    '!shadow-md/30': props.raised,
    'rounded-full': props.rounded,
    'w-10 h-10': props.iconOnly && !props.label,
    'p-1 px-3': !(props.iconOnly && !props.label),
    'text-sm px-2 py-1': props.size === 'small',
    'text-lg px-4 py-2': props.size === 'large',
    'bg-transparent text-black font-medium hover:underline hover:bg-white': props.link
  }
})

const iconVNode = computed(() => {
  if (isLoading.value) {
    return h('span', {
      class: 'pi pi-spinner animate-spin text-base'
    })
  }

  if (!props.icon) return null

  return h('i', {
    class: `${props.icon} ${props.iconClass}`
  })
})

const labelVNode = computed(() => {
  return props.label ? h('span', {}, props.label) : null
})

const iconFirst = computed(() => {
  return props.iconPos === 'left' || props.iconPos === 'top'
})
</script>

<template>
  <component
    :class="buttonClasses"
    :is="props.href ? 'a' : 'button'"
    :href="props.href"
    :target="props.target"
    :disabled="props.disabled || isLoading"
    @click="handleClick"
  >
    <component :is="iconVNode" v-if="(props.icon || isLoading) && iconFirst" />
    <component :is="labelVNode" v-if="labelVNode" />
    <component :is="iconVNode" v-if="(props.icon || isLoading) && !iconFirst" />
  </component>
</template>
