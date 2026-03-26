# DIAL-BAM Method

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**业务分析及软件开发体系及工具** — **DIAL**（Discovery → Insight → Architecture → Launch）+ **BAM**（业务架构追溯）。

融合华为流程、IPD、TOGAF、BMAD、一堂五步法、精益创业，覆盖**行业分析 → 需求调研 → 解决方案 → 数字化承载 → 短中长期规划 → 任务拆解**全链路，适配 AI 与 Vibe coding。

100% 免费开源，无付费墙，无门槛。

---

## 为什么需要 DIAL-BAM？

传统方法往往割裂：需求分析、业务架构、开发交付各成体系，难以追溯。DIAL-BAM 将：

- **DIAL**：从行业发现到任务拆解的完整流程，战略导向、验证先行
- **BAM**：业务架构与需求的可追溯映射，REQ ↔ L1 ↔ L2 ↔ Epic ↔ Story ↔ L3 ↔ L4

| 特性 | 说明 |
|------|------|
| **全链路** | 行业分析 → 需求 → 方案 → 架构 → 规划 → 任务 → 交付 |
| **可追溯** | 业务域、模块、动作、步骤与需求、Epic、Story、AC 一一对应 |
| **战略导向** | 洞察→战略、痛频量价、MVP、Build-Measure-Learn | 
| **AI 友好** | 适配 AI 辅助拆解、Vibe coding、自然语言驱动 |
| **可裁剪** | 最小内核可独立使用，按需扩展 |

---

## 快速开始

### 方式一：复制到项目

```bash
# 克隆或下载本仓库
git clone https://github.com/YOUR_USERNAME/dial-bam-method.git

# 复制到你的项目（含首屏、favicon）
cp -r dial-bam-method/docs dial-bam-method/tools dial-bam-method/index.html dial-bam-method/favicon.svg your-project/documents/
```

### 方式二：npm init（可选）

```bash
npx dial-bam-method init
```

将 `docs` 和 `tools` 复制到当前项目的 `documents/` 目录。指定目录：`npx dial-bam-method init --directory=./my-project`

### 最小步骤

1. 阅读 [快速开始](docs/快速开始.md)（5 分钟上手）
2. 阅读 [核心理念](docs/00-核心理念.md) 和 [方法论](docs/01-方法论.md)
3. 用 [BAM-追溯矩阵-模板.json](tools/BAM-追溯矩阵-模板.json) 或 [加载示例](tools/BAM-追溯矩阵.html) 初始化
4. 按 [BAM 导入指南](tools/BAM-导入指南.md) 填写

---

## 文档结构（核心理念 → 方法论 → 工具）

| 层级 | 文档 | 说明 |
|------|------|------|
| **核心理念** | [00 核心理念](docs/00-核心理念.md) | 战略导向、流程分层、端到端追溯、闭环管理（参考华为） |
| **方法论** | [01 方法论](docs/01-方法论.md) | 发现→洞察→架构→交付，统一流程 |
| | [02 Discovery](docs/02-Discovery.md) | 洞察 + 需求调研，产出 L1 |
| | [03 Insight](docs/03-Insight.md) | 方案 + MVP，产出 L2 |
| | [04 Architecture](docs/04-Architecture.md) | 业务架构 + 数字化规划，Epic/Story |
| | [05 Launch](docs/05-Launch.md) | 任务拆解 + BML |
| | [06 AI 增强与裁剪](docs/06-AI增强与裁剪.md) | AI 时代、最小内核、可延伸 |
| **工具** | [工具应用](docs/工具应用.md) | 工具 ↔ 理念/方法 映射 |
| | [平台输入与数据入口](docs/平台输入与数据入口.md) | 数据输入、文件上传、资料库检索 |
| | [参考框架索引](docs/参考框架索引.md) | PESTEL、华为、IPD、TOGAF 等 |
| | [指导文档](docs/指导文档/README.md) | 华为、TOGAF、ThoughtWorks 等参考文档 |
| **项目** | [方法论演进分析与规划](docs/DIAL-BAM方法论演进分析与规划.md) | 项目价值、参考、差距与演进路径 |

---

## 工具

| 工具 | 说明 |
|------|------|
| [工具中心](tools/index.html) | 所有可视化工具入口 |
| [洞察可视化](tools/洞察可视化.html) | PESTEL、波特五力、SWOT 结构化填写，导出、AI 提示词 |
| [痛点画布](tools/痛点画布.html) | 痛频量价、需求假设清单、验证方式与状态 |
| [Project Brief](tools/Project-Brief.html) | 项目简报，从 BAM 导入 L1、从痛点复制痛频量价 |
| [商业模式画布](tools/商业模式画布.html) | 9 宫格：客户、价值主张、渠道、收入、成本等 |
| [PRD 模板](tools/PRD-模板.html) | PRD 结构化填写，从 BAM 导入 L2 |
| [业务流可视化](tools/业务流可视化.html) | 业务流总览、工具数据流、企业诊断流程、BAM 追溯链、交付件流 |
| [BAM 追溯矩阵](tools/BAM-追溯矩阵.html) | REQ↔L1↔L2↔Epic↔Story↔L3↔L4 可编辑、导入/导出 JSON |
| [规划看板](tools/规划看板.html) | Epic/Story 短中长期规划，可从 BAM 导入 |
| [BML 验证看板](tools/BML-验证看板.html) | Build-Measure-Learn 循环，坚持/转向决策 |
| [交付包导出](tools/交付包导出.html) | 汇总各工具数据导出/导入，含完整性检查 |
| [AI Prompt 生成器](tools/AI-Prompt生成器.html) | 输入+方法论→Prompt，输入外部 AI 返回业务分析报告 |
| [文档阅读](tools/文档阅读.html) | 00-06 方法论、术语表、FAQ、参考框架在线阅读，支持打印、上一/下一、快捷键 |
| [学习培训](tools/学习培训.html) | 学习·实训·考试·认证闭环，战略管理、数字化、业务分析 |
| [DIAL 流程可视化](tools/DIAL-流程可视化.html) | 完整流程、四阶段、洞察层、数字化提升流程图 |
| [BAM-追溯矩阵-模板.json](tools/BAM-追溯矩阵-模板.json) | 新项目初始化模板 |
| [BAM 导入指南](tools/BAM-导入指南.md) | 在其他项目中复用的步骤 |
| [BAM 工作流检查清单](tools/BAM-工作流检查清单.md) | 各 Phase 自检 |
| [DIAL 规划与任务模板](tools/DIAL-规划与任务模板.md) | 短中长期规划、任务拆解、AI 提示词 |

**启动工具**：在项目根目录执行 `npm run serve`，访问 http://localhost:3789

---

## 与 BMAD 的关系

DIAL-BAM **参考** BMAD 的结构与理念，并与之**互补**：

- **BMAD**：AI 驱动的敏捷开发框架，Agent、Workflow、Context 工程
- **DIAL-BAM**：产品与创业方法论，行业分析、需求验证、业务架构、规划拆解

可组合使用：BMAD 负责开发与 Agent 协作，DIAL-BAM 负责发现、规划与追溯。

---

## 贡献

欢迎提交 Issue 和 Pull Request，见 [CONTRIBUTING.md](CONTRIBUTING.md)。

更新记录见 [CHANGELOG.md](CHANGELOG.md)。

## 许可证

MIT License — 见 [LICENSE](LICENSE)。

---

## 独立发布

本项目可拆分为独立 GitHub 仓库。详见 [独立发布指南](独立发布指南.md)。

## 相关链接

- [BMAD Method](https://github.com/bmad-code-org/BMAD-METHOD) — AI 驱动开发
- [精益创业](https://www.leanstartup.co/) — 假设验证、MVP、BML
- [一堂](https://yitang.top/) — 五步法（需求、解决方案、商业模式、增长、壁垒）
- [TOGAF](https://www.opengroup.org/togaf) — 企业架构
