<script setup lang="ts">
import { computed, ref } from 'vue';
import type { EmailSection } from '../types';

const props = defineProps<{
  sections: EmailSection[];
}>();

const showSuccess = ref(false);

const compiledEmail = computed(() => {
  return props.sections
    .filter((section) => section.isSelected)
    .map((section) => section.content)
    .join('\n\n');
});

const wordCount = computed(() => {
  return compiledEmail.value.trim().split(/\s+/).length;
});

const readingTime = computed(() => {
  const minutes = Math.ceil(wordCount.value / 200);
  return minutes;
});

const copyToClipboard = async () => {
  await navigator.clipboard.writeText(compiledEmail.value);
  showSuccess.value = true;
  setTimeout(() => {
    showSuccess.value = false;
  }, 2000);
};
</script>

<template>
  <div class="preview">
    <h2>Email Preview</h2>
    <div class="controls">
      <div class="copy-container">
        <button
          @click="copyToClipboard"
          class="copy-button"
          :disabled="!compiledEmail"
        >
          Copy to Clipboard
        </button>
        <span v-if="showSuccess" class="success-message">Copied!</span>
      </div>
      <div class="stats" v-if="compiledEmail">
        <span>{{ wordCount }} words</span>
        <span class="separator">•</span>
        <span>~{{ readingTime }} min read</span>
      </div>
    </div>
    <div class="preview-content">
      <p v-if="!compiledEmail" class="placeholder">
        Select sections to build your email
      </p>
      <div
        v-else
        class="email-text"
        v-html="compiledEmail.replace(/\n/g, '<br>')"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.preview {
  padding-left: 0.75rem;
  height: calc(100vh - 180px);
  display: flex;
  flex-direction: column;
}

.controls {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.copy-container {
  position: relative;
  display: flex;
  align-items: center;
}

.success-message {
  position: absolute;
  left: 100%;
  margin-left: 0.5rem;
  background-color: #cdffcd;
  color: black;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  animation: fadeIn 0.2s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.stats {
  font-size: 0.75rem;
  color: #666;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.separator {
  color: #ccc;
}

.preview-content {
  background-color: #f8f9fa;
  border-radius: 4px;
  padding: 0.75rem;
  flex-grow: 1;
  overflow-y: auto;
}

.placeholder {
  color: #999;
  text-align: center;
  margin-top: 2rem;
  font-size: 0.85rem;
}

.email-text {
  white-space: pre-line;
  line-height: 1.5;
  font-size: 0.75rem;
  color: #2c3e50;
}

.copy-button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 0.35rem 0.7rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 500;
}

.copy-button:hover {
  background-color: #3aa876;
}

.copy-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
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