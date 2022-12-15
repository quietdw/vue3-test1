<script setup>
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <div class="app">
    <button @click="count++">+1</button>
    {{ count }}
  </div>
</template>

<style scoped>
.app {
  color: red;
}
</style>
