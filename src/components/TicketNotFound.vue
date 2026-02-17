<template>
  <div class="ticket-not-found">
    <div class="ticket-not-found__icon">🔍</div>
    <h2 class="ticket-not-found__title">Zgłoszenie nie znalezione</h2>
    <p class="ticket-not-found__text">Nie można znaleźć zgłoszenia o podanym ID</p>
    <button @click="$emit('back')" class="ticket-not-found__btn">
      Powrót do listy
    </button>
  </div>
</template>

<script setup>
defineEmits(['back'])
</script>
