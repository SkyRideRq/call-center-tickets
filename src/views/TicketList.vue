<template>
  <div class="ticket-list">
    <div class="container">
      <TicketListHeader :total-count="ticketsStore.ticketStats.total" />

      <TicketFilters 
        :filters="filters"
        :current-filter="ticketsStore.currentFilter"
        @filter-change="ticketsStore.setFilter"
      />

      <!-- Loader -->
      <LoaderSpinner v-if="ticketsStore.loading" />

      <!-- Lista zgłoszeń -->
      <div v-else class="ticket-list__container">
        <TicketTable 
          :tickets="ticketsStore.filteredTickets"
          @ticket-click="goToTicket"
        />

        <TicketCards 
          :tickets="ticketsStore.filteredTickets"
          @ticket-click="goToTicket"
        />

        <EmptyState v-if="ticketsStore.filteredTickets.length === 0" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useTicketsStore } from '../stores/tickets'
import TicketListHeader from '../components/TicketListHeader.vue'
import TicketFilters from '../components/TicketFilters.vue'
import TicketTable from '../components/TicketTable.vue'
import TicketCards from '../components/TicketCards.vue'
import EmptyState from '../components/EmptyState.vue'
import LoaderSpinner from '../components/LoaderSpinner.vue'

const router = useRouter()
const ticketsStore = useTicketsStore()

const filters = computed(() => [
  { value: 'all', label: 'Wszystkie', icon: '📊', count: ticketsStore.ticketStats.total },
  { value: 'new', label: 'Nowe', icon: '🆕', count: ticketsStore.ticketStats.new },
  { value: 'in_progress', label: 'W trakcie', icon: '⚡', count: ticketsStore.ticketStats.inProgress },
  { value: 'closed', label: 'Zamknięte', icon: '✅', count: ticketsStore.ticketStats.closed }
])

const goToTicket = (id) => {
  router.push(`/ticket/${id}`)
}
</script>
