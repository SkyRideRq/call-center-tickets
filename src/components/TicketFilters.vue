<template>
  <div class="ticket-filters">
    <div class="ticket-filters__list">
      <button
        v-for="filter in filters"
        :key="filter.value"
        @click="$emit('filter-change', filter.value)"
        :class="[
          'ticket-filters__btn',
          { 'ticket-filters__btn--active': currentFilter === filter.value }
        ]"
      >
        <span class="ticket-filters__icon">{{ filter.icon }}</span>
        <span class="ticket-filters__text">{{ filter.label }}</span>
        <span v-if="filter.count !== undefined" class="ticket-filters__count">
          {{ filter.count }}
        </span>
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  filters: {
    type: Array,
    required: true
  },
  currentFilter: {
    type: String,
    required: true
  }
})

defineEmits(['filter-change'])
</script>
