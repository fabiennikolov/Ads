<script setup lang="ts">
withDefaults(defineProps<{
  intent?: 'primary' | 'accent' | 'unstyled'
  overlayClass?: string
}>(), {
  intent: 'primary',
})
</script>

<template>
  <button
    type="submit" class="group relative isolate w-full overflow-hidden btn"
    :class="{ ' text-white': intent !== 'unstyled' }"
  >
    <div
      class="absolute -bottom-4 -left-10 -right-10 -top-4 -z-1"
      :class="[{ 'bg-white text-[#222222]': !overlayClass }, overlayClass]"
      rounded="50%"
      translate-y="100%" group-hover="translate-y-0"
      flex items-center justify-center transition-all-500
    >
      <slot />
    </div>
    <span class="invisible">
      <slot />
    </span>
    <span
      group-hover="-translate-y-50% opacity-0"
      absolute inset-0 flex items-center justify-center transition-all-500
    >
      <slot />
    </span>
  </button>
</template>
