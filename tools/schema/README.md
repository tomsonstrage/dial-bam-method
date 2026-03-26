# DIAL-BAM 数据格式 Schema

> 各工具模块输入/输出的 JSON 结构规范，确保跨工具导入导出兼容。

📄 [各模块输入输出规范](../各模块输入输出规范.md) | [平台输入与数据入口](../../docs/平台输入与数据入口.md)

---

## 一、localStorage 键与 Schema 映射

| localStorage 键 | 工具 | Schema $def |
|-----------------|------|-------------|
| dial-bam-insight | 洞察可视化 | insight |
| dial-bam-pain | 痛点画布 | pain |
| dial-bam-bmc | 商业模式画布 | bmc |
| dial-bam-projectbrief | Project Brief | projectBrief |
| dial-bam-prd | PRD 模板 | prd |
| dial-bam-matrix | BAM 追溯矩阵 | matrix |
| dial-bam-planning | 规划看板 | planning |
| dial-bam-bml | BML 验证看板 | bml |

---

## 二、跨工具数据流

| 流向 | 源输出 | 目标输入 | 字段映射 |
|------|--------|----------|----------|
| 洞察 → 痛点 | insight | pain.pain | 洞察结论汇总 → pain |
| 痛点 → BAM | pain.hypotheses | matrix.requirements | 需求假设 → REQ |
| BAM → Project Brief | matrix.L1 | projectBrief.L1 | 直接映射 |
| BAM → PRD | matrix.L2 | prd.functions | L2 → functions |
| BAM → 规划 | matrix.epics/stories | planning.epics | 直接映射 |
| 规划 → BML | planning.epics[].id | bml.iterations[].scope | Epic/Story ID |

---

## 三、使用方式

### 3.1 工具开发

- 导出 JSON 时，结构应符合 `dial-bam-schema.json` 中对应 $def
- 导入 JSON 时，可忽略未知字段（additionalProperties: true），保留兼容性

### 3.2 校验（可选）

```javascript
// 使用 ajv 等库校验
import Ajv from 'ajv';
import schema from './dial-bam-schema.json';
const ajv = new Ajv();
const validate = ajv.compile(schema);
const valid = validate(yourData);
```

### 3.3 模板

各模块模板位于 `tools/templates/`，与 Schema 结构一致。

---

## 四、交付包格式

```json
{
  "meta": {
    "name": "DIAL-BAM 交付包",
    "version": "1.0",
    "exportedAt": "2025-03-11T00:00:00.000Z",
    "description": "..."
  },
  "data": {
    "dial-bam-insight": { ... },
    "dial-bam-pain": { ... },
    "dial-bam-bmc": { ... },
    "dial-bam-projectbrief": { ... },
    "dial-bam-prd": { ... },
    "dial-bam-matrix": { ... },
    "dial-bam-planning": { ... },
    "dial-bam-bml": { ... }
  }
}
```

---

*Schema 版本：1.0 | 随 DIAL-BAM Method 迭代更新*
