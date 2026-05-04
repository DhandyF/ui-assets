<template>
  <Teleport to="body">
    <Transition name="modal-overlay">
      <div
        v-if="modelValue"
        class="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
        :class="overlayClass"
        @click.self="closeIfAllowed"
      >
        <Transition name="modal-content">
          <div
            v-if="modelValue"
            :class="[sizeClasses[size], contentClass]"
            class="bg-white rounded-2xl shadow-2xl w-full flex flex-col overflow-hidden animate-in"
          >
            <div v-if="$slots.header || title" class="flex items-center justify-between px-6 py-4 border-b border-surface-200" :class="headerClass">
              <slot name="header">
                <h2 class="text-lg font-semibold text-surface-900">{{ title }}</h2>
              </slot>
              <button
                v-if="closable"
                class="p-1.5 rounded-lg cursor-pointer text-surface-400 hover:text-surface-600 hover:bg-surface-100 transition-colors"
                @click="close"
              >
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>
            <div class="px-6 py-4 overflow-y-auto flex-1" :class="bodyClass">
              <slot />
            </div>
            <div v-if="$slots.footer" class="px-6 py-4 border-t border-surface-200 bg-surface-50" :class="footerClass">
              <slot name="footer" />
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  title: { type: String, default: '' },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg', 'full'].includes(v),
  },
  closable: { type: Boolean, default: true },
  closeOnOverlay: { type: Boolean, default: true },
  contentClass: { type: String, default: '' },
  overlayClass: { type: String, default: '' },
  headerClass: { type: String, default: '' },
  bodyClass: { type: String, default: '' },
  footerClass: { type: String, default: '' },
})

const emit = defineEmits(['update:modelValue', 'close'])

const sizeClasses = {
  sm: 'max-w-sm',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  full: 'max-w-[90vw]',
}

function close() {
  emit('update:modelValue', false)
  emit('close')
}

function closeIfAllowed() {
  if (props.closeOnOverlay) close()
}

function handleEscape(e) {
  if (e.key === 'Escape' && props.modelValue && props.closable) close()
}

onMounted(() => document.addEventListener('keydown', handleEscape))
onUnmounted(() => document.removeEventListener('keydown', handleEscape))
</script>

<style>
.modal-overlay-enter-active { transition: opacity 0.2s ease; }
.modal-overlay-leave-active { transition: opacity 0.15s ease; }
.modal-overlay-enter-from, .modal-overlay-leave-to { opacity: 0; }
.modal-content-enter-active { transition: all 0.25s ease-out; }
.modal-content-leave-active { transition: all 0.15s ease-in; }
.modal-content-enter-from { opacity: 0; transform: scale(0.95) translateY(10px); }
.modal-content-leave-to { opacity: 0; transform: scale(0.95) translateY(10px); }
</style>