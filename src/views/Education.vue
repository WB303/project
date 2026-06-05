<template>
  <div class="page-container">
    <h2 class="page-title">教育背景 & 荣誉奖项</h2>

    <el-card class="section-card" shadow="hover">
      <template #header>
        <div class="card-header">
          <el-icon><School /></el-icon>
          <span>教育背景</span>
        </div>
      </template>
      <div class="edu-item">
        <div class="edu-main">
          <h3>大连东软信息学院</h3>
          <p>数据科学与大数据技术 · 本科 · 2022 — 2026</p>
        </div>
        <div class="edu-stats">
          <el-tag type="success" effect="dark" round>GPA 4.21 / 5.0</el-tag>
          <el-tag type="warning" effect="dark" round>专业排名 1 / 114</el-tag>
          <el-tag effect="dark" round>中共党员</el-tag>
        </div>
      </div>
      <el-divider />
      <div class="score-grid">
        <div v-for="s in scores" :key="s.name" class="score-item">
          <span class="score-name">{{ s.name }}</span>
          <el-progress :percentage="s.score" :stroke-width="10" :color="s.color" />
        </div>
      </div>
    </el-card>

    <el-card class="section-card" shadow="hover">
      <template #header>
        <div class="card-header">
          <el-icon><Trophy /></el-icon>
          <span>奖学金</span>
        </div>
      </template>
      <ul class="award-list">
        <li v-for="item in scholarships" :key="item">
          <el-icon color="#f59e0b"><Medal /></el-icon>
          {{ item }}
        </li>
      </ul>
    </el-card>

    <el-card class="section-card" shadow="hover">
      <template #header>
        <div class="card-header">
          <el-icon><Star /></el-icon>
          <span>竞赛奖项</span>
        </div>
      </template>
      <el-timeline>
        <el-timeline-item
          v-for="award in competitions"
          :key="award.title"
          :timestamp="award.date"
          placement="top"
          :type="award.level === '国家级' ? 'primary' : 'success'"
        >
          <div class="award-item">
            <el-tag :type="award.level === '国家级' ? 'danger' : 'warning'" size="small" round>
              {{ award.level }}
            </el-tag>
            <strong>{{ award.title }}</strong>
            <p>{{ award.desc }}</p>
          </div>
        </el-timeline-item>
      </el-timeline>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import {
  ElCard,
  ElTag,
  ElDivider,
  ElProgress,
  ElTimeline,
  ElTimelineItem,
  ElIcon,
} from 'element-plus'
import { School, Trophy, Medal, Star } from '@element-plus/icons-vue'

const scores = [
  { name: '数据结构', score: 98, color: '#3b82f6' },
  { name: '数据库原理', score: 96, color: '#6366f1' },
  { name: '机器学习', score: 94, color: '#8b5cf6' },
  { name: '大数据技术', score: 97, color: '#06b6d4' },
]

const scholarships = [
  '国家励志奖学金',
  '校级一等奖学金（连续 2 次）',
  '校级优秀学生干部',
  '校级三好学生',
]

const competitions = [
  {
    level: '国家级',
    title: '中国大学生计算机设计大赛',
    date: '2024',
    desc: '大数据应用方向，完成智能数据分析系统设计与实现',
  },
  {
    level: '省级',
    title: '辽宁省大学生数学建模竞赛',
    date: '2023',
    desc: '二等奖，负责数据建模与算法优化',
  },
  {
    level: '校级',
    title: '东软杯程序设计竞赛',
    date: '2023',
    desc: '一等奖，全栈数据可视化项目',
  },
]
</script>

<style scoped lang="scss">
.page-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 32px 24px 60px;
}

.page-title {
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 28px;
  text-align: center;
}

.section-card {
  margin-bottom: 24px;
  background: var(--bg-card) !important;
  border: 1px solid var(--border) !important;
  color: var(--text-primary);

  :deep(.el-card__header) {
    border-bottom-color: var(--border);
    padding: 16px 20px;
  }

  :deep(.el-card__body) {
    padding: 20px;
  }
}

.card-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 1rem;
  color: var(--text-primary);
}

.edu-item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 16px;

  h3 {
    font-size: 1.15rem;
    margin-bottom: 4px;
    color: var(--text-primary);
  }

  p {
    color: var(--text-secondary);
    font-size: 0.9rem;
  }
}

.edu-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.score-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.score-item {
  .score-name {
    display: block;
    font-size: 0.85rem;
    color: var(--text-secondary);
    margin-bottom: 6px;
  }
}

.award-list {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 0;
    border-bottom: 1px solid var(--border);
    color: var(--text-primary);
    font-size: 0.95rem;

    &:last-child {
      border-bottom: none;
    }
  }
}

.award-item {
  strong {
    display: block;
    margin: 6px 0 4px;
    color: var(--text-primary);
  }

  p {
    color: var(--text-secondary);
    font-size: 0.85rem;
    margin: 0;
  }
}

@media (max-width: 768px) {
  .score-grid {
    grid-template-columns: 1fr;
  }

  .edu-item {
    flex-direction: column;
  }
}
</style>
