<template>
  <div class="ticket-status">
    <h3 class="ticket-status__title">Zmień status</h3>
    
    <form class="ticket-status__form" @submit.prevent="handleSubmit">
      <div class="ticket-status__form-group">
        <label class="ticket-status__label">Nowy status</label>
        <BaseSelect
          v-model="localStatus"
          :options="statusOptions"
        />
      </div>

      <div class="ticket-status__form-group">
        <button 
          type="submit"
          :disabled="saving || localStatus === currentStatus"
          class="ticket-status__btn"
        >
          <span v-if="!saving">Zapisz zmiany</span>
          <span v-else>Zapisywanie...</span>
        </button>
      </div>

      <transition name="success">
        <div v-if="showSuccess" class="ticket-status__success">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="1.5"/>
            <path d="M6 10l3 3 5-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Status zaktualizowany!
        </div>
      </transition>
    </form>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import BaseSelect from './BaseSelect.vue'

const props = defineProps({
  currentStatus: {
    type: String,
    required: true
  },
  saving: {
    type: Boolean,
    default: false
  },
  showSuccess: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update-status'])

const statusOptions = [
  { value: 'new', label: 'Nowe' },
  { value: 'in_progress', label: 'W trakcie' },
  { value: 'closed', label: 'Zamknięte' }
]

const localStatus = ref(props.currentStatus)

watch(() => props.currentStatus, (newStatus) => {
  localStatus.value = newStatus
})

const handleSubmit = () => {
  emit('update-status', localStatus.value)
}
</script>
