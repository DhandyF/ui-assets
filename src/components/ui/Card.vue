<template>
  <div :class="cardClasses">
    <div v-if="$slots.header" class="border-b border-surface-200 px-6 py-4">
      <slot name="header" />
    </div>
    <div class="px-6 py-4">
      <slot />
    </div>
    <div v-if="$slots.footer" class="border-t border-surface-200 px-6 py-4">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (v) => ['default', 'bordered', 'elevated', 'interactive'].includes(v),
  },
})

const variantClasses = {
  default: 'bg-white',
  bordered: 'bg-white border border-surface-200',
  elevated: 'bg-white shadow-md',
  interactive: 'bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-surface-200',
}

const cardClasses = computed(() => [
  'rounded-xl overflow-hidden',
  variantClasses[props.variant],
])
</script>