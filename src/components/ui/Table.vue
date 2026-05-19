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
            <span class="inline-flex items-center gap-1.5" :class="{ 'relative group': col.tooltip }">
              {{ col.label }}
              <span v-if="col.sortable" class="text-surface-400">
                <svg v-if="sortKey === col.key && sortOrder === 'asc'" class="w-3.5 h-3.5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7"/></svg>
                <svg v-else-if="sortKey === col.key && sortOrder === 'desc'" class="w-3.5 h-3.5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
                <svg v-else class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"/></svg>
              </span>
              <svg v-if="col.tooltip" class="w-3.5 h-3.5 text-surface-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span v-if="col.tooltip" class="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2.5 py-1.5 text-xs font-medium text-white bg-surface-900 rounded-lg z-[1] max-w-[220px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150 shadow-lg text-balance">
                {{ col.tooltip }}
                <span class="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-surface-900"></span>
              </span>
            </span>
          </th>
        </tr>
      </thead>
      <template v-for="(row, i) in displayRows" :key="i">
        <tr
          class="border-b border-surface-100 hover:bg-surface-50/50 transition-colors"
          :class="{ 'cursor-pointer': expandable || clickable }"
          @click="handleRowClick(row, i, $event)"
        >
          <td v-if="expandable" class="w-10 px-4 py-3">
            <svg
              class="w-4 h-4 text-surface-400 transition-transform duration-200"
              :class="{ 'rotate-90': expandedRows.has(rowId(row, i)) }"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
            ><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
          </td>
          <td v-for="col in columns" :key="col.key" class="px-4 py-3 text-surface-700">
            <slot :name="col.key" :row="row" :value="row[col.key]">
              {{ row[col.key] }}
            </slot>
          </td>
        </tr>
        <tr v-if="expandable && expandedRows.has(rowId(row, i))">
          <td :colspan="columns.length + 1" class="p-0">
            <Transition name="expand">
              <div v-if="expandedRows.has(rowId(row, i))" class="px-6 py-4 bg-surface-50/60 border-b border-surface-100">
                <slot name="expanded" :row="row" :index="i" />
              </div>
            </Transition>
          </td>
        </tr>
      </template>
      <tfoot v-if="$slots.footer || totalPages > 1">
        <tr class="bg-surface-50">
          <td v-if="expandable" class="px-4 py-3"></td>
          <td :colspan="columns.length" class="px-4 py-3">
            <slot :total-pages="totalPages" :current-page="currentPageLocal" :total-items="totalItems" name="footer">
              <div class="flex items-center justify-between">
                <span class="text-sm text-surface-500">
                  {{ rangeStart }}-{{ rangeEnd }} of {{ totalItems }}
                </span>
                <div class="flex items-center gap-1">
                  <button
                    class="inline-flex items-center justify-center w-8 h-8 rounded-lg text-sm transition-colors cursor-pointer"
                    :class="currentPageLocal === 1 ? 'text-surface-300 cursor-not-allowed' : 'text-surface-600 hover:bg-surface-100'"
                    :disabled="currentPageLocal === 1"
                    @click="goToPage(currentPageLocal - 1)"
                  >
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
                  </button>
                  <template v-for="page in visiblePages" :key="page">
                    <button
                      v-if="page === '...'"
                      class="inline-flex items-center justify-center w-8 h-8 text-sm text-surface-400"
                    >&hellip;</button>
                    <button
                      v-else
                      class="inline-flex items-center justify-center w-8 h-8 rounded-lg text-sm font-medium transition-colors cursor-pointer"
                      :class="page === currentPageLocal ? 'bg-primary-600 text-white' : 'text-surface-600 hover:bg-surface-100'"
                      @click="goToPage(page)"
                    >{{ page }}</button>
                  </template>
                  <button
                    class="inline-flex items-center justify-center w-8 h-8 rounded-lg text-sm transition-colors cursor-pointer"
                    :class="currentPageLocal === totalPages ? 'text-surface-300 cursor-not-allowed' : 'text-surface-600 hover:bg-surface-100'"
                    :disabled="currentPageLocal === totalPages"
                    @click="goToPage(currentPageLocal + 1)"
                  >
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
                  </button>
                </div>
              </div>
            </slot>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  columns: { type: Array, required: true },
  rows: { type: Array, default: () => [] },
  expandable: { type: Boolean, default: false },
  perPage: { type: Number, default: 10 },
  clickable: { type: Boolean, default: false },
  serverSide: { type: Boolean, default: false },
  total: { type: Number, default: 0 },
  currentPage: { type: Number, default: 1 },
  sortKey: { type: String, default: null },
  sortOrder: { type: String, default: 'asc' },
  pagination: { type: Object, default: null },
})

const emit = defineEmits(['row-click', 'page-change', 'sort-change'])

const expandedRows = ref(new Set())
const internalPage = ref(1)
const internalSortKey = ref(null)
const internalSortOrder = ref('asc')

const paginationMeta = computed(() => {
  if (props.pagination) {
    const p = props.pagination
    return {
      currentPage: p.current_page ?? p.currentPage ?? 1,
      total: p.total ?? 0,
      perPage: p.per_page ?? p.perPage ?? props.perPage,
      lastPage: p.last_page ?? p.lastPage ?? p.totalPages ?? 1,
      from: p.from ?? 0,
      to: p.to ?? 0,
    }
  }
  return null
})

const isServerSide = computed(() => props.serverSide || !!props.pagination)

const resolvedPerPage = computed(() => paginationMeta.value?.perPage ?? props.perPage)

const currentPageLocal = computed(() => {
  if (paginationMeta.value) return paginationMeta.value.currentPage
  return isServerSide.value ? props.currentPage : internalPage.value
})
const sortKey = computed(() => isServerSide.value ? props.sortKey : internalSortKey.value)
const sortOrder = computed(() => isServerSide.value ? props.sortOrder : internalSortOrder.value)

const totalItems = computed(() => paginationMeta.value?.total ?? (isServerSide.value ? props.total : sortedRows.value.length))

const sortedRows = computed(() => {
  if (isServerSide.value) return props.rows
  if (!internalSortKey.value) return props.rows
  return [...props.rows].sort((a, b) => {
    const aVal = a[internalSortKey.value]
    const bVal = b[internalSortKey.value]
    const result = aVal < bVal ? -1 : aVal > bVal ? 1 : 0
    return internalSortOrder.value === 'asc' ? result : -result
  })
})

const totalPages = computed(() => paginationMeta.value?.lastPage ?? Math.max(1, Math.ceil(totalItems.value / resolvedPerPage.value)))

const displayRows = computed(() => {
  if (isServerSide.value) return props.rows
  const start = (internalPage.value - 1) * resolvedPerPage.value
  return sortedRows.value.slice(start, start + resolvedPerPage.value)
})

const rangeStart = computed(() => {
  if (paginationMeta.value) return paginationMeta.value.from || 0
  return totalItems.value === 0 ? 0 : (currentPageLocal.value - 1) * resolvedPerPage.value + 1
})
const rangeEnd = computed(() => {
  if (paginationMeta.value) return paginationMeta.value.to || 0
  return Math.min(currentPageLocal.value * resolvedPerPage.value, totalItems.value)
})

const visiblePages = computed(() => {
  const total = totalPages.value
  const current = currentPageLocal.value
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)

  const pages = []
  pages.push(1)
  if (current > 3) pages.push('...')
  for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) {
    pages.push(i)
  }
  if (current < total - 2) pages.push('...')
  pages.push(total)
  return pages
})

function rowId(row, index) {
  return row.id ?? index + (currentPageLocal.value - 1) * resolvedPerPage.value
}

function toggleSort(key) {
  if (isServerSide.value) {
    let newOrder = 'asc'
    if (props.sortKey === key) {
      newOrder = props.sortOrder === 'asc' ? 'desc' : 'asc'
    }
    emit('sort-change', { key, order: newOrder })
  } else {
    if (internalSortKey.value === key) {
      internalSortOrder.value = internalSortOrder.value === 'asc' ? 'desc' : 'asc'
    } else {
      internalSortKey.value = key
      internalSortOrder.value = 'asc'
    }
  }
}

function goToPage(page) {
  if (page < 1 || page > totalPages.value) return
  if (isServerSide.value) {
    emit('page-change', page)
  } else {
    internalPage.value = page
  }
}

function handleRowClick(row, index, event) {
  if (props.expandable) toggleExpand(rowId(row, index))
  if (props.clickable) emit('row-click', row, index, event)
}

function toggleExpand(id) {
  const next = new Set(expandedRows.value)
  if (next.has(id)) {
    next.delete(id)
  } else {
    next.add(id)
  }
  expandedRows.value = next
}

watch(totalPages, (total) => {
  if (!isServerSide.value && internalPage.value > total) internalPage.value = total
})

watch(() => props.rows, () => {
  internalPage.value = 1
  expandedRows.value = new Set()
})
</script>

<style>
.expand-enter-active { transition: all 0.2s ease-out; }
.expand-leave-active { transition: all 0.15s ease-in; }
.expand-enter-from, .expand-leave-to { opacity: 0; max-height: 0; padding-top: 0; padding-bottom: 0; }
.expand-enter-to, .expand-leave-from { opacity: 1; max-height: 500px; }
</style>