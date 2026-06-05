<template>
  <div class="page-container">
    <h2 class="page-title">实习经历 & 核心项目</h2>

    <div class="section">
      <h3 class="section-title">
        <el-icon><OfficeBuilding /></el-icon>
        实习经历 · 亚信科技 Agent 数据开发
        <el-tag size="small" round>2025.07 — 2026.05</el-tag>
      </h3>
      <el-card class="project-card" shadow="hover">
        <ul class="achievement-list">
          <li v-for="item in internship" :key="item">
            <el-icon color="#3b82f6"><CircleCheck /></el-icon>
            {{ item }}
          </li>
        </ul>
      </el-card>
    </div>

    <div class="section">
      <h3 class="section-title">
        <el-icon><Cpu /></el-icon>
        项目 1：自然语言问数智能 Agent
      </h3>
      <el-card class="project-card" shadow="hover" @click="openDetail(projects[0])">
        <div class="tech-stack">
          <el-tag v-for="t in projects[0].tech" :key="t" size="small" round effect="plain">
            {{ t }}
          </el-tag>
        </div>
        <p class="result">{{ projects[0].result }}</p>
        <el-button text type="primary" class="detail-btn">查看详情 →</el-button>
      </el-card>
    </div>

    <div class="section">
      <h3 class="section-title">
        <el-icon><Connection /></el-icon>
        项目 2：多智能体检索平台
      </h3>
      <el-card class="project-card" shadow="hover" @click="openDetail(projects[1])">
        <div class="tech-stack">
          <el-tag v-for="t in projects[1].tech" :key="t" size="small" round effect="plain">
            {{ t }}
          </el-tag>
        </div>
        <p class="result">{{ projects[1].result }}</p>
        <el-button text type="primary" class="detail-btn">查看详情 →</el-button>
      </el-card>
    </div>

    <el-dialog
      v-model="dialogVisible"
      :title="currentProject?.name"
      width="90%"
      style="max-width: 600px"
      destroy-on-close
    >
      <template v-if="currentProject">
        <h4>技术栈</h4>
        <div class="tech-stack" style="margin-bottom: 16px">
          <el-tag v-for="t in currentProject.tech" :key="t" round>{{ t }}</el-tag>
        </div>
        <h4>项目成果</h4>
        <p>{{ currentProject.result }}</p>
        <h4>项目描述</h4>
        <ul class="detail-list">
          <li v-for="d in currentProject.details" :key="d">{{ d }}</li>
        </ul>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElCard, ElTag, ElButton, ElDialog, ElIcon } from 'element-plus'
import { OfficeBuilding, Cpu, Connection, CircleCheck } from '@element-plus/icons-vue'

interface Project {
  name: string
  tech: string[]
  result: string
  details: string[]
}

const internship = [
  'ETL 数据治理，数据准确率提升至 99.6%',
  'SQL 服务开发，接口耗时缩短 32%',
  '大模型 Prompt & Agent 优化，问答准确率 +28%，落地运营商智能客服',
]

const projects: Project[] = [
  {
    name: '自然语言问数智能 Agent',
    tech: ['LangChain', 'LangGraph', 'RAG', 'Qdrant', 'ES', 'Docker', 'MySQL'],
    result: 'SQL 生成准确率 70% → 95%，减少 70% 数据分析取数工作量',
    details: [
      '基于 LangGraph 构建多步骤 Agent 工作流，实现自然语言到 SQL 的自动转换',
      '集成 Qdrant 向量库与 Elasticsearch 混合检索，提升 Schema 召回准确率',
      '使用 RAG 技术注入业务知识库，支持复杂多表关联查询',
      'Docker 容器化部署，对接企业 BI 平台，日均处理查询 500+ 次',
    ],
  },
  {
    name: '多智能体检索平台',
    tech: ['DeepAgents', 'WebSocket', 'RAGFlow', 'Tavily Search'],
    result: '多 Agent 协同，检索效率提升 45%，全流程自动生成分析 PDF 报告',
    details: [
      '设计 Planner + Executor 多 Agent 协作架构，实现任务自动分解与并行执行',
      'WebSocket 实时推送检索进度与中间结果，提升用户体验',
      '集成 RAGFlow 知识库与 Tavily 联网搜索，覆盖内外部信息源',
      '自动生成结构化分析 PDF 报告，支持一键导出分享',
    ],
  },
]

const dialogVisible = ref(false)
const currentProject = ref<Project | null>(null)

function openDetail(project: Project) {
  currentProject.value = project
  dialogVisible.value = true
}
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

.section {
  margin-bottom: 32px;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.1rem;
  color: var(--text-primary);
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.project-card {
  background: var(--bg-card) !important;
  border: 1px solid var(--border) !important;
  cursor: pointer;
  transition: transform 0.2s, border-color 0.2s;

  &:hover {
    transform: translateY(-2px);
    border-color: var(--accent) !important;
  }

  :deep(.el-card__body) {
    padding: 20px;
  }
}

.achievement-list {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 10px 0;
    color: var(--text-primary);
    font-size: 0.95rem;
    border-bottom: 1px solid var(--border);

    &:last-child {
      border-bottom: none;
    }
  }
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
}

.result {
  color: var(--accent-light);
  font-weight: 500;
  font-size: 0.95rem;
  margin: 0 0 8px;
}

.detail-btn {
  padding: 0;
}

.detail-list {
  padding-left: 20px;
  color: var(--text-secondary);
  line-height: 1.8;

  li {
    margin-bottom: 6px;
  }
}

h4 {
  color: var(--text-primary);
  margin: 12px 0 8px;
  font-size: 0.95rem;
}
</style>
