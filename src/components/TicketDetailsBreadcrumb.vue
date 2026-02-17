<template>
  <div class="ticket-breadcrumb">
    <button @click="$emit('back')" class="ticket-breadcrumb__btn">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M12 16l-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      Powrót do listy
    </button>
  </div>
</template>

<script setup>
defineEmits(['back'])
</script>
