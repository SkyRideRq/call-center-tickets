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
defineProps({
  ticket: {
    type: Object,
    required: true
  }
})

const getStatusLabel = (status) => {
  const labels = {
    new: 'Nowe',
    in_progress: 'W trakcie',
    closed: 'Zamknięte'
  }
  return labels[status] || status
}

const formatFullDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('pl-PL', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}
</script>
