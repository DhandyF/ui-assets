<template>
  <div :class="alertClasses" role="alert">
    <span class="mt-0.5 shrink-0">{{ iconMap[variant] }}</span>
    <div class="flex-1 min-w-0">
      <p v-if="title" class="font-semibold text-sm">{{ title }}</p>
      <p class="text-sm opacity-90"><slot /></p>
    </div>
    <button
      v-if="closable"
      class="shrink-0 p-1 rounded-md opacity-60 hover:opacity-100 transition-opacity"
      @click="$emit('close')"
    >
      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'info',
    validator: (v) => ['info', 'success', 'warning', 'danger'].includes(v),
  },
  title: { type: String, default: '' },
  closable: { type: Boolean, default: false },
})

defineEmits(['close'])

const iconMap = {
  info: 'ℹ',
  success: '✓',
  warning: '⚠',
  danger: '✕',
}

const variantClasses = {
  info: 'bg-blue-50 border-blue-200 text-blue-800',
  success: 'bg-green-50 border-green-200 text-green-800',
  warning: 'bg-amber-50 border-amber-200 text-amber-800',
  danger: 'bg-red-50 border-red-200 text-red-800',
}

const alertClasses = computed(() => [
  'flex items-start gap-3 p-4 rounded-xl border',
  variantClasses[props.variant],
])
</script>