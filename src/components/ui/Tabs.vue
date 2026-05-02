<template>
  <div>
    <div class="flex border-b border-surface-200" role="tablist">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        :class="tabClasses(tab.key)"
        role="tab"
        :aria-selected="modelValue === tab.key"
        @click="$emit('update:modelValue', tab.key)"
      >
        <span v-if="tab.icon" class="mr-1.5">{{ tab.icon }}</span>
        {{ tab.label }}
      </button>
    </div>
    <div class="mt-4">
      <slot :activeTab="modelValue" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  tabs: { type: Array, required: true },
  modelValue: { type: String, required: true },
})

defineEmits(['update:modelValue'])

function tabClasses(key) {
  const isActive = props.modelValue === key
  return [
    'px-4 py-2.5 text-sm font-medium border-b-2 transition-colors whitespace-nowrap cursor-pointer',
    isActive
      ? 'border-primary-600 text-primary-700'
      : 'border-transparent text-surface-500 hover:text-surface-700 hover:border-surface-300',
  ]
}
</script>