
const STATUS_LABELS = {
  new: 'Nowe',
  in_progress: 'W trakcie',
  closed: 'Zamknięte'
}

const PRIORITY_LABELS = {
  low: 'Niski',
  medium: 'Średni',
  high: 'Wysoki'
}

export function useTicketHelpers() {
  const getStatusLabel = (status) =>
    STATUS_LABELS[status] ?? status

  const getPriorityLabel = (priority) =>
    PRIORITY_LABELS[priority] ?? priority

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const diffDays = Math.ceil(Math.abs(new Date() - date) / (1000 * 60 * 60 * 24))

    if (diffDays <= 1) return 'Dzisiaj'
    if (diffDays === 2) return 'Wczoraj'
    if (diffDays < 7) return `${diffDays} dni temu`

    return date.toLocaleDateString('pl-PL', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
  }

  const formatFullDate = (dateString) =>
    new Date(dateString).toLocaleDateString('pl-PL', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })

  return { getStatusLabel, getPriorityLabel, formatDate, formatFullDate }
}
