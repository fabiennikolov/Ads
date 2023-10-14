<script setup lang="ts">
import type { AdInfo } from '~/types'

defineProps<AdInfo>()
</script>

<template>
  <div
    class="my-4 max-w-75 overflow-hidden rounded-7 from-red-1 to-white bg-gradient-to-r shadow-xl drop-shadow-xl transition-all-200 hover:scale-105 space-y-2"
  >
    <div flex="~ col" class="items-center gap-3">
      <div class="h-30 w-60">
        <img :src="image" class="mx-auto mt10 h-15 w-15 object-contain">
      </div>
      <h4 class="text-center text-5 font-700 leading-relaxed text-black">
        {{ title }}
      </h4>
      <p v-if="description" class="px-1 text-start text-sm font-500 leading-7 text-black/80">
        {{ description }}
      </p>
    </div>
    <button class="w-full bg-red-5">
      <NuxtLink
        class="mx-auto block w-full py-2 text-4 font-700 text-white transition-all-300"
        :href="link.redirect"
      >
        {{ link.label }}
      </NuxtLink>
    </button>
  </div>
</template>
