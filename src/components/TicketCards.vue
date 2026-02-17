<template>
  <transition-group name="ticket-list" tag="div" class="ticket-cards">
    <TicketCard
      v-for="ticket in tickets"
      :key="ticket.id"
      :ticket="ticket"
      @click="$emit('ticket-click', ticket.id)"
    />
  </transition-group>
</template>

<script setup>
import TicketCard from './TicketCard.vue'

defineProps({
  tickets: {
    type: Array,
    required: true
  }
})

defineEmits(['ticket-click'])
</script>
