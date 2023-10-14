<template>
  <main class="layout content min-h-screen pxa pya">
    <slot />
  </main>
  <Footer />
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1; /* main contenta stretches and takes the remaining space */
}
</style>
