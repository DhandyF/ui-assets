<template>
  <div class="relative" ref="containerRef">
    <label v-if="label" class="block text-sm font-medium text-surface-700 mb-1">
      {{ label }}
      <span v-if="required" class="text-danger">*</span>
    </label>
    <button
      :class="triggerClasses"
      :disabled="disabled"
      @click="toggle"
    >
      <span class="flex-1 truncate text-left" :class="hasValue ? 'text-surface-800' : 'text-surface-400'">
        {{ hasValue ? selectedLabel : placeholder }}
      </span>
      <div class="flex items-center gap-1 shrink-0">
        <button
          v-if="clearable && hasValue"
          class="p-0.5 rounded cursor-pointer text-surface-400 hover:text-surface-600 hover:bg-surface-100 transition-colors"
          @click.stop="clear"
        >
          <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
        <svg class="w-4 h-4 text-surface-500 transition-transform duration-150" :class="{ 'rotate-180': isOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
      </div>
    </button>
    <Transition name="searchable-dropdown">
      <div
        v-if="isOpen"
        class="absolute z-50 mt-1 bg-white border border-surface-200 rounded-xl shadow-lg overflow-hidden w-full"
      >
        <div class="border-b border-surface-200 p-2">
          <div class="flex items-center gap-2 px-3 py-1.5 bg-surface-50 rounded-lg">
            <svg class="w-4 h-4 text-surface-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            <input
              ref="inputRef"
              v-model="search"
              class="w-full bg-transparent outline-none text-sm placeholder:text-surface-400"
              :placeholder="searchPlaceholder"
              @keydown="handleKeydown"
            />
          </div>
        </div>
        <div v-if="filteredOptions.length === 0" class="px-4 py-3 text-sm text-surface-400 text-center">
          {{ emptyText }}
        </div>
        <ul class="max-h-60 overflow-y-auto py-1" ref="listRef">
          <li
            v-for="(option, index) in filteredOptions"
            :key="optionValue(option)"
            :class="optionClasses(index)"
            @click="select(option)"
            @mouseenter="highlightedIndex = index"
          >
            <slot name="option" :option="option" :selected="isSelected(option)">
              <span class="flex-1 truncate">{{ optionLabel(option) }}</span>
              <svg
                v-if="isSelected(option)"
                class="w-4 h-4 text-primary-600 shrink-0"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
              ><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
            </slot>
          </li>
        </ul>
      </div>
    </Transition>
    <p v-if="error" class="text-sm text-danger mt-1">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue'

const props = defineProps({
  modelValue: { type: [String, Number, null], default: null },
  options: { type: Array, default: () => [] },
  labelKey: { type: String, default: 'label' },
  valueKey: { type: String, default: 'value' },
  placeholder: { type: String, default: 'Select an option' },
  searchPlaceholder: { type: String, default: 'Search...' },
  label: { type: String, default: '' },
  error: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  required: { type: Boolean, default: false },
  clearable: { type: Boolean, default: false },
  emptyText: { type: String, default: 'No results found' },
})

const emit = defineEmits(['update:modelValue', 'search'])

const isOpen = ref(false)
const search = ref('')
const highlightedIndex = ref(-1)
const inputRef = ref(null)
const containerRef = ref(null)
const listRef = ref(null)

const hasValue = computed(() => props.modelValue !== null && props.modelValue !== undefined && props.modelValue !== '')

const selectedLabel = computed(() => {
  if (!hasValue.value) return ''
  const match = props.options.find((o) => optionValue(o) === props.modelValue)
  return match ? optionLabel(match) : ''
})

const filteredOptions = computed(() => {
  if (!search.value) return props.options
  const q = search.value.toLowerCase()
  return props.options.filter((o) => optionLabel(o).toLowerCase().includes(q))
})

function optionLabel(option) {
  return typeof option === 'object' ? option[props.labelKey] : option
}

function optionValue(option) {
  return typeof option === 'object' ? option[props.valueKey] : option
}

function isSelected(option) {
  return optionValue(option) === props.modelValue
}

const triggerClasses = computed(() => [
  'inline-flex items-center gap-2 w-full px-4 py-2 text-sm font-medium bg-white border rounded-lg transition-colors',
  'hover:bg-surface-50',
  isOpen.value ? 'border-primary-500 ring-2 ring-primary-500/30' : 'border-surface-300',
  props.disabled ? 'bg-surface-50 cursor-not-allowed opacity-50' : 'cursor-pointer',
  props.error ? 'border-danger' : '',
])

function optionClasses(index) {
  return [
    'flex items-center gap-2 px-3 py-2 text-sm cursor-pointer transition-colors',
    index === highlightedIndex.value ? 'bg-primary-50 text-primary-700' : 'text-surface-700 hover:bg-surface-50',
    'font-medium',
  ]
}

function toggle() {
  if (props.disabled) return
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    nextTick(() => inputRef.value?.focus())
  }
}

function select(option) {
  emit('update:modelValue', optionValue(option))
  isOpen.value = false
  search.value = ''
  highlightedIndex.value = -1
}

function clear() {
  emit('update:modelValue', null)
}

function handleKeydown(e) {
  if (!isOpen.value) return

  switch (e.key) {
    case 'ArrowDown':
      e.preventDefault()
      highlightedIndex.value = Math.min(highlightedIndex.value + 1, filteredOptions.value.length - 1)
      scrollToHighlighted()
      break
    case 'ArrowUp':
      e.preventDefault()
      highlightedIndex.value = Math.max(highlightedIndex.value - 1, 0)
      scrollToHighlighted()
      break
    case 'Enter':
      e.preventDefault()
      if (highlightedIndex.value >= 0 && highlightedIndex.value < filteredOptions.value.length) {
        select(filteredOptions.value[highlightedIndex.value])
      }
      break
    case 'Escape':
      isOpen.value = false
      search.value = ''
      highlightedIndex.value = -1
      break
  }
}

function scrollToHighlighted() {
  nextTick(() => {
    const items = listRef.value?.children
    if (items && items[highlightedIndex.value]) {
      items[highlightedIndex.value].scrollIntoView({ block: 'nearest' })
    }
  })
}

watch(isOpen, (open) => {
  if (!open) {
    search.value = ''
    highlightedIndex.value = -1
  }
})

watch(search, (q) => {
  emit('search', q)
  highlightedIndex.value = -1
})

function handleClickOutside(e) {
  if (containerRef.value && !containerRef.value.contains(e.target)) {
    isOpen.value = false
  }
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onUnmounted(() => document.removeEventListener('click', handleClickOutside))
</script>

<style>
.searchable-dropdown-enter-active { transition: all 0.15s ease-out; }
.searchable-dropdown-leave-active { transition: all 0.1s ease-in; }
.searchable-dropdown-enter-from, .searchable-dropdown-leave-to { opacity: 0; transform: translateY(-4px); }
</style>