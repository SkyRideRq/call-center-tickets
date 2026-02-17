<template>
  <div class="ticket-header">
    <div class="ticket-header__top">
      <span class="ticket-header__id">#{{ ticket.id }}</span>
      <span :class="[
        'status-badge',
        `status-badge--${ticket.status.replace('_', '-')}`
      ]">
        {{ getStatusLabel(ticket.status) }}
      </span>
      <span :class="[
        'priority-badge',
        `priority-badge--${ticket.priority}`
      ]">
        {{ getPriorityLabel(ticket.priority) }}
      </span>
    </div>
    <h1 class="ticket-header__title">{{ ticket.subject }}</h1>
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

const getPriorityLabel = (priority) => {
  const labels = {
    low: 'Niski',
    medium: 'Średni',
    high: 'Wysoki'
  }
  return labels[priority] || priority
}
</script>
