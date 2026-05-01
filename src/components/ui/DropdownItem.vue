<template>
  <button
    v-if="as === 'button'"
    :class="itemClasses"
    :disabled="disabled"
    @click="$emit('click', close)"
  >
    <slot />
  </button>
  <a v-else :class="itemClasses" :href="href">
    <slot />
  </a>
</template>

<script setup>
import { computed, inject } from 'vue'

const props = defineProps({
  disabled: { type: Boolean, default: false },
  href: { type: String, default: '' },
  as: { type: String, default: 'button' },
})

defineEmits(['click'])

const close = inject('closeDropdown', () => {})

const itemClasses = computed(() => [
  'flex w-full items-center gap-2 px-3 py-2 text-sm text-surface-700 transition-colors',
  'hover:bg-surface-100 hover:text-surface-900',
  props.disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer',
])
</script>