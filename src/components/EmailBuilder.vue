<script setup lang="ts">
import { ref } from 'vue'
import SectionList from './SectionList.vue'
import EmailPreview from './EmailPreview.vue'
import { emailSections } from '../data/emailSections'

const sections = ref(emailSections)
</script>

<template>
  <div class="email-builder">
    <SectionList :sections="sections" />
    <EmailPreview :sections="sections" />
  </div>
</template>

<style scoped>
.email-builder {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 1rem;
  background-color: #fff;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
</style>