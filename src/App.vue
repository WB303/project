<template>
  <div class="app-layout" :data-theme="isDark ? 'dark' : 'light'">
    <AppHeader :is-dark="isDark" @toggle-theme="toggleTheme" />
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <footer class="app-footer">
      <p>© 2026 王斌 · Agent 应用开发工程师 · Built with Vue3 + Vite + Cursor AI</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AppHeader from './components/AppHeader.vue'

const isDark = ref(true)

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved) {
    isDark.value = saved === 'dark'
  }
})

function toggleTheme() {
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}
</script>

<style scoped lang="scss">
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(160deg, var(--gradient-start) 0%, var(--gradient-end) 100%);
}

.main-content {
  flex: 1;
}

.app-footer {
  text-align: center;
  padding: 20px;
  color: var(--text-secondary);
  font-size: 0.8rem;
  border-top: 1px solid var(--border);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
