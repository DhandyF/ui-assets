<template>
  <div class="space-y-1">
    <label v-if="label" :for="id" class="block text-sm font-medium text-surface-700">
      {{ label }}
      <span v-if="required" class="text-danger">*</span>
    </label>
    <div class="relative">
      <textarea
        v-if="type === 'textarea'"
        :id="id"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :rows="rows"
        :class="inputClasses"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <input
        v-else
        :id="id"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :class="inputClasses"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <span v-if="$slots.icon" class="absolute left-3 top-1/2 -translate-y-1/2 text-surface-400">
        <slot name="icon" />
      </span>
    </div>
    <p v-if="error" class="text-sm text-danger">{{ error }}</p>
    <p v-else-if="hint" class="text-xs text-surface-500">{{ hint }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: { type: [String, Number], default: '' },
  label: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  type: { type: String, default: 'text' },
  error: { type: String, default: '' },
  hint: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  required: { type: Boolean, default: false },
  rows: { type: Number, default: 3 },
  id: { type: String, default: () => `input-${Math.random().toString(36).slice(2, 9)}` },
})

defineEmits(['update:modelValue'])

const inputClasses = computed(() => [
  'w-full rounded-lg border bg-white px-3 py-2 text-sm transition-all duration-150',
  'placeholder:text-surface-400',
  'focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500',
  'disabled:bg-surface-50 disabled:text-surface-400 disabled:cursor-not-allowed',
  props.error
    ? 'border-danger text-danger focus:ring-danger/30 focus:border-danger'
    : 'border-surface-300 text-surface-800',
  props.$slots?.icon ? 'pl-10' : '',
])
</script>