import './assets/main.css'

export { default as Button } from './components/ui/Button.vue'
export { default as Card } from './components/ui/Card.vue'
export { default as Table } from './components/ui/Table.vue'
export { default as Toast } from './components/ui/Toast.vue'
export { default as Badge } from './components/ui/Badge.vue'
export { default as Input } from './components/ui/Input.vue'
export { default as Modal } from './components/ui/Modal.vue'
export { default as Alert } from './components/ui/Alert.vue'
export { default as Dropdown } from './components/ui/Dropdown.vue'
export { default as DropdownItem } from './components/ui/DropdownItem.vue'
export { default as Tabs } from './components/ui/Tabs.vue'
export { default as SearchableDropdown } from './components/ui/SearchableDropdown.vue'
export { useToast } from './components/ui/useToast'

import Button from './components/ui/Button.vue'
import Card from './components/ui/Card.vue'
import Table from './components/ui/Table.vue'
import Toast from './components/ui/Toast.vue'
import Badge from './components/ui/Badge.vue'
import Input from './components/ui/Input.vue'
import Modal from './components/ui/Modal.vue'
import Alert from './components/ui/Alert.vue'
import Dropdown from './components/ui/Dropdown.vue'
import DropdownItem from './components/ui/DropdownItem.vue'
import Tabs from './components/ui/Tabs.vue'
import SearchableDropdown from './components/ui/SearchableDropdown.vue'

const components = {
  Button,
  Card,
  Table,
  Toast,
  Badge,
  Input,
  Modal,
  Alert,
  Dropdown,
  DropdownItem,
  Tabs,
  SearchableDropdown,
}

export default {
  install(app) {
    for (const [name, component] of Object.entries(components)) {
      app.component(name, component)
    }
  },
}