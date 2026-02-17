<template>
  <div class="base-select" :class="{ 'base-select--open': isOpen }" ref="wrapperRef">
    <button
      type="button"
      class="base-select__trigger"
      @click="toggleOpen"
    >
      <span class="base-select__value">{{ selectedLabel }}</span>
      <svg class="base-select__arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>

    <ul v-if="isOpen" class="base-select__dropdown">
      <li
        v-for="option in options"
        :key="option.value"
        class="base-select__option"
        :class="{ 'base-select__option--active': option.value === modelValue }"
        @click="selectOption(option.value)"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  options: {
    type: Array, // [{ value: string, label: string }]
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)
const wrapperRef = ref(null)

const selectedLabel = computed(
  () => props.options.find(o => o.value === props.modelValue)?.label ?? ''
)

const toggleOpen = () => { isOpen.value = !isOpen.value }

const selectOption = (value) => {
  emit('update:modelValue', value)
  isOpen.value = false
}

const handleOutsideClick = (e) => {
  if (wrapperRef.value && !wrapperRef.value.contains(e.target)) {
    isOpen.value = false
  }
}

onMounted(() => document.addEventListener('mousedown', handleOutsideClick))
onBeforeUnmount(() => document.removeEventListener('mousedown', handleOutsideClick))
</script>
