# DIAL-BAM 与 BMAD 的关系

---

## 一、BMAD 简介

**BMAD**（Breakthrough Method for Agile AI-Driven Development）是 AI 驱动的敏捷开发框架，核心包括：

- **Agentic Planning**：Analyst、PM、Architect 等专家 Agent 协作产出 PRD、架构
- **Context-Engineered Development**：Scrum Master Agent 将计划转为带完整上下文的开发 Story
- **Scale-Adaptive**：按项目复杂度自动调整规划深度
- **完整生命周期**：从头脑风暴到部署

详见：[BMAD Method](https://github.com/bmad-code-org/BMAD-METHOD)

---

## 二、参考与互补

| 维度 | BMAD | DIAL-BAM |
|------|------|----------|
| **定位** | AI 驱动开发框架 | 产品与创业方法论 |
| **核心** | Agent、Workflow、Context 工程 | 行业分析、需求验证、业务架构、规划拆解 |
| **产出** | PRD、架构、Story、代码 | Project Brief、L1/L2、Epic、规划、任务 |
| **工具** | npx install、Agent prompts | 追溯矩阵、模板、检查清单 |

### 互补关系

```
BMAD：负责「怎么开发」— Agent 协作、Story 生成、开发执行
DIAL-BAM：负责「开发什么」— 发现、验证、规划、追溯

可组合：DIAL-BAM 做 Discovery/Insight/Architecture 规划 → BMAD 做 Phase 3/4 的方案设计与实施
```

---

## 三、DIAL-BAM 对 BMAD 的借鉴

| BMAD 元素 | DIAL-BAM 借鉴 |
|-----------|---------------|
| 四阶段结构 | DIAL 四阶段、BAM 与 BMAD Phase 映射 |
| 角色与产出链 | Analyst→PM→Architect→SM→Dev→QA 对应 DIAL/BAM 各阶段 |
| 渐进式规划 | 短中长期、JIT 拆解、Scale-Adaptive |
| 可追溯 | BAM 的 REQ↔L1↔L2↔Epic↔Story↔L3↔L4 |

---

## 四、使用建议

| 场景 | 建议 |
|------|------|
| **纯方法论、无 Agent** | 仅用 DIAL-BAM |
| **有 Cursor/Copilot，无 BMAD** | DIAL-BAM + 人工/AI 辅助拆解 |
| **已用 BMAD** | DIAL-BAM 补充 Discovery/Insight 与业务架构追溯 |
| **从 0 到 1 创业** | DIAL 全流程 + BAM 追溯 |
