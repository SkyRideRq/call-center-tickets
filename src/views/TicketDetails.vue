<template>
  <div class="ticket-details">
    <div class="container">
      <TicketDetailsBreadcrumb @back="goBack" />

      <LoaderSpinner v-if="ticket === null" />

      <template v-else-if="ticket">
        <TicketDetailsHeader :ticket="ticket" />

        <div class="ticket-details__content">
          <aside class="ticket-details__sidebar">
            <TicketInfoPanel :ticket="ticket" />
            <TicketStatusUpdate 
              :current-status="ticket.status"
              :saving="saving"
              :show-success="showSuccess"
              @update-status="updateStatus"
            />
          </aside>

          <main class="ticket-details__main">
            <TicketDescription :description="ticket.description" />
            <TicketTimeline :ticket="ticket" />
          </main>
        </div>
      </template>

      <TicketNotFound v-else-if="ticket === undefined" @back="goBack" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useTicketsStore } from '../stores/tickets'
import TicketDetailsBreadcrumb from '../components/TicketDetailsBreadcrumb.vue'
import TicketDetailsHeader from '../components/TicketDetailsHeader.vue'
import TicketInfoPanel from '../components/TicketInfoPanel.vue'
import TicketStatusUpdate from '../components/TicketStatusUpdate.vue'
import TicketDescription from '../components/TicketDescription.vue'
import TicketTimeline from '../components/TicketTimeline.vue'
import TicketNotFound from '../components/TicketNotFound.vue'
import LoaderSpinner from '../components/LoaderSpinner.vue'

const router = useRouter()
const ticketsStore = useTicketsStore()

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

// trzy stany: null = ładowanie, object = znaleziono, undefined = nie znaleziono/błąd
const ticket = ref(null)
const saving = ref(false)
const showSuccess = ref(false)

onMounted(async () => {
  const result = await ticketsStore.fetchTicketById(props.id)
  ticket.value = result ?? undefined
})

const goBack = () => router.push('/')

const updateStatus = async (newStatus) => {
  if (!ticket.value || newStatus === ticket.value.status) return

  saving.value = true
  showSuccess.value = false

  await ticketsStore.updateTicketStatus(ticket.value.id, newStatus)

  saving.value = false
  showSuccess.value = true

  setTimeout(() => { showSuccess.value = false }, 3000)
}
</script>
