<template>
  <div class="ticket-list-header">
    <div class="ticket-list-header__main">
      <h1 class="ticket-list-header__title">Zgłoszenia</h1>
      <div class="ticket-list-header__stats">
        <div class="ticket-list-header__stat-pill">
          <span class="ticket-list-header__stat-value">{{ totalCount }}</span>
          <span class="ticket-list-header__stat-label">Wszystkie</span>
        </div>
      </div>
    </div>
    <p class="ticket-list-header__subtitle">Zarządzaj i monitoruj zgłoszenia klientów</p>
  </div>
</template>

<script setup>
defineProps({
  totalCount: {
    type: Number,
    required: true
  }
})
</script>
