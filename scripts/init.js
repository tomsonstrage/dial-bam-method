#!/usr/bin/env node

/**
 * 业务分析及软件开发体系 初始化脚本
 * 用法：npx dial-bam-method init
 * 将 docs 和 tools 复制到当前目录的 documents/ 下
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const TARGET = process.cwd();

const COPY_MAP = [
  { src: 'CHANGELOG.md', dest: 'documents/CHANGELOG.md' },
  { src: 'index.html', dest: 'documents/index.html' },
  { src: 'favicon.svg', dest: 'documents/favicon.svg' },
  { src: 'docs/快速开始.md', dest: 'documents/docs/快速开始.md' },
  { src: 'docs/交付件清单.md', dest: 'documents/docs/交付件清单.md' },
  { src: 'docs/常见问题.md', dest: 'documents/docs/常见问题.md' },
  { src: 'docs/反馈与社区.md', dest: 'documents/docs/反馈与社区.md' },
  { src: 'docs/术语表.md', dest: 'documents/docs/术语表.md' },
  { src: 'docs/00-核心理念.md', dest: 'documents/docs/00-核心理念.md' },
  { src: 'docs/01-方法论.md', dest: 'documents/docs/01-方法论.md' },
  { src: 'docs/工具应用.md', dest: 'documents/docs/工具应用.md' },
  { src: 'docs/02-Discovery.md', dest: 'documents/docs/02-Discovery.md' },
  { src: 'docs/03-Insight.md', dest: 'documents/docs/03-Insight.md' },
  { src: 'docs/04-Architecture.md', dest: 'documents/docs/04-Architecture.md' },
  { src: 'docs/05-Launch.md', dest: 'documents/docs/05-Launch.md' },
  { src: 'docs/06-AI增强与裁剪.md', dest: 'documents/docs/06-AI增强与裁剪.md' },
  { src: 'docs/DIAL.md', dest: 'documents/docs/DIAL.md' },
  { src: 'docs/BAM.md', dest: 'documents/docs/BAM.md' },
  { src: 'docs/学习培训体系.md', dest: 'documents/docs/学习培训体系.md' },
  { src: 'docs/AI-Prompt与输出报告.md', dest: 'documents/docs/AI-Prompt与输出报告.md' },
  { src: 'docs/参考框架索引.md', dest: 'documents/docs/参考框架索引.md' },
  { src: 'docs/平台输入与数据入口.md', dest: 'documents/docs/平台输入与数据入口.md' },
  { src: 'docs/平台集成指南.md', dest: 'documents/docs/平台集成指南.md' },
  { src: 'docs/业务流与优化指南.md', dest: 'documents/docs/业务流与优化指南.md' },
  { src: 'docs/参考框架与AI时代.md', dest: 'documents/docs/参考框架与AI时代.md' },
  { src: 'docs/与BMAD的关系.md', dest: 'documents/docs/与BMAD的关系.md' },
  { src: 'docs/内核与延伸.md', dest: 'documents/docs/内核与延伸.md' },
  { src: 'docs/开发计划-需求分析与路线图.md', dest: 'documents/docs/开发计划-需求分析与路线图.md' },
  { src: 'docs/DIAL-BAM方法论演进分析与规划.md', dest: 'documents/docs/DIAL-BAM方法论演进分析与规划.md' },
  { src: 'docs/企业案例-销售线索管理数字化.md', dest: 'documents/docs/企业案例-销售线索管理数字化.md' },
  { src: 'docs/指导文档/README.md', dest: 'documents/docs/指导文档/README.md' },
  { src: 'tools/index.html', dest: 'documents/tools/index.html' },
  { src: 'tools/洞察可视化.html', dest: 'documents/tools/洞察可视化.html' },
  { src: 'tools/DIAL-流程可视化.html', dest: 'documents/tools/DIAL-流程可视化.html' },
  { src: 'tools/业务流可视化.html', dest: 'documents/tools/业务流可视化.html' },
  { src: 'tools/AI-Prompt生成器.html', dest: 'documents/tools/AI-Prompt生成器.html' },
  { src: 'tools/学习培训.html', dest: 'documents/tools/学习培训.html' },
  { src: 'tools/学习培训-课程配置.json', dest: 'documents/tools/学习培训-课程配置.json' },
  { src: 'tools/BAM-追溯矩阵.html', dest: 'documents/tools/BAM-追溯矩阵.html' },
  { src: 'tools/BAM-追溯矩阵-模板.json', dest: 'documents/tools/BAM-追溯矩阵-模板.json' },
  { src: 'tools/BAM-追溯矩阵-示例.json', dest: 'documents/tools/BAM-追溯矩阵-示例.json' },
  { src: 'tools/BAM-追溯矩阵-模板.json', dest: 'documents/tools/BAM-追溯矩阵.json', fromTemplate: true },
  { src: 'tools/商业模式画布.html', dest: 'documents/tools/商业模式画布.html' },
  { src: 'tools/规划看板.html', dest: 'documents/tools/规划看板.html' },
  { src: 'tools/痛点画布.html', dest: 'documents/tools/痛点画布.html' },
  { src: 'tools/Project-Brief.html', dest: 'documents/tools/Project-Brief.html' },
  { src: 'tools/PRD-模板.html', dest: 'documents/tools/PRD-模板.html' },
  { src: 'tools/BML-验证看板.html', dest: 'documents/tools/BML-验证看板.html' },
  { src: 'tools/交付包导出.html', dest: 'documents/tools/交付包导出.html' },
  { src: 'tools/文档阅读.html', dest: 'documents/tools/文档阅读.html' },
  { src: 'tools/BAM-导入指南.md', dest: 'documents/tools/BAM-导入指南.md' },
  { src: 'tools/BAM-工作流检查清单.md', dest: 'documents/tools/BAM-工作流检查清单.md' },
  { src: 'tools/DIAL-规划与任务模板.md', dest: 'documents/tools/DIAL-规划与任务模板.md' },
  { src: 'tools/各模块输入输出规范.md', dest: 'documents/tools/各模块输入输出规范.md' },
  { src: 'tools/schema/dial-bam-schema.json', dest: 'documents/tools/schema/dial-bam-schema.json' },
  { src: 'tools/schema/README.md', dest: 'documents/tools/schema/README.md' },
  { src: 'tools/templates/README.md', dest: 'documents/tools/templates/README.md' },
  { src: 'tools/templates/洞察可视化-模板.json', dest: 'documents/tools/templates/洞察可视化-模板.json' },
  { src: 'tools/templates/痛点画布-模板.json', dest: 'documents/tools/templates/痛点画布-模板.json' },
  { src: 'tools/templates/商业模式画布-模板.json', dest: 'documents/tools/templates/商业模式画布-模板.json' },
  { src: 'tools/templates/Project-Brief-模板.json', dest: 'documents/tools/templates/Project-Brief-模板.json' },
  { src: 'tools/templates/PRD-模板.json', dest: 'documents/tools/templates/PRD-模板.json' },
  { src: 'tools/templates/规划看板-模板.json', dest: 'documents/tools/templates/规划看板-模板.json' },
  { src: 'tools/templates/BML-验证看板-模板.json', dest: 'documents/tools/templates/BML-验证看板-模板.json' },
  { src: 'tools/企业案例-销售线索管理数字化-交付包.json', dest: 'documents/tools/企业案例-销售线索管理数字化-交付包.json' },
];

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function main() {
  const args = process.argv.slice(2);
  const dir = args.find(a => a.startsWith('--directory='));
  const targetBase = dir ? path.resolve(TARGET, dir.split('=')[1]) : TARGET;

  console.log('业务分析及软件开发体系 初始化');
  console.log('目标目录:', targetBase);
  console.log('');

  COPY_MAP.forEach(({ src, dest, fromTemplate }) => {
    const srcPath = path.join(ROOT, src);
    const destPath = path.join(targetBase, dest);
    if (!fs.existsSync(srcPath)) {
      console.warn(`跳过（源不存在）: ${src}`);
      return;
    }
    ensureDir(path.dirname(destPath));
    if (fromTemplate && fs.existsSync(destPath)) {
      console.log(`保留已有: ${dest}`);
      return;
    }
    fs.copyFileSync(srcPath, destPath);
    console.log(`已复制: ${dest}${fromTemplate ? '（从模板）' : ''}`);
  });

  console.log('');
  console.log('完成！下一步：');
  console.log('1. 在 documents 目录运行 npx serve . -p 3789');
  console.log('2. 访问 http://localhost:3789/tools 进入工具中心');
  console.log('3. 阅读 documents/docs/快速开始.md 和 00-核心理念.md 开始');
}

main();
