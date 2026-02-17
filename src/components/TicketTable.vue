<template>
  <div class="ticket-table">
    <table class="ticket-table__table">
      <thead class="ticket-table__head">
        <tr>
          <th class="ticket-table__th">ID</th>
          <th class="ticket-table__th">Temat</th>
          <th class="ticket-table__th">Klient</th>
          <th class="ticket-table__th">Status</th>
          <th class="ticket-table__th">Priorytet</th>
          <th class="ticket-table__th">Data utworzenia</th>
          <th class="ticket-table__th"></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="ticket in tickets"
          :key="ticket.id"
          @click="$emit('ticket-click', ticket.id)"
          class="ticket-table__row"
        >
          <td class="ticket-table__td">
            <span class="ticket-table__id">#{{ ticket.id }}</span>
          </td>
          <td class="ticket-table__td">
            <span class="ticket-table__subject">{{ ticket.subject }}</span>
          </td>
          <td class="ticket-table__td">
            <div class="ticket-table__customer-info">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="5" r="2.5" stroke="currentColor" stroke-width="1.5"/>
                <path d="M3 13c0-2.761 2.239-5 5-5s5 2.239 5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              <span>{{ ticket.customerName }}</span>
            </div>
          </td>
          <td class="ticket-table__td">
            <span :class="['status-badge', `status-badge--${ticket.status.replace('_', '-')}`]">
              {{ getStatusLabel(ticket.status) }}
            </span>
          </td>
          <td class="ticket-table__td">
            <span :class="['priority-badge', `priority-badge--${ticket.priority}`]">
              {{ getPriorityLabel(ticket.priority) }}
            </span>
          </td>
          <td class="ticket-table__td">
            <div class="ticket-table__date-info">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.5"/>
                <path d="M8 4v4l3 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              <span>{{ formatDate(ticket.createdAt) }}</span>
            </div>
          </td>
          <td class="ticket-table__td">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="ticket-table__arrow">
              <path d="M7 15l5-5-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useTicketHelpers } from '../composables/useTicketHelpers'

defineProps({ tickets: { type: Array, required: true } })
defineEmits(['ticket-click'])

const { getStatusLabel, getPriorityLabel, formatDate } = useTicketHelpers()
</script>
