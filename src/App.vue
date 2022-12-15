<script setup>
const count = ref(0);
</script>

<template>
  <div class="app">
    <hello-world />
    <button @click="count++">+1</button>
    {{ count }}
  </div>
</template>

<style scoped>
.app {
  color: red;
}
</style>
