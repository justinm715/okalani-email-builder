<script setup lang="ts">
import { ref, computed } from 'vue'
import EmailBuilder from './components/EmailBuilder.vue'
</script>

<template>
  <div class="container">
    <h1>Outrigger Club Email Builder</h1>
    <EmailBuilder />
  </div>
</template>

<style>
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0.75rem;
}

h1 {
  color: #2c3e50;
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
}

h2 {
  color: #2c3e50;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}
</style>