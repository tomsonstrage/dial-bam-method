# BAM 方法论与工具 — 导入指南

> 在其他项目中复用 BAM 融合方法论及追溯工具的操作说明。  
> 来源：[DIAL-BAM Method](https://github.com/YOUR_USERNAME/dial-bam-method)

---

## 一、需要复用的文件

| 文件 | 类型 | 说明 |
|------|------|------|
| `docs/BAM.md` | 方法论 | 通用，可直接复用 |
| `BAM-追溯矩阵.html` | 工具 | **通用**，无需修改，读取同目录下的 JSON |
| `BAM-工作流检查清单.md` | 模板 | **通用**，可直接复用 |
| `BAM-追溯矩阵.json` | 数据 | **项目专属**，需按新项目重写；用 `BAM-追溯矩阵-模板.json` 初始化 |

---

## 二、导入步骤

### 步骤 1：复制文件到新项目

在新项目的 `documents/` 下创建 `tools/` 目录，复制以下文件：

```
新项目/
├── documents/
│   ├── BAM.md                    ← 从 docs/BAM.md 复制
│   └── tools/
│       ├── BAM-追溯矩阵.html     ← 复制（无需改）
│       ├── BAM-追溯矩阵.json     ← 用模板新建
│       ├── BAM-工作流检查清单.md ← 复制
│       └── BAM-导入指南.md       ← 复制（本文件）
```

### 步骤 2：用模板初始化追溯矩阵

将 `BAM-追溯矩阵-模板.json` 复制为 `BAM-追溯矩阵.json`，按新项目填写：

1. **meta**：项目名称、描述、更新日期
2. **L1**：一级业务域（至少 1 个）
3. **L2**：二级模块，每个需关联 `L1`
4. **requirements**：需求清单，关联 `L1`、`L2`、`epic`
5. **epics**：Epic 划分，关联 `reqs`、`L2`
6. **stories**：User Story，关联 `epic`、`L3`
7. **L3**：三级业务动作，关联 `L2`、`L4`

### 步骤 3：在 README 中引用

在新项目 README 的文档列表中加入：

```markdown
| [BAM 融合方法论](documents/BAM.md) | BMAD + 业务架构融合方法 |
| [BAM 追溯矩阵](documents/tools/BAM-追溯矩阵.html) | 需求追溯可视化 |
| [BAM 工作流检查清单](documents/tools/BAM-工作流检查清单.md) | 各 Phase 自检 |
```

---

## 三、JSON 数据结构说明

### 3.1 字段约定

| 顶层 key | 说明 | 必填 |
|----------|------|------|
| meta | 元信息：name, version, updated, description | ✓ |
| L1 | 一级业务域：id, name, desc | ✓ |
| L2 | 二级模块：id, name, route(可选), L1 | ✓ |
| requirements | 需求：id, name, priority, L1[], L2[], epic | ✓ |
| epics | Epic：id, name, reqs[], L2[] | ✓ |
| stories | Story：id, epic, name, L3[] | ✓ |
| L3 | 三级动作：id, name, L2, L4[] | ✓ |

### 3.2 ID 规范建议

- **L1**：`L1-01`、`L1-02` …
- **L2**：`L2-01`、`L2-02` …
- **L3**：`L3-XX-YY`（XX=所属 L2 编号，YY=序号）
- **REQ**：按项目约定，如 `REQ-001`、`REQ-FE1` …
- **Epic**：`EPIC-1`、`EPIC-2` …
- **Story**：`S1.1`、`S1.2` …

### 3.3 引用一致性

- `requirements.L1`、`requirements.L2` 中的 ID 必须存在于 `L1`、`L2`
- `requirements.epic` 必须存在于 `epics`
- `stories.epic` 必须存在于 `epics`
- `stories.L3`、`L3.L2` 中的 ID 必须存在于 `L3`、`L2`

---

## 四、Excel 导入格式

BAM 追溯矩阵支持从 Excel（.xlsx / .xls）导入，需按 **Sheet 名称** 组织数据，首行为表头：

| Sheet 名称 | 列（表头） | 说明 |
|------------|------------|------|
| **L1** | id, name, desc | 一级业务域 |
| **L2** | id, name, route, L1 | 二级模块，L1 为关联的 L1 ID |
| **L3** | id, name, L2, L4 | 三级动作，L4 可逗号分隔多个步骤 |
| **requirements** | id, name, priority, L1, L2, epic | L1、L2 可逗号分隔多个 ID |
| **epics** | id, name, reqs, L2 | reqs、L2 可逗号分隔 |
| **stories** | id, epic, name, L3 | L3 可逗号分隔 |

表头支持中英文（如 id/编号、name/名称）。多值字段（L1、L2、L4、reqs、L3）用逗号或中文逗号分隔。

---

## 五、打开追溯矩阵工具

在 `tools` 目录下执行：

```bash
npx serve . -p 3789
```

浏览器访问：`http://localhost:3789/BAM-追溯矩阵.html`

> 因需通过 HTTP 加载 JSON，建议使用本地服务打开。

---

## 六、渐进式填充建议

| 阶段 | 建议填充内容 |
|------|--------------|
| **Phase 1 完成后** | meta、L1 |
| **Phase 2 完成后** | L2、requirements（含 L1/L2 映射） |
| **Phase 3 完成后** | epics、stories、L3（含 L4） |
| **持续** | 随需求变更更新 JSON |

---

*导入指南随 DIAL-BAM Method 迭代更新*
