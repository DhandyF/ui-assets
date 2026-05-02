<template>
  <button
    :class="buttonClasses"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <span v-if="loading" class="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'secondary', 'danger', 'outline', 'ghost'].includes(v),
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(v),
  },
  disabled: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  block: { type: Boolean, default: false },
})

defineEmits(['click'])

const sizeClasses = {
  xs: 'px-2.5 py-1 text-xs',
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-5 py-2.5 text-base',
  xl: 'px-6 py-3 text-base',
}

const variantClasses = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 shadow-sm',
  secondary: 'bg-surface-100 text-surface-800 hover:bg-surface-200 active:bg-surface-300 shadow-sm',
  danger: 'bg-danger text-white hover:bg-red-700 active:bg-red-800 shadow-sm',
  outline: 'border border-surface-300 text-surface-700 hover:bg-surface-50 active:bg-surface-100',
  ghost: 'text-surface-700 hover:bg-surface-100 active:bg-surface-200',
}

const buttonClasses = computed(() => [
  'inline-flex items-center justify-center font-medium transition-all duration-150 rounded-lg cursor-pointer',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500',
  'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
  sizeClasses[props.size],
  variantClasses[props.variant],
  props.block ? 'w-full' : '',
])
</script>