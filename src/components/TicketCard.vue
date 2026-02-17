<template>
  <div @click="$emit('click', ticket.id)" class="ticket-card">
    <div class="ticket-card__header">
      <div class="ticket-card__meta">
        <span class="ticket-card__id">#{{ ticket.id }}</span>
        <span :class="[
          'priority-badge',
          `priority-badge--${ticket.priority}`
        ]">
          {{ getPriorityLabel(ticket.priority) }}
        </span>
      </div>
      <span :class="[
        'status-badge',
        `status-badge--${ticket.status.replace('_', '-')}`
      ]">
        {{ getStatusLabel(ticket.status) }}
      </span>
    </div>

    <div class="ticket-card__body">
      <h3 class="ticket-card__subject">{{ ticket.subject }}</h3>
      <p class="ticket-card__customer">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="5" r="2.5" stroke="currentColor" stroke-width="1.5"/>
          <path d="M3 13c0-2.761 2.239-5 5-5s5 2.239 5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        {{ ticket.customerName }}
      </p>
      <p class="ticket-card__date">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.5"/>
          <path d="M8 4v4l3 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        {{ formatDate(ticket.createdAt) }}
      </p>
    </div>

    <div class="ticket-card__footer">
      <span class="ticket-card__view-details">
        Zobacz szczegóły
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 12l4-4-4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
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

defineEmits(['click'])

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

const formatDate = (dateString) => {
  const date = new Date(dateString)
  const now = new Date()
  const diffTime = Math.abs(now - date)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  
  if (diffDays === 0 || diffDays === 1) {
    return 'Dzisiaj'
  } else if (diffDays === 2) {
    return 'Wczoraj'
  } else if (diffDays < 7) {
    return `${diffDays} dni temu`
  } else {
    return date.toLocaleDateString('pl-PL', { 
      day: '2-digit', 
      month: '2-digit', 
      year: 'numeric' 
    })
  }
}
</script>
