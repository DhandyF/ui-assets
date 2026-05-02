<template>
  <Teleport to="body">
    <TransitionGroup
      tag="div"
      name="toast"
      class="fixed top-4 right-4 z-[9999] flex flex-col gap-3 pointer-events-none"
    >
      <div
        v-for="toast in toasts"
        :key="toast.id"
        :class="toastClasses(toast.type)"
        class="pointer-events-auto min-w-[320px] max-w-md rounded-xl shadow-lg border backdrop-blur-sm p-4 flex items-start gap-3"
      >
        <span class="mt-0.5 shrink-0">{{ iconMap[toast.type] }}</span>
        <div class="flex-1 min-w-0">
          <p v-if="toast.title" class="font-semibold text-sm">{{ toast.title }}</p>
          <p class="text-sm opacity-80">{{ toast.message }}</p>
        </div>
        <button
          class="shrink-0 cursor-pointer text-current opacity-50 hover:opacity-100 transition-opacity"
          @click="remove(toast.id)"
        >
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
    </TransitionGroup>
  </Teleport>
</template>

<script setup>
import { toasts, remove } from './useToast'

const iconMap = {
  success: '✓',
  error: '✕',
  warning: '⚠',
  info: 'ℹ',
}

function toastClasses(type) {
  const map = {
    success: 'bg-green-50 border-green-200 text-green-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    warning: 'bg-amber-50 border-amber-200 text-amber-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800',
  }
  return map[type] || map.info
}
</script>

<style>
.toast-enter-active { transition: all 0.3s ease-out; }
.toast-leave-active { transition: all 0.2s ease-in; }
.toast-enter-from { opacity: 0; transform: translateX(100%); }
.toast-leave-to { opacity: 0; transform: translateX(100%); }
.toast-move { transition: transform 0.3s ease; }
</style>