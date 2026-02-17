<template>
  <div class="ticket-timeline">
    <h3 class="ticket-timeline__title">Historia</h3>
    <div class="ticket-timeline__list">
      <div class="ticket-timeline__item">
        <div class="ticket-timeline__content">
          <div class="ticket-timeline__event">Zgłoszenie utworzone</div>
          <div class="ticket-timeline__date">{{ formatFullDate(ticket.createdAt) }}</div>
        </div>
      </div>
      <div v-if="ticket.status !== 'new'" class="ticket-timeline__item">
        <div class="ticket-timeline__content">
          <div class="ticket-timeline__event">Status zmieniony na: {{ getStatusLabel(ticket.status) }}</div>
          <div class="ticket-timeline__date">Niedawno</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTicketHelpers } from '../composables/useTicketHelpers'

defineProps({ ticket: { type: Object, required: true } })

const { getStatusLabel, formatFullDate } = useTicketHelpers()
</script>
