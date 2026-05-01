import { ref } from 'vue'

const toasts = ref([])
let nextId = 0

function add({ message, title, type = 'info', duration = 4000 }) {
  const id = nextId++
  toasts.value.push({ id, message, title, type })
  if (duration > 0) {
    setTimeout(() => remove(id), duration)
  }
  return id
}

function remove(id) {
  const index = toasts.value.findIndex((t) => t.id === id)
  if (index !== -1) toasts.value.splice(index, 1)
}

function clear() {
  toasts.value = []
}

export function useToast() {
  return {
    toasts,
    success: (message, options = {}) => add({ type: 'success', message, ...options }),
    error: (message, options = {}) => add({ type: 'error', message, ...options }),
    warning: (message, options = {}) => add({ type: 'warning', message, ...options }),
    info: (message, options = {}) => add({ type: 'info', message, ...options }),
    remove,
    clear,
  }
}

export { toasts, remove }