<template>
  <header class="app-header">
    <div class="header-inner">
      <router-link to="/" class="logo">
        <span class="logo-icon">WB</span>
        <span class="logo-text">王斌 · 简历</span>
      </router-link>

      <nav class="nav-links" :class="{ open: menuOpen }">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="nav-link"
          @click="menuOpen = false"
        >
          {{ item.label }}
        </router-link>
      </nav>

      <div class="header-actions">
        <el-button circle :icon="isDark ? Sunny : Moon" @click="toggleTheme" />
        <el-button class="menu-toggle" circle :icon="Menu" @click="menuOpen = !menuOpen" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElButton } from 'element-plus'
import { Moon, Sunny, Menu } from '@element-plus/icons-vue'

defineProps<{
  isDark: boolean
}>()

const emit = defineEmits<{
  toggleTheme: []
}>()

const menuOpen = ref(false)

const navItems = [
  { path: '/', label: '首页' },
  { path: '/edu', label: '教育荣誉' },
  { path: '/projects', label: '实习项目' },
  { path: '/skill', label: '技能评价' },
]

function toggleTheme() {
  emit('toggleTheme')
}
</script>

<style scoped lang="scss">
.app-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--header-bg);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

.header-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--text-primary);
  flex-shrink: 0;

  .logo-icon {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    background: linear-gradient(135deg, var(--accent), #6366f1);
    color: #fff;
    font-size: 0.75rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo-text {
    font-weight: 600;
    font-size: 1rem;
  }
}

.nav-links {
  display: flex;
  gap: 8px;
}

.nav-link {
  padding: 8px 16px;
  border-radius: 8px;
  text-decoration: none;
  color: var(--text-secondary);
  font-size: 0.9rem;
  transition: all 0.2s;

  &:hover,
  &.router-link-active {
    color: var(--accent-light);
    background: var(--accent-glow);
  }
}

.header-actions {
  display: flex;
  gap: 8px;
  align-items: center;
}

.menu-toggle {
  display: none;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: inline-flex;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    flex-direction: column;
    background: var(--header-bg);
    border-bottom: 1px solid var(--border);
    padding: 12px 16px;

    &.open {
      display: flex;
    }
  }

  .nav-link {
    padding: 12px 16px;
  }
}
</style>
