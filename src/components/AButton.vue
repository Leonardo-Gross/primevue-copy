<script setup lang="ts">
import { computed } from 'vue';


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
  severety: {
    type: String,
    default: 'Primary',
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

const buttonClasses = computed(() => {
  const base = 'inline-flex items-center justify-center color-red-500 font-medium transition-colors duration-200 focus:outline-none'

  //severety
  let style = ''

  switch (props.severety?.toLowerCase()) {
    case 'primary':
      style = 'bg-blue-500 hover:bg-blue-600 text-white'
      break
    case 'secondary':
      style = 'bg-gray-500 hover:bg-gray-600 text-white'
      break
    case 'success':
      style = 'bg-green-500 hover:bg-green-600 text-white'
      break
    case 'danger':
      style = 'bg-red-500 hover:bg-red-600 text-white'
      break
    case 'warning':
      style = 'bg-yellow-500 hover:bg-yellow-600 text-white'
      break
    default:
      style = 'bg-blue-500 hover:bg-blue-600 text-white'
  }

  return `${base} ${style}`
})

console.log('Severety: ', props.severety)
</script>

<template>
  <button :class="buttonClasses">
    {{  label }}
  </button>
</template>

<style scoped>

</style>
