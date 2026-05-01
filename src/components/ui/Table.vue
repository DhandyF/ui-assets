<template>
  <div class="overflow-x-auto">
    <table class="w-full text-left text-sm">
      <thead>
        <tr class="border-b border-surface-200 bg-surface-50">
          <th v-if="expandable" class="w-10 px-4 py-3"></th>
          <th
            v-for="col in columns"
            :key="col.key"
            class="px-4 py-3 font-semibold text-surface-600 whitespace-nowrap"
            :class="{ 'cursor-pointer select-none hover:text-surface-900': col.sortable }"
            @click="col.sortable && toggleSort(col.key)"
          >
            <span class="inline-flex items-center gap-1.5">
              {{ col.label }}
              <span v-if="col.sortable" class="text-surface-400">
                <svg v-if="sortKey === col.key && sortOrder === 'asc'" class="w-3.5 h-3.5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7"/></svg>
                <svg v-else-if="sortKey === col.key && sortOrder === 'desc'" class="w-3.5 h-3.5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
                <svg v-else class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"/></svg>
              </span>
            </span>
          </th>
        </tr>
      </thead>
      <template v-for="(row, i) in sortedRows" :key="i">
        <tr
          class="border-b border-surface-100 hover:bg-surface-50/50 transition-colors"
          :class="{ 'cursor-pointer': expandable }"
          @click="expandable && toggleExpand(i)"
        >
          <td v-if="expandable" class="w-10 px-4 py-3">
            <svg
              class="w-4 h-4 text-surface-400 transition-transform duration-200"
              :class="{ 'rotate-90': expandedRows.has(i) }"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
            ><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
          </td>
          <td v-for="col in columns" :key="col.key" class="px-4 py-3 text-surface-700">
            <slot :name="col.key" :row="row" :value="row[col.key]">
              {{ row[col.key] }}
            </slot>
          </td>
        </tr>
        <tr v-if="expandable && expandedRows.has(i)">
          <td :colspan="columns.length + 1" class="p-0">
            <Transition name="expand">
              <div v-if="expandedRows.has(i)" class="px-6 py-4 bg-surface-50/60 border-b border-surface-100">
                <slot name="expanded" :row="row" :index="i" />
              </div>
            </Transition>
          </td>
        </tr>
      </template>
      <tfoot v-if="$slots.footer">
        <tr class="bg-surface-50">
          <td v-if="expandable" class="px-4 py-3"></td>
          <td :colspan="columns.length" class="px-4 py-3">
            <slot name="footer" />
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  columns: { type: Array, required: true },
  rows: { type: Array, default: () => [] },
  expandable: { type: Boolean, default: false },
})

const sortKey = ref(null)
const sortOrder = ref('asc')
const expandedRows = ref(new Set())

function toggleSort(key) {
  if (sortKey.value === key) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortKey.value = key
    sortOrder.value = 'asc'
  }
}

function toggleExpand(index) {
  const next = new Set(expandedRows.value)
  if (next.has(index)) {
    next.delete(index)
  } else {
    next.add(index)
  }
  expandedRows.value = next
}

const sortedRows = computed(() => {
  if (!sortKey.value) return props.rows
  return [...props.rows].sort((a, b) => {
    const aVal = a[sortKey.value]
    const bVal = b[sortKey.value]
    const result = aVal < bVal ? -1 : aVal > bVal ? 1 : 0
    return sortOrder.value === 'asc' ? result : -result
  })
})
</script>

<style>
.expand-enter-active { transition: all 0.2s ease-out; }
.expand-leave-active { transition: all 0.15s ease-in; }
.expand-enter-from, .expand-leave-to { opacity: 0; max-height: 0; padding-top: 0; padding-bottom: 0; }
.expand-enter-to, .expand-leave-from { opacity: 1; max-height: 500px; }
</style>