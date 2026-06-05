<template>
  <div class="home-container">
    <div class="hero-bg" />
    <div class="info-card">
      <div class="avatar">王</div>
      <h1>王斌 <span class="title">| Agent 应用开发工程师</span></h1>
      <p class="subtitle">23 岁 · 中共党员 · 大连东软信息学院 · 数据科学与大数据技术 本科</p>
      <p class="contact">
        <el-icon><Phone /></el-icon> 18245477126
        <span class="divider">|</span>
        <el-icon><Message /></el-icon> 1773541181@qq.com
      </p>
      <div class="tag-group">
        <el-tag effect="dark" round>求职：Agent 应用开发</el-tag>
        <el-tag type="success" effect="dark" round>GPA 4.21 · 专业第 1/114</el-tag>
        <el-tag type="warning" effect="dark" round>亚信科技实习</el-tag>
        <el-tag type="info" effect="dark" round>LangChain / RAG</el-tag>
      </div>
      <div class="actions">
        <el-button type="primary" size="large" @click="$router.push('/projects')">
          查看项目经历
        </el-button>
        <el-button size="large" @click="$router.push('/skill')">技能与评价</el-button>
        <el-button size="large" plain @click="downloadResume">
          <el-icon><Download /></el-icon> 下载简历
        </el-button>
      </div>
    </div>

    <div class="highlights">
      <div v-for="item in highlights" :key="item.label" class="highlight-card">
        <div class="highlight-value">{{ item.value }}</div>
        <div class="highlight-label">{{ item.label }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElTag, ElButton, ElIcon } from 'element-plus'
import { Phone, Message, Download } from '@element-plus/icons-vue'

const highlights = [
  { value: '95%', label: 'SQL 生成准确率' },
  { value: '99.6%', label: '数据治理准确率' },
  { value: '45%', label: '检索效率提升' },
  { value: '28%', label: '问答准确率提升' },
]

function downloadResume() {
  window.print()
}
</script>

<style scoped lang="scss">
.home-container {
  position: relative;
  padding: 40px 24px 60px;
  max-width: 900px;
  margin: 0 auto;
}

.hero-bg {
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, var(--accent-glow) 0%, transparent 70%);
  pointer-events: none;
}

.info-card {
  position: relative;
  padding: 48px 40px;
  border-radius: 16px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
  text-align: center;

  .avatar {
    width: 80px;
    height: 80px;
    margin: 0 auto 20px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--accent), #6366f1);
    color: #fff;
    font-size: 2rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 30px var(--accent-glow);
  }

  h1 {
    font-size: 1.75rem;
    color: var(--text-primary);
    margin-bottom: 12px;

    .title {
      font-size: 1.1rem;
      color: var(--accent-light);
      font-weight: 500;
    }
  }

  .subtitle {
    color: var(--text-secondary);
    margin-bottom: 8px;
    font-size: 0.95rem;
  }

  .contact {
    color: var(--text-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 24px;
    font-size: 0.9rem;

    .divider {
      opacity: 0.4;
    }
  }

  .tag-group {
    margin: 20px 0 28px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
  }
}

.highlights {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: 32px;
}

.highlight-card {
  padding: 20px 16px;
  border-radius: 12px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  text-align: center;
  transition: transform 0.2s, border-color 0.2s;

  &:hover {
    transform: translateY(-2px);
    border-color: var(--accent);
  }

  .highlight-value {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--accent-light);
    margin-bottom: 4px;
  }

  .highlight-label {
    font-size: 0.8rem;
    color: var(--text-secondary);
  }
}

@media (max-width: 768px) {
  .info-card {
    padding: 32px 20px;

    h1 {
      font-size: 1.35rem;

      .title {
        display: block;
        margin-top: 4px;
        font-size: 1rem;
      }
    }
  }

  .highlights {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
