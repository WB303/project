<template>
  <div class="page-container">
    <h2 class="page-title">技能清单 & 自我评价</h2>

    <el-card class="section-card" shadow="hover">
      <template #header>
        <div class="card-header">
          <el-icon><SetUp /></el-icon>
          <span>核心技术能力</span>
        </div>
      </template>
      <div class="skill-list">
        <div v-for="skill in skills" :key="skill.name" class="skill-item">
          <div class="skill-header">
            <span class="skill-name">{{ skill.name }}</span>
            <span class="skill-percent">{{ skill.level }}%</span>
          </div>
          <el-progress
            :percentage="skill.level"
            :stroke-width="12"
            :color="skill.color"
            :show-text="false"
          />
          <div class="skill-tags">
            <el-tag v-for="t in skill.tags" :key="t" size="small" round effect="plain">
              {{ t }}
            </el-tag>
          </div>
        </div>
      </div>
    </el-card>

    <el-card class="section-card" shadow="hover">
      <template #header>
        <div class="card-header">
          <el-icon><Monitor /></el-icon>
          <span>编程语言 & 工具</span>
        </div>
      </template>
      <div class="lang-grid">
        <div v-for="lang in languages" :key="lang.name" class="lang-item">
          <span class="lang-name">{{ lang.name }}</span>
          <el-rate v-model="lang.stars" disabled :colors="['#3b82f6', '#3b82f6', '#3b82f6']" />
        </div>
      </div>
    </el-card>

    <el-card class="section-card" shadow="hover">
      <template #header>
        <div class="card-header">
          <el-icon><ChatDotRound /></el-icon>
          <span>自我评价</span>
        </div>
      </template>
      <div class="evaluation">
        <p v-for="(para, i) in evaluation" :key="i">{{ para }}</p>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ElCard, ElProgress, ElTag, ElRate, ElIcon } from 'element-plus'
import { SetUp, Monitor, ChatDotRound } from '@element-plus/icons-vue'

const skills = [
  {
    name: 'Agent 应用开发',
    level: 95,
    color: '#3b82f6',
    tags: ['LangChain', 'LangGraph', 'DeepAgents', 'Prompt Engineering'],
  },
  {
    name: 'RAG / 向量检索',
    level: 90,
    color: '#6366f1',
    tags: ['Qdrant', 'Elasticsearch', 'RAGFlow', 'Embedding'],
  },
  {
    name: '大数据 & 数据工程',
    level: 90,
    color: '#06b6d4',
    tags: ['ETL', 'SQL', 'MySQL', '数据治理'],
  },
  {
    name: '全栈 & 工程化',
    level: 85,
    color: '#8b5cf6',
    tags: ['Python', 'Vue3', 'Docker', 'WebSocket'],
  },
]

const languages = [
  { name: 'Python', stars: 5 },
  { name: 'SQL', stars: 5 },
  { name: 'Java', stars: 4 },
  { name: 'TypeScript / Vue', stars: 4 },
  { name: 'Linux / Shell', stars: 4 },
]

const evaluation = [
  '数据科学与大数据技术专业第一名，具备扎实的数学与编程基础，对 AI Agent 技术有浓厚热情与深入实践。',
  '在亚信科技实习期间，独立完成 ETL 数据治理、SQL 服务开发与 Agent 优化工作，将大模型问答准确率提升 28%，成果落地运营商智能客服场景。',
  '主导自然语言问数 Agent 与多智能体检索平台两大项目，熟练掌握 LangChain/LangGraph 工作流编排、RAG 混合检索与多 Agent 协同架构，具备从 0 到 1 的 AI 应用落地能力。',
  '学习能力强、执行力突出，善于将前沿 AI 技术与业务场景结合，期待在 Agent 应用开发领域持续深耕。',
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

  :deep(.el-card__header) {
    border-bottom-color: var(--border);
  }
}

.card-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: var(--text-primary);
}

.skill-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.skill-item {
  .skill-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  .skill-name {
    font-weight: 600;
    color: var(--text-primary);
    font-size: 0.95rem;
  }

  .skill-percent {
    color: var(--accent-light);
    font-weight: 600;
    font-size: 0.9rem;
  }

  .skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 10px;
  }
}

.lang-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.lang-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-radius: 8px;
  background: var(--progress-bg);
  border: 1px solid var(--border);

  .lang-name {
    font-weight: 500;
    color: var(--text-primary);
    font-size: 0.9rem;
  }
}

.evaluation {
  p {
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 12px;
    font-size: 0.95rem;
    text-indent: 2em;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

@media (max-width: 768px) {
  .lang-grid {
    grid-template-columns: 1fr;
  }
}
</style>
