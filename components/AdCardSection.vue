<script setup lang="ts">
import type { AdInfo } from '~/types'

defineProps<{
  cards: AdInfo[]
}>()
</script>

<template>
  <div class="grid mx-auto max-w-400 justify-center gap-6 lg:grid-cols-4 lt-lg:w-fit">
    <AdCard
      v-for="card in cards" :key="card.title"
      v-bind="card"
    />
  </div>
</template>
