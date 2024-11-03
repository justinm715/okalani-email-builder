<script setup lang="ts">
import { defineProps, computed } from 'vue';
import type { EmailSection } from '../types';

const props = defineProps<{
  sections: EmailSection[];
}>();

const groupedSections = computed(() => {
  return props.sections.reduce((acc, section) => {
    const category = section.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(section);
    return acc;
  }, {} as Record<string, EmailSection[]>);
});
</script>

<template>
  <div class="sections">
    <h2>Email Sections</h2>
    <div class="section-list">
      <div
        v-for="(sections, category) in groupedSections"
        :key="category"
        class="category-group"
      >
        <h3 class="category-title">{{ category }}</h3>
        <div
          v-for="section in sections"
          :key="section.id"
          class="section-item"
          :class="{ 'section-selected': section.isSelected }"
        >
          <label class="section-header">
            <input type="checkbox" v-model="section.isSelected" />
            <span class="section-title">{{ section.title }}</span>
          </label>
          <div
            class="section-content"
            v-html="section.content.replace(/\n/g, '<br>')"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sections {
  border-right: 1px solid #eee;
  padding-right: 0.75rem;
  height: calc(100vh - 180px);
  overflow-y: auto;
}

.category-group {
  margin-bottom: 0.75rem;
}

.category-title {
  font-size: 0.8rem;
  color: #666;
  text-transform: uppercase;
  margin: 0.25rem 0;
  padding-bottom: 0.25rem;
  border-bottom: 1px solid #eee;
}

.section-item {
  margin-bottom: 0.4rem;
  padding: 0.4rem;
  border: 1px solid #eee;
  border-radius: 4px;
  font-size: 0.85rem;
  transition: all 0.2s ease;
}

.section-item:hover {
  background-color: #f9f9f9;
}

.section-selected {
  background-color: #f0f7f4;
  border-color: #42b883;
}

.section-header {
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 0.25rem;
}

.section-title {
  margin-left: 0.5rem;
  font-weight: 500;
  color: #2c3e50;
  font-size: 0.95rem;
}

.section-content {
  margin-left: 1.7rem;
  font-size: 0.95rem;
  color: #444;
  line-height: 1.4;
  white-space: pre-line;
  font-size: 0.7rem;
}

input[type='checkbox'] {
  cursor: pointer;
  width: 14px;
  height: 14px;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #999;
}
</style>
