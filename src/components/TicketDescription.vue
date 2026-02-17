<template>
  <div class="ticket-description">
    <h3 class="ticket-description__title">Opis zgłoszenia</h3>
    <p class="ticket-description__text">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  description: {
    type: String,
    required: true
  }
})
</script>
