<template>
  <div class="ticket-info">
    <h3 class="ticket-info__title">Informacje podstawowe</h3>

    <div class="ticket-info__item">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="7" r="3" stroke="currentColor" stroke-width="1.5"/>
        <path d="M4 17c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
      <div class="ticket-info__content">
        <span class="ticket-info__label">Klient</span>
        <span class="ticket-info__value">{{ ticket.customerName }}</span>
      </div>
    </div>

    <div class="ticket-info__item">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="4" width="14" height="13" rx="2" stroke="currentColor" stroke-width="1.5"/>
        <path d="M3 8h14M7 1v3M13 1v3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
      <div class="ticket-info__content">
        <span class="ticket-info__label">Data utworzenia</span>
        <span class="ticket-info__value">{{ formatFullDate(ticket.createdAt) }}</span>
      </div>
    </div>

    <div class="ticket-info__item">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 3v14M4 10l6-6 6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <div class="ticket-info__content">
        <span class="ticket-info__label">Priorytet</span>
        <span class="ticket-info__value">{{ getPriorityLabel(ticket.priority) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTicketHelpers } from '../composables/useTicketHelpers'

defineProps({ ticket: { type: Object, required: true } })

const { getPriorityLabel, formatFullDate } = useTicketHelpers()
</script>
