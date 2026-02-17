<template>
  <div class="app">
    <header class="app__header">
      <div class="container">
        <div class="app__header-content">
          <div class="app__logo">
            <router-link to="/" class="app__logo-link">
              <h1 class="app__logo-text">Support Hub</h1>
            </router-link>
          </div>
          <nav class="app__nav">
            <router-link to="/" class="app__nav-link">Zgłoszenia</router-link>
          </nav>
        </div>
      </div>
    </header>

    <main class="app__main">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useTicketsStore } from './stores/tickets'

const ticketsStore = useTicketsStore()

onMounted(() => {
  ticketsStore.fetchTickets()
})
</script>