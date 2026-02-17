import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTicketsStore = defineStore('tickets', () => {
  // State
  const tickets = ref([])
  const loading = ref(false)
  const loadingTicket = ref(false)
  const currentFilter = ref('all')

  // Mock data
  const mockTickets = [
    {
      id: 1,
      customerName: "Jan Kowalski",
      subject: "Problem z logowaniem",
      description: "Nie mogę się zalogować do systemu od wczoraj. Próbowałem zresetować hasło, ale nie otrzymuję emaila z linkiem.",
      priority: "high",
      status: "new",
      createdAt: "2024-02-06T10:30:00"
    },
    {
      id: 2,
      customerName: "Anna Nowak",
      subject: "Błąd w fakturze",
      description: "Na ostatniej fakturze widnieje nieprawidłowa kwota. Zamiast 150 zł jest 1500 zł.",
      priority: "high",
      status: "in_progress",
      createdAt: "2024-02-07T09:15:00"
    },
    {
      id: 3,
      customerName: "Piotr Wiśniewski",
      subject: "Pytanie o funkcjonalność",
      description: "Czy jest możliwość eksportu danych do formatu CSV? Nie mogę znaleźć tej opcji w menu.",
      priority: "low",
      status: "closed",
      createdAt: "2024-02-05T14:20:00"
    },
    {
      id: 4,
      customerName: "Magdalena Zielińska",
      subject: "Aplikacja mobilna nie działa",
      description: "Po ostatniej aktualizacji aplikacja mobilna wywala się przy próbie zalogowania na iOS.",
      priority: "high",
      status: "in_progress",
      createdAt: "2024-02-08T11:45:00"
    },
    {
      id: 5,
      customerName: "Tomasz Lewandowski",
      subject: "Prośba o zwrot",
      description: "Chciałbym anulować ostatnie zamówienie i otrzymać zwrot pieniędzy. Numer zamówienia: #45672.",
      priority: "medium",
      status: "new",
      createdAt: "2024-02-08T16:30:00"
    },
    {
      id: 6,
      customerName: "Karolina Dąbrowska",
      subject: "Zmiana danych kontaktowych",
      description: "Potrzebuję zaktualizować numer telefonu i adres email w moim profilu.",
      priority: "low",
      status: "closed",
      createdAt: "2024-02-04T08:10:00"
    },
    {
      id: 7,
      customerName: "Marek Kamiński",
      subject: "Brak dostępu do premium",
      description: "Opłaciłem subskrypcję premium wczoraj, ale nadal mam konto darmowe. Przelew został zrealizowany.",
      priority: "high",
      status: "new",
      createdAt: "2024-02-08T13:20:00"
    },
    {
      id: 8,
      customerName: "Ewa Wojciechowska",
      subject: "Sugestia nowej funkcji",
      description: "Byłoby świetnie gdyby można było ustawić powiadomienia push dla ważnych wydarzeń.",
      priority: "low",
      status: "in_progress",
      createdAt: "2024-02-06T15:40:00"
    },
    {
      id: 9,
      customerName: "Jakub Szymański",
      subject: "Wolne działanie systemu",
      description: "Od kilku dni system działa bardzo wolno. Ładowanie strony trwa ponad 10 sekund.",
      priority: "medium",
      status: "new",
      createdAt: "2024-02-08T17:05:00"
    },
    {
      id: 10,
      customerName: "Natalia Kozłowska",
      subject: "Problem z płatnością",
      description: "Karta płatnicza została odrzucona mimo że mam środki na koncie. Próbowałam kilka razy.",
      priority: "medium",
      status: "in_progress",
      createdAt: "2024-02-07T12:30:00"
    }
  ]

  // Actions
  const fetchTickets = () => {
    loading.value = true
    setTimeout(() => {
      tickets.value = mockTickets
      loading.value = false
    }, 1000)
  }

  const updateTicketStatus = (ticketId, newStatus) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const ticket = tickets.value.find(t => t.id === ticketId)
        if (ticket) {
          ticket.status = newStatus
        }
        resolve()
      }, 1000)
    })
  }

  const fetchTicketById = (id) => {
    loadingTicket.value = true
    return new Promise((resolve) => {
      setTimeout(() => {
        loadingTicket.value = false
        resolve(tickets.value.find(t => t.id === parseInt(id)))
      }, 1000)
    })
  }

  const setFilter = (filter) => {
    currentFilter.value = filter
  }

  // Getters
  const filteredTickets = computed(() => {
    if (currentFilter.value === 'all') {
      return tickets.value
    }
    return tickets.value.filter(ticket => ticket.status === currentFilter.value)
  })

  const getTicketById = computed(() => {
    return (id) => tickets.value.find(ticket => ticket.id === parseInt(id))
  })

  const ticketStats = computed(() => {
    return {
      total: tickets.value.length,
      new: tickets.value.filter(t => t.status === 'new').length,
      inProgress: tickets.value.filter(t => t.status === 'in_progress').length,
      closed: tickets.value.filter(t => t.status === 'closed').length
    }
  })

  return {
    tickets,
    loading,
    loadingTicket,
    currentFilter,
    fetchTickets,
    fetchTicketById,
    updateTicketStatus,
    setFilter,
    filteredTickets,
    getTicketById,
    ticketStats
  }
})
