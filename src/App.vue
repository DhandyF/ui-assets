<script setup>
import { ref } from 'vue'
import {
  Button, Card, Table, Toast, Badge, Input, Modal,
  Alert, Dropdown, DropdownItem, Tabs, SearchableDropdown, useToast,
} from './components/ui'

const toast = useToast()

const showModal = ref(false)
const activeTab = ref('overview')

const tableColumns = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'role', label: 'Role', sortable: true },
  { key: 'status', label: 'Status', sortable: true },
  { key: 'email', label: 'Email' },
]

const tableRows = [
  { name: 'Alice Johnson', role: 'Engineer', status: 'Active', email: 'alice@example.com', department: 'Engineering', joined: 'Jan 2023' },
  { name: 'Bob Smith', role: 'Designer', status: 'On Leave', email: 'bob@example.com', department: 'Design', joined: 'Mar 2022' },
  { name: 'Carol Williams', role: 'Manager', status: 'Active', email: 'carol@example.com', department: 'Product', joined: 'Aug 2021' },
  { name: 'David Brown', role: 'Engineer', status: 'Inactive', email: 'david@example.com', department: 'Engineering', joined: 'Nov 2023' },
]

const formName = ref('')
const formEmail = ref('')
const selectedCountry = ref(null)
const selectedRole = ref(null)

const countries = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'jp', label: 'Japan' },
  { value: 'au', label: 'Australia' },
  { value: 'in', label: 'India' },
  { value: 'br', label: 'Brazil' },
  { value: 'mx', label: 'Mexico' },
]

const roles = ['Engineer', 'Designer', 'Product Manager', 'Data Analyst', 'DevOps', 'QA Engineer']
</script>

<template>
  <div class="min-h-screen bg-surface-50 p-6 md:p-10 space-y-10 max-w-5xl mx-auto">
    <header>
      <h1 class="text-3xl font-bold text-surface-900">UI Assets</h1>
      <p class="mt-1 text-surface-500">Vue 3 + Tailwind CSS component library</p>
    </header>

    <section class="space-y-3">
      <h2 class="text-xl font-semibold text-surface-800">Button</h2>
      <Card variant="bordered">
        <div class="space-y-4">
          <div class="flex flex-wrap gap-3 items-center">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
          <div class="flex flex-wrap gap-3 items-center">
            <Button size="xs">Extra Small</Button>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
          </div>
          <div class="flex flex-wrap gap-3 items-center">
            <Button :loading="true" variant="primary">Loading</Button>
            <Button :disabled="true" variant="primary">Disabled</Button>
            <Button variant="primary" block>Block Button</Button>
          </div>
        </div>
      </Card>
    </section>

    <section class="space-y-3">
      <h2 class="text-xl font-semibold text-surface-800">Card</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card variant="bordered">
          <template #header><span class="font-semibold">Default Card</span></template>
          A simple bordered card with header and content.
          <template #footer><span class="text-sm text-surface-500">Footer info</span></template>
        </Card>
        <Card variant="elevated">
          <template #header><span class="font-semibold">Elevated Card</span></template>
          A card with shadow elevation for emphasis.
          <template #footer><span class="text-sm text-surface-500">Footer info</span></template>
        </Card>
        <Card variant="interactive">
          <template #header><span class="font-semibold">Interactive Card</span></template>
          Hover me! I have a shadow transition effect.
          <template #footer><span class="text-sm text-surface-500">Footer info</span></template>
        </Card>
      </div>
    </section>

    <section class="space-y-3">
      <h2 class="text-xl font-semibold text-surface-800">Badge</h2>
      <Card variant="bordered">
        <div class="space-y-3">
          <div class="flex flex-wrap gap-2 items-center">
            <Badge variant="default">Default</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="danger">Danger</Badge>
            <Badge variant="info">Info</Badge>
          </div>
          <div class="flex flex-wrap gap-2 items-center">
            <Badge variant="success" pill>Pill Badge</Badge>
            <Badge variant="danger" dot>Dot Badge</Badge>
            <Badge variant="primary" size="sm">Small</Badge>
            <Badge variant="info" size="lg">Large</Badge>
          </div>
        </div>
      </Card>
    </section>

    <section class="space-y-3">
      <h2 class="text-xl font-semibold text-surface-800">Input</h2>
      <Card variant="bordered">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input v-model="formName" label="Full Name" placeholder="Enter your name" required />
          <Input v-model="formEmail" label="Email" type="email" placeholder="you@example.com" hint="We'll never share your email." />
          <Input label="With Error" placeholder="Invalid input" error="This field is required" />
          <Input label="Disabled" placeholder="Cannot edit" :disabled="true" />
          <Input type="textarea" label="Bio" placeholder="Tell us about yourself..." :rows="3" />
        </div>
      </Card>
    </section>

    <section class="space-y-3">
      <h2 class="text-xl font-semibold text-surface-800">Alert</h2>
      <div class="space-y-3">
        <Alert variant="info" title="Information" closable>This is an informational alert message.</Alert>
        <Alert variant="success" title="Success" closable>Operation completed successfully!</Alert>
        <Alert variant="warning" title="Warning">Please review the settings before continuing.</Alert>
        <Alert variant="danger" title="Error">Something went wrong. Please try again.</Alert>
      </div>
    </section>

    <section class="space-y-3">
      <h2 class="text-xl font-semibold text-surface-800">Table</h2>
      <Card variant="bordered" class="p-0">
        <template #header><span class="font-semibold">Team Members</span></template>
        <Table :columns="tableColumns" :rows="tableRows" expandable>
          <template #status="{ value }">
            <Badge :variant="value === 'Active' ? 'success' : value === 'On Leave' ? 'warning' : 'default'" size="sm">
              {{ value }}
            </Badge>
          </template>
          <template #expanded="{ row }">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p class="text-surface-500">Email</p>
                <p class="font-medium text-surface-800">{{ row.email }}</p>
              </div>
              <div>
                <p class="text-surface-500">Department</p>
                <p class="font-medium text-surface-800">{{ row.department }}</p>
              </div>
              <div>
                <p class="text-surface-500">Joined</p>
                <p class="font-medium text-surface-800">{{ row.joined }}</p>
              </div>
            </div>
          </template>
          <template #footer>
            <div class="flex items-center justify-between text-sm text-surface-500">
              <span>Showing 4 of 24 members</span>
              <div class="flex gap-1">
                <Button size="xs" variant="outline">Previous</Button>
                <Button size="xs" variant="primary">Next</Button>
              </div>
            </div>
          </template>
        </Table>
      </Card>
    </section>

    <section class="space-y-3">
      <h2 class="text-xl font-semibold text-surface-800">Dropdown</h2>
      <div class="flex flex-wrap gap-4">
        <Dropdown label="Actions">
          <DropdownItem>Edit</DropdownItem>
          <DropdownItem>Duplicate</DropdownItem>
          <DropdownItem as="a" href="#">Export as PDF</DropdownItem>
          <DropdownItem :disabled="true">Delete</DropdownItem>
        </Dropdown>
        <Dropdown label="More Options" placement="bottom-end">
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Help Center</DropdownItem>
          <DropdownItem>Sign Out</DropdownItem>
        </Dropdown>
      </div>
    </section>

    <section class="space-y-3">
      <h2 class="text-xl font-semibold text-surface-800">Searchable Dropdown</h2>
      <Card variant="bordered">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SearchableDropdown
            v-model="selectedCountry"
            :options="countries"
            label="Country"
            placeholder="Search countries..."
            clearable
            required
          />
          <SearchableDropdown
            v-model="selectedRole"
            :options="roles"
            label="Role"
            placeholder="Search roles..."
            clearable
            error="Please select a role"
          />
          <div>
            <p class="text-sm text-surface-500">Selected country: <strong>{{ selectedCountry ?? 'None' }}</strong></p>
            <p class="text-sm text-surface-500">Selected role: <strong>{{ selectedRole ?? 'None' }}</strong></p>
          </div>
        </div>
      </Card>
    </section>

    <section class="space-y-3">
      <h2 class="text-xl font-semibold text-surface-800">Tabs</h2>
      <Card variant="bordered">
        <Tabs v-model="activeTab" :tabs="[
          { key: 'overview', label: 'Overview', icon: '📊' },
          { key: 'analytics', label: 'Analytics', icon: '📈' },
          { key: 'settings', label: 'Settings', icon: '⚙️' },
        ]">
          <template #default="{ activeTab: tab }">
            <div v-if="tab === 'overview'" class="text-surface-600">
              <p>This is the overview panel. It shows a summary of your project data and recent activity.</p>
            </div>
            <div v-else-if="tab === 'analytics'" class="text-surface-600">
              <p>Analytics panel with charts and metrics tracking your performance over time.</p>
            </div>
            <div v-else-if="tab === 'settings'" class="text-surface-600">
              <p>Configure your project settings, notification preferences, and team permissions.</p>
            </div>
          </template>
        </Tabs>
      </Card>
    </section>

    <section class="space-y-3">
      <h2 class="text-xl font-semibold text-surface-800">Modal</h2>
      <div class="flex gap-3">
        <Button variant="primary" @click="showModal = true">Open Modal</Button>
      </div>
      <Modal v-model="showModal" title="Confirm Action" size="md">
        <p class="text-surface-600">Are you sure you want to proceed? This action cannot be undone.</p>
        <template #footer>
          <div class="flex justify-end gap-3">
            <Button variant="outline" @click="showModal = false">Cancel</Button>
            <Button variant="primary" @click="showModal = false">Confirm</Button>
          </div>
        </template>
      </Modal>
    </section>

    <section class="space-y-3">
      <h2 class="text-xl font-semibold text-surface-800">Toast</h2>
      <div class="flex flex-wrap gap-3">
        <Button variant="outline" @click="toast.success('Operation completed successfully!', { title: 'Success' })">Success Toast</Button>
        <Button variant="outline" @click="toast.error('Something went wrong.', { title: 'Error' })">Error Toast</Button>
        <Button variant="outline" @click="toast.warning('Please review before proceeding.', { title: 'Warning' })">Warning Toast</Button>
        <Button variant="outline" @click="toast.info('New update available.', { title: 'Info' })">Info Toast</Button>
      </div>
    </section>

    <Toast />
  </div>
</template>