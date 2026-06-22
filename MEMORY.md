# MEMORY.md

## 项目概况

- 项目名：AI卷王龙哥教程站。
- 初始化日期：2026-06-22。
- 目标：将微信小程序、Codex、WorkBuddy 三个教程合并为一个统一教程站，并增加独立的“关于我”栏目。
- 工作区：`/Users/longge/Documents/教程`。

## 内容来源

- 微信小程序教程：`/Users/longge/Documents/微信小程序教程`，共 10 课。
- Codex 课程：`/Users/longge/Documents/Codex课程`，共 9 章。
- WorkBuddy 课程：`/Users/longge/Documents/WorkBuddy课程`，共 9 章。
- 三个源目录只读使用，合并过程中不修改源项目。

## 架构与产品决策

- 新站使用原生 HTML、CSS、JavaScript，无第三方依赖；原因是课程内容以静态展示和轻交互为主；对用户的影响是加载快、部署简单、后续维护门槛低。
- 网站采用单站四视图和哈希路由：微信小程序、Codex、WorkBuddy、关于我；2026-06-22 起根地址默认进入 Codex 栏目。
- 三门课程使用统一视觉与交互，完整保留正文、代码示例、提示词、资料链接、搜索、复制和学习进度。
- 学习进度统一保存到 `ai-longge-tutorial-progress-v1`，按课程隔离；不迁移旧站进度，因为不同域名无法读取对方的 localStorage。
- 作者资料集中到“关于我”，服务范围使用 AI 培训、AI 获客、自动化咨询、工作流/智能体方案定制，不展示账号代充。
- Vercel 构建只发布站点资源，不公开 `AGENTS.md`、`MEMORY.md`、Git 元数据或本机 Vercel 绑定。
- 2026-06-22：统一站点静态资源使用版本查询参数；原因是本地验证时相同端口曾缓存旧教程站的 `app.js`，导致新 HTML 加载旧逻辑；对用户的影响是发布更新后能稳定加载匹配的样式和脚本。

## 交付边界

- 2026-06-22：用户已授权将统一教程站部署到 Vercel 生产环境；三个旧站保持不变。
- Vercel 登录邮箱仅用于部署账号识别，不作为公开联系方式展示；凭据由本机 Vercel CLI 管理，项目文件和记忆不记录凭据值。
- 2026-06-22：用户授权将项目代码提交并推送到 GitHub 仓库 `https://github.com/free-developer-king/jiaocheng.git`；远端在首次推送前为空仓库。

## 实施记录

- 2026-06-22：完成统一教程站，课程数量为微信小程序 10 课、Codex 9 章、WorkBuddy 9 章；四个栏目使用哈希深链，三门课程共享搜索、章节导航、代码复制和独立学习进度。
- 2026-06-22：本地浏览器回归通过默认路由、章节深链、无效路由回退、前进后退、搜索筛选、进度刷新恢复和关于我栏目；1280px、768px、375px 均无横向溢出。
- 2026-06-22：最终构建目录只包含 `index.html`、`styles.css`、`app.js`，未包含项目约束、记忆、Git 或 Vercel 本机元数据；首次实现阶段未执行线上部署。
- 2026-06-22：用户要求从“关于我”删除个人网站入口，保留飞书使用说明书和免费 AI 自媒体星球。
- 2026-06-22：统一教程站已部署到 Vercel 生产环境；项目初始名为 `ai-longge-tutorial`，后按用户要求重命名为 `ailongge`。当前正式地址为 https://ailongge.vercel.app，旧地址 https://ai-longge-tutorial.vercel.app 作为兼容域名保留。
- Vercel `link` 在搜索项目阶段长时间无响应，未生成本地绑定；后续更新使用 `npx vercel deploy --prod --yes --project ailongge`。登录凭据由本机 Vercel CLI 管理，不记录凭据值。
- 2026-06-22：用户授权在“关于我”公开微信二维码，源文件位于 `/Users/longge/Desktop/微信5.png`；页面提示访客扫码加微信并备注“网站”。二维码按原始 PNG 部署，避免二次压缩影响识别。
- 2026-06-22：`ailongge.vercel.app` 最初作为 deployment alias 时受项目 SSO 保护并返回 401；最终通过重命名项目并将该域名添加为项目正式域名解决。线上验证根地址默认进入 Codex，二维码原图加载完成且无控制台错误。
- 2026-06-22：根据用户反馈，顶部导航顺序调整为“Codex、微信小程序、WorkBuddy、关于我”；默认栏目和品牌首页入口仍为 Codex。

## 外部资源

- 作者使用说明书：https://my.feishu.cn/wiki/YIFswBb6OiVKv7krz2icROQBniy
- 免费 AI 自媒体星球：https://t.zsxq.com/ZeCzZ
- 统一教程站：https://ailongge.vercel.app
- 兼容地址：https://ai-longge-tutorial.vercel.app
- GitHub 仓库：https://github.com/free-developer-king/jiaocheng

## 待确认

- 暂无。
