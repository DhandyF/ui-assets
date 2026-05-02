<template>
  <div class="relative inline-block" ref="dropdownRef">
    <div class="cursor-pointer" @click="toggle">
      <slot name="trigger">
        <button class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-white border border-surface-300 rounded-lg hover:bg-surface-50 transition-colors">
          {{ label }}
          <svg class="w-4 h-4 text-surface-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
        </button>
      </slot>
    </div>
    <Transition name="dropdown">
      <div
        v-if="isOpen"
        class="absolute z-50 mt-1 bg-white border border-surface-200 rounded-xl shadow-lg py-1 min-w-[180px]"
        :class="[placementClasses[placement], widthClass]"
      >
        <slot />
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, provide, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  label: { type: String, default: 'Options' },
  placement: {
    type: String,
    default: 'bottom-start',
    validator: (v) => ['bottom-start', 'bottom-end', 'top-start', 'top-end'].includes(v),
  },
  width: { type: String, default: 'auto' },
})

const isOpen = ref(false)
const dropdownRef = ref(null)

const placementClasses = {
  'bottom-start': 'left-0',
  'bottom-end': 'right-0',
  'top-start': 'left-0 bottom-full',
  'top-end': 'right-0 bottom-full',
}

const widthClass = props.width === 'full' ? 'w-full' : ''

function toggle() {
  isOpen.value = !isOpen.value
}

function close() {
  isOpen.value = false
}

provide('closeDropdown', close)

function handleClickOutside(e) {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target)) {
    close()
  }
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onUnmounted(() => document.removeEventListener('click', handleClickOutside))
</script>

<style>
.dropdown-enter-active { transition: all 0.15s ease-out; }
.dropdown-leave-active { transition: all 0.1s ease-in; }
.dropdown-enter-from, .dropdown-leave-to { opacity: 0; transform: translateY(-4px); }
</style>