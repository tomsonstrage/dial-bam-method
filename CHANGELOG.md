# 更新日志

本文档记录 DIAL-BAM Method 的版本变更。

---

## [1.7.3] - 2026-03-30

### 发布与部署

- **Docker 发布包**：`npm run docker:pack` 生成根目录 `dial-bam-method.tar`（需本机 Docker Desktop 已启动）；服务器执行 `docker load -i dial-bam-method.tar` 后 `docker run -d --name dial-bam-method --restart unless-stopped -p 3789:80 dial-bam-method:latest`。
- **脚本**：`scripts/deploy-docker.ps1`（可选上传 ECS）、`scripts/ecs-load-run.sh`（服务器侧加载并运行）。

---

## [1.7.2] - 2026-03-30

### 新增

- **`tools/i18n-core.js`**：最小中英切换（`localStorage` 键 `dial-bam-locale`），`data-i18n` / `data-i18n-html` 应用文案。
- **站点首页**、**工具中心**：右上角语言切换；首页与工具中心关键区块、入口链接、页脚等已接入英文词条。
- **`docs/多语言说明.md`**：机制说明与扩展方式；**`scripts/init.js`** 纳入 `i18n-core.js` 复制。

---

## [1.7.1] - 2026-03-30

### 更新

- **商业化运营工具**：新增「合同与交付里程碑」「回款与账单计划」两表（与商机管道区分）；AI 提示词与交付包 Markdown 同步输出；交付包检查网格对 GTM 统计增加里程碑/回款笔数提示。
- **文档与入口**：README / README_EN、交付件清单、01-方法论、平台输入与数据入口、工具应用、**分析工具中心**（主链路表）、交付包导出页说明与上述能力对齐。

---

## [1.7.0] - 2026-03-30

### 新增

- **`tools/商业化运营工具.html`**：商业化启动运营页（定价与套餐、GTM 自检清单、渠道表、商机管道、本月关键指标），localStorage `dial-bam-gtm-ops`，导出 JSON、复制 AI 提示词。
- **交付包导出**：纳入 `dial-bam-gtm-ops`，Markdown 分段输出。
- **工具中心**、**分析工具中心**、**init.js**、**学习培训**（扩展课程章节）、**README** / **工具应用** / **01-方法论** / **平台输入与数据入口** / **交付件清单**：同步入口与说明。

---

## [1.6.1] - 2026-03-30

### 新增

- **扩展分析工具**（独立 HTML，localStorage，导出 JSON/AI 提示词）：价值链、安索夫、BCG、用户画像与 JTBD、客户旅程地图、价值流图、根因分析、RACI、对标、场景规划、能力地图简表、战略地图因果链、TOGAF ADM 阶段清单、BABOK 需求检查清单。
- **分析工具中心**：第三节「扩展分析工具」表格与第四节文档类框架说明。

### 更新

- **交付包导出**：`SOURCES` 纳入上述扩展工具键；Markdown 导出为各键增加可读段落。
- **init.js**：`COPY_MAP` 增加对应 `tools/*.html`。
- **工具中心**：分析工具中心卡片说明扩展工具与交付包联动。
- **文档**：`交付件清单.md`、`参考框架索引.md`、`快速开始.md`、`平台输入与数据入口.md`、`README.md` / `README_EN.md` 与扩展工具、交付包说明对齐。
- **业务流可视化**：快捷入口与「工具与数据流」「交付件流」说明补充扩展分析工具与交付包关系。
- **MIT 数字化转型九要素**：增加「相关扩展工具」衔接区块（客户体验/运营/商业模式与能力、因果链）；**文档阅读**：顶栏增加分析工具与扩展工具入口。
- **04-Architecture.md**：新增「2.1 MIT 九要素、战略解码与扩展工具」，链到 MIT 九要素、战略计分卡/因果链、分析工具中心扩展、交付包及对标/场景/根因/RACI。
- **03-Insight.md**：新增「3.2 战略解码与扩展工具」（平衡计分卡/因果链、用户画像与 CJM、对标、分析工具中心扩展）。
- **02-Discovery.md**：新增「1.3 系统内工具衔接」：洞察、痛点、价值链、扩展工具与交付包。
- **05-Launch.md**：新增「3.3 系统内工具衔接」：规划看板、BML、交付包、场景规划、根因、RACI、扩展索引；导航增加链至 06。
- **01-方法论.md**：「四、体系工具」拆分为 4.1 主链路（含分析工具中心、MIT 九要素、战略计分卡、业务流等）与 **4.2 全阶段工具速查** 表。
- **06-AI增强与裁剪.md**：导航增加「Launch ←」；新增「1.6 与系统内工具协作」（BAM/Prompt 生成器/文档阅读/分析工具中心）。
- **00-核心理念.md**：「五、下一步」增加指向 01 第四节「体系工具」的链接。
- **内核与延伸.md**：文首增加方法论、工具应用、分析工具中心与扩展索引导航。
- **根目录 index.html**：「工具与阶段映射」下补充扩展工具与方法论第四节说明；入口增加分析工具中心、扩展分析工具。
- **README.md**：特性表增加「工具沉淀」一行。
- **README_EN.md**：增加 Tools 段说明主链路与扩展工具、链至分析工具中心与方法论第四节。
- **常见问题.md**：新增 Q4d（扩展分析工具、交付包、与方法论第四节关系）。
- **学习培训.html**：顶栏增加「分析工具中心」「方法论」链接。
- **学习培训-课程配置.json**：新增课程「扩展分析工具」、实训「扩展分析工具实训」；各角色推荐课程纳入该课；基础测验增 1 题、Launch 测验更新交付包选项；实训完成后链至分析工具中心扩展。
- **学习培训体系.md**：配置说明中补充扩展课程与实训、与交付包一致。
- **战略地图与平衡计分卡**：增加「相关工具」说明（因果链、MIT 九要素、安索夫/BCG/场景规划、交付包）。

### 修复

- **客户旅程地图**：删除行改为事件委托，避免索引错乱。
- **价值流图**：`summary` 与表格统一持久化，避免重复绑定监听。
- **MIT 数字化转型九要素**：「复制为 AI 提示词」按钮的样式类名（`btn-primary`）。
- **主链路工具按钮样式**：洞察可视化、痛点画布、商业模式画布、规划看板、BML 验证看板、战略地图与平衡计分卡等将误写的 `class="btn primary"` 改为 `class="btn btn-primary"`，与样式表一致。

---

## [1.6.0] - 2025-03-11

### 新增

**分析工具沉淀**
- 新增 `tools/分析工具中心.html`：按 DIAL 阶段汇总「参考框架 → 系统内工具 / 文档入口」
- 新增 `tools/MIT-数字化转型九要素.html`：三大领域×三维度，localStorage `dial-bam-mit9`
- 新增 `tools/战略地图与平衡计分卡.html`：四视角目标与 KPI，localStorage `dial-bam-bsc`

### 更新

- **交付包导出**：纳入 MIT 九要素、战略计分卡数据键
- **工具中心**、**参考框架索引**、**工具应用**、**交付件清单**、**init**：同步上述工具

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

[1.7.2]: https://github.com/YOUR_USERNAME/dial-bam-method/releases/tag/v1.7.2
[1.7.1]: https://github.com/YOUR_USERNAME/dial-bam-method/releases/tag/v1.7.1
[1.7.0]: https://github.com/YOUR_USERNAME/dial-bam-method/releases/tag/v1.7.0
[1.6.1]: https://github.com/YOUR_USERNAME/dial-bam-method/releases/tag/v1.6.1
[1.6.0]: https://github.com/YOUR_USERNAME/dial-bam-method/releases/tag/v1.6.0
[1.5.0]: https://github.com/YOUR_USERNAME/dial-bam-method/releases/tag/v1.5.0
[1.4.0]: https://github.com/YOUR_USERNAME/dial-bam-method/releases/tag/v1.4.0
[1.2.0]: https://github.com/YOUR_USERNAME/dial-bam-method/releases/tag/v1.2.0
[1.1.0]: https://github.com/YOUR_USERNAME/dial-bam-method/releases/tag/v1.1.0
[1.0.0]: https://github.com/YOUR_USERNAME/dial-bam-method/releases/tag/v1.0.0
