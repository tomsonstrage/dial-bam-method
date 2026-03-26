# 更新日志

本文档记录 DIAL-BAM Method 的版本变更。

---

## [1.5.0] - 2025-03-11

### 新增

**快速开始优化**
- 快速开始文档：新增「5 分钟快速路径」表格，三步完成洞察→痛点→BAM
- 工具中心：首次访问显示新手引导条，可关闭（localStorage 记忆）
- 文档阅读：支持从 tools/ 加载 BAM-导入指南、DIAL-规划与任务模板等

**认证徽章**
- 学习培训认证页新增「徽章」按钮，可下载 160×32 认证徽章 PNG（用于个人主页、签名等）

**实训与 BAM 联动**
- 交付包导出：含实训进度（dial-bam-practice），导入时可恢复
- 学习培训：实训完成后显示「→ 去规划看板」「→ 去交付包导出」等跳转
- 规划看板：完成规划实训或 BAM 实训后显示联动提示

**反馈与学习路径**
- 新增 `docs/反馈与社区.md`：反馈渠道、内容建议、社区参与、GitHub 链接占位
- 学习培训总览「下一步」可点击跳转：继续学习、完成实训、去考试

**平台集成与证书**
- 新增 `docs/平台集成指南.md`：飞书/Notion 适配、BMAD 衔接、字段映射
- 证书导出 PNG：学习培训认证页新增「导出 PNG」按钮（html2canvas）

**学习培训增强**
- 新增 Discovery 阶段测验（6 题）：洞察、痛点、需求假设、Project Brief
- 新增 Architecture 阶段测验（6 题）：L1-L4、BAM 追溯、Epic/Story、规划看板
- 新增 Launch 阶段测验（6 题）：BML、坚持/转向、交付包
- DIAL 快速入门课程增加企业案例章节

**移动端优化**
- BAM 追溯矩阵：tabs 横向滚动、按钮 44px 触摸目标、480px 断点
- 规划看板：Epic/Story 卡片触摸优化
- 工具中心：体系图横向滚动、角色按钮 44px
- Project Brief、交付包导出：768px 响应式

**企业案例**
- 新增 `docs/企业案例-销售线索管理数字化.md`：完整案例，从洞察到交付的 BAM 追溯
- 新增 `tools/企业案例-销售线索管理数字化-交付包.json`：可导入交付包导出，体验全流程

**数据格式统一（Schema）**
- 新增 `tools/schema/dial-bam-schema.json`：JSON Schema 定义各工具输入/输出结构
- 新增 `tools/schema/README.md`：localStorage 键映射、跨工具数据流、使用说明
- 各模块（洞察、痛点、BMC、Project Brief、PRD、BAM、规划、BML、交付包）均有 $def 定义

### 更新

- 各模块输入输出规范：引用 Schema 文档
- 平台输入与数据入口：JSON 格式说明链接 Schema
- 交付包导出：修复商业模式画布 Markdown 汇总的字段标签映射（partners/activities/value 等）
- init 脚本：复制 schema 目录到目标项目

---

## [1.5.0] - 2025-03-11

### 新增

**痛点→BAM 流程**
- 痛点画布新增「前往 BAM 导入」：保存后跳转 BAM，并显示 from=pain 提示条
- BAM 追溯矩阵：来自痛点时显示引导（点击「痛点画布生成初稿」→ AI → 导入 JSON）

**业务流可视化快捷工具**
- 各流程图下增加「快捷工具」链接区，直达洞察、痛点、BAM、规划、BML、交付包等

**交付包完整性检查增强**
- 完整性不通过时，fail/warn 项增加「→ 去填写」链接，直达对应工具

**统一工作流导航条**
- 工具中心：工作流 洞察→痛点→Brief→BMC→PRD→BAM→规划→BML→交付包
- 洞察、痛点、BAM 工具页：顶部工作流导航，当前步骤高亮

---

## [1.4.0] - 2025-03-11

### 新增

**业务流可视化**
- 新增 `tools/业务流可视化.html`：业务流总览、工具数据流、企业诊断流程、BAM 追溯链、交付件流
- 多标签 Mermaid 流程图，支持企业顾问诊断场景

**业务流与优化指南**
- 新增 `docs/业务流与优化指南.md`：业务流说明、工具数据流、企业诊断流程、优化建议与优先级

**洞察→痛点 数据联动**
- 洞察可视化新增「推送到痛点画布」：汇总 PESTEL/五力/SWOT 结论，跳转痛点画布并提示导入
- 痛点画布新增「从洞察导入」：将洞察结论填入「痛」字段；支持 `?from=insight` 自动提示

**按角色进入**
- 工具中心新增「按角色进入」：战略/高管→洞察、产品经理→痛点、业务架构师→BAM、企业顾问→诊断流程、学习培训

### 更新

- 工具应用：补充工具数据流、企业诊断场景、业务流与优化指南引用
- 工具中心：业务流可视化入口、数据流提示链接、按角色进入区域
- 文档阅读、README：业务流与优化指南入口

---

## [1.3.0] - 2025-03-11

### 新增

**Project Brief 工具**
- 新增 `tools/Project-Brief.html`：结构化填写项目简报
- 字段：项目背景、目标市场、价值主张、核心假设、L1 业务域、范围边界、排除项
- 支持导出 JSON、Markdown，从 BAM 追溯矩阵导入 L1

**PRD 模板工具**
- 新增 `tools/PRD-模板.html`：结构化 PRD 填写
- 字段：业务背景、目标用户、功能清单（与 L2 对应）、用户旅程、MVP、非功能需求
- 支持导出 JSON、Markdown，从 BAM 追溯矩阵导入 L2

**交付件完整性检查**
- 交付包导出页新增「交付件完整性检查」区块
- 自动检查：BAM 追溯链、Discovery/Insight/Architecture/Launch 各阶段工具填写情况

**交付包导出扩展**
- 交付包新增 Project Brief、PRD 数据源
- 支持导入/导出完整交付件包（含 Project Brief、PRD）

**首屏与布局**
- 首屏改造：方法论介绍为主，四大核心理念、适用对象、解决问题
- 典型数据流、工具与阶段映射、与 BMAD 协作说明
- 两栏布局、卡片式结构、响应式适配

### 更新

- 平台输入与数据入口：补充 Project Brief、PRD、交付包数据流，一键导出标记为已实现
- 交付包导出：完整性检查区增加「刷新」按钮；新增「选择性导入」可只恢复指定工具；数据卡片可点击跳转工具
- init 脚本：补充 favicon、index.html、业务流可视化、AI-Prompt生成器、学习培训、平台输入与数据入口、业务流与优化指南；更新完成提示
- AI Prompt 生成器：支持 Project Brief、PRD 作为输入来源
- 学习培训：课程补充 Project Brief、PRD、交付包导出；新增交付包导出实训
- 交付包导出：新增「导出 Markdown 汇总」，生成可读的 MD 文档便于归档
- init 脚本：补充 DIAL、BAM、学习培训体系、AI-Prompt与输出报告、参考框架与AI时代、与BMAD的关系、内核与延伸、开发计划等文档
- README：方式一复制说明补充 index.html、favicon.svg
- 交付件清单：Project Brief、PRD 标记为已有专用工具
- 快速开始：补充 Project Brief、PRD 步骤及数据流速查
- 工具中心、首屏：更新数据流与工具映射

---

## [1.2.0] - 2025-03-11

### 新增

**平台输入与数据入口**
- 新增 `docs/平台输入与数据入口.md`：定义数据输入来源、文件上传、资料库检索、跨工具数据流
- 工具应用、方法论文档增加平台输入引用

**文档阅读增强**
- 关键词检索：按标题/文件名筛选文档列表
- 当前文档内搜索：高亮匹配、滚动定位、清除高亮
- 新增「平台输入与数据入口」「AI Prompt 与输出报告」文档入口

**文件导入扩展**
- BAM 追溯矩阵、规划看板支持 Excel（.xlsx/.xls）导入
- BAM 导入指南补充 Excel 格式说明（Sheet 名称、列结构）

**AI Prompt 与输出报告**
- 新增 `docs/AI-Prompt与输出报告.md`：Prompt 结构、输出报告格式、完整模板
- 新增 `tools/AI-Prompt生成器.html`：选择输入来源、生成 Prompt、复制到剪贴板
- 粘贴 AI 输出解析 JSON：从 AI 报告中提取 BAM 结构并导入 localStorage

---

## [1.1.0] - 2025-03-11

### 新增

**Phase 1 - BAM 可编辑与数据闭环**
- BAM 追溯矩阵支持编辑：L1/L2/L3/REQ/Epic/Story 增删改
- BAM 支持本地上传 JSON 导入
- BAM 支持导出 JSON 保存
- 洞察可视化「生成 BAM 需求初稿」AI 提示词
- 工具中心数据流引导

**Phase 2 - 战略与规划工具**
- 商业模式画布（9 宫格）：客户、价值主张、渠道、收入、成本等
- 规划看板：Epic/Story 短中长期规划，可从 BAM 导入

**Phase 3 - 文档与体验**
- 文档阅读：00-06、BAM、DIAL、参考框架等在线阅读（marked.js）
- init 脚本补全：新工具纳入 COPY_MAP

**Phase 4 - 痛点与 BML**
- 痛点画布：痛频量价、需求假设清单
- BML 验证看板：Build-Measure-Learn 迭代记录

**体验优化**
- 响应式：各工具移动端适配
- 无障碍：focus-visible、Tab 键盘导航、跳过链接
- 统一导航：各工具「← 工具中心」
- 文档阅读：补充 BAM、DIAL、参考框架与 AI 时代等

**后续迭代**
- 规划看板：Epic/Story horizon、status 可编辑
- BML 与 BAM 关联：迭代可填写「关联 Epic/Story」
- 数据打通：痛点画布、洞察均可生成 BAM 初稿；BAM 支持「痛点画布生成初稿」
- BML「从规划看板复制 Epic 列表」

**文档与示例**
- 快速开始指南（docs/快速开始.md）
- 常见问题 FAQ（docs/常见问题.md）
- 文档阅读：记住上次阅读、打印按钮、返回顶部
- favicon 图标（favicon.svg）

**文档阅读增强**
- 上一文档/下一文档导航
- 复制当前文档链接
- 键盘快捷键：← → 切换文档
- 术语表（docs/术语表.md）
- BAM 追溯矩阵示例数据（线索到商机）
- 文档阅读：返回顶部按钮、快速开始入口

---

## [1.0.0] - 初始版本

- 文档体系：00-06 核心理念、方法论、阶段文档
- 洞察可视化：PESTEL、五力、SWOT
- DIAL 流程可视化：Mermaid 流程图
- BAM 追溯矩阵：只读展示、筛选
- init 脚本：复制 docs/tools 到目标项目

---

[1.5.0]: https://github.com/YOUR_USERNAME/dial-bam-method/releases/tag/v1.5.0
[1.4.0]: https://github.com/YOUR_USERNAME/dial-bam-method/releases/tag/v1.4.0
[1.2.0]: https://github.com/YOUR_USERNAME/dial-bam-method/releases/tag/v1.2.0
[1.1.0]: https://github.com/YOUR_USERNAME/dial-bam-method/releases/tag/v1.1.0
[1.0.0]: https://github.com/YOUR_USERNAME/dial-bam-method/releases/tag/v1.0.0
