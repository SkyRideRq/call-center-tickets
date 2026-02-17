import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { mockTickets } from '../mocks/tickets'

const API_DELAY = 1000

export const useTicketsStore = defineStore('tickets', () => {
  const tickets = ref([])
  const loading = ref(false)
  const loadingTicket = ref(false)
  const updating = ref(false)
  const error = ref(null)
  const currentFilter = ref('all')

  const setFilter = (filter) => {
    currentFilter.value = filter
  }
  // =========================
  // HELPERS
  // =========================

  const simulateApiCall = async (callback) => {
    await new Promise(resolve => setTimeout(resolve, API_DELAY))

    // możesz zasymulować losowy błąd:
    if (Math.random() < 0.2) throw new Error('Random API error')

    return callback()
  }

  const clearError = () => {
    error.value = null
  }

  // =========================
  // ACTIONS
  // =========================

  const fetchTickets = async () => {
    loading.value = true
    clearError()

    try {
      const data = await simulateApiCall(() => mockTickets)
      tickets.value = data
    } catch (err) {
      console.error('fetchTickets error:', err)
      error.value = 'Nie udało się pobrać zgłoszeń.'
    } finally {
      loading.value = false
    }
  }

  const fetchTicketById = async (id) => {
    loadingTicket.value = true
    clearError()

    try {
      if (!tickets.value.length) {
        await fetchTickets()
      }

      const ticket = tickets.value.find(
        t => t.id === Number(id)
      )

      if (!ticket) {
        throw new Error('Ticket not found')
      }

      return ticket
    } catch (err) {
      console.error('fetchTicketById error:', err)
      error.value = 'Nie znaleziono zgłoszenia.'
      return null
    } finally {
      loadingTicket.value = false
    }
  }

  const updateTicketStatus = async (id, newStatus) => {
    updating.value = true
    clearError()

    try {
      await simulateApiCall(() => {
        const ticket = tickets.value.find(
          t => t.id === Number(id)
        )

        if (!ticket) {
          throw new Error('Ticket not found')
        }

        ticket.status = newStatus
      })
    } catch (err) {
      console.error('updateTicketStatus error:', err)
      error.value = 'Nie udało się zaktualizować statusu.'
    } finally {
      updating.value = false
    }
  }

  // =========================
  // GETTERS
  // =========================

  const getTicketById = (id) => {
    return tickets.value.find(
      t => t.id === Number(id)
    )
  }

  const ticketStats = computed(() => {
    const stats = {
      total: tickets.value.length,
      new: 0,
      inProgress: 0,
      closed: 0
    }

    for (const t of tickets.value) {
      if (t.status === 'new') stats.new++
      if (t.status === 'in_progress') stats.inProgress++
      if (t.status === 'closed') stats.closed++
    }

    return stats
  })
  const filteredTickets = computed(() => {
    if (currentFilter.value === 'all') {
      return tickets.value
    }

    return tickets.value.filter(
      t => t.status === currentFilter.value
    )
  })
  return {
    tickets,
    loading,
    loadingTicket,
    updating,
    error,

    currentFilter,
    setFilter,

    fetchTickets,
    fetchTicketById,
    updateTicketStatus,

    getTicketById,
    ticketStats,
    filteredTickets
  }
})
