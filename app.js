const wechatSources = {
  access: "https://developers.weixin.qq.com/miniprogram/introduction/",
  rules: "https://developers.weixin.qq.com/miniprogram/product/",
  reject: "https://developers.weixin.qq.com/miniprogram/product/reject.html",
  quickstart: "https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/",
  config: "https://developers.weixin.qq.com/miniprogram/dev/framework/config.html",
  wxml: "https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/",
  storage: "https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorageSync.html",
  request: "https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html",
  network: "https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html",
  login: "https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html",
  cloud: "https://developers.weixin.qq.com/miniprogram/dev/wxcloudservice/wxcloud/basis/getting-started.html",
  mp: "https://mp.weixin.qq.com/"
};

const wechatLessons = [
  {
    id: "account-01",
    track: "申请认证",
    title: "申请小程序账号：先选对主体",
    time: "20 分钟",
    summary: "先去微信公众平台注册小程序账号，关键不是点按钮，而是选主体。主体会影响认证、支付、类目、能力和后续迁移成本。",
    goals: ["知道从 mp.weixin.qq.com 进入注册", "能区分个人、企业、个体工商户、政府/媒体/其他组织", "知道主体信息确认后不要随便填错"],
    why: "小程序上线的第一性问题是“谁对这个服务负责”。主体选错，后面认证、支付、类目、审核都会被卡。",
    impact: "用户看到的是可信主体提供的服务；你这边少走账号重建、主体不符、资质补交的弯路。",
    caseTitle: "操作清单：注册前准备",
    caseGoal: "注册前把邮箱、主体资料、管理员微信、类目方向准备好。",
    steps: ["打开微信公众平台，点击“立即注册”。", "账号类型选择“小程序”。", "填写未注册过公众平台/开放平台/企业号且未绑定个人号的邮箱。", "邮箱激活后继续填写主体和管理员信息。", "确认主体类型和主体资料后再提交。"],
    files: [
      {
        name: "register-checklist.md",
        lang: "md",
        code: `# 小程序注册前清单

- 入口：https://mp.weixin.qq.com/
- 账号类型：小程序
- 邮箱：未注册过公众平台、开放平台、企业号，且未绑定个人微信
- 主体：个人 / 企业 / 个体工商户 / 政府 / 媒体 / 其他组织
- 管理员：实名微信号，可长期接收扫码确认
- 类目方向：先确认业务是否允许个人主体
- 风险：主体资料提交前务必核对，后续变更成本高`
      }
    ],
    checklist: ["邮箱可正常收激活邮件", "主体类型与真实经营主体一致", "管理员微信能扫码确认"],
    sources: ["access", "mp"]
  },
  {
    id: "account-02",
    track: "申请认证",
    title: "认证、类目与备案：决定能不能上线",
    time: "25 分钟",
    summary: "企业主体可选择对公打款或微信认证；政府、媒体、其他组织必须认证；个人主体暂不支持微信认证。类目和资质要和真实功能一致。",
    goals: ["知道哪些主体必须认证", "知道微信认证入口", "知道类目、资质、备案要先于审核准备"],
    why: "审核看的不是代码炫不炫，而是主体、类目、资质、内容是否匹配。能力不匹配，开发完也可能提审失败。",
    impact: "用户能使用合规服务；开发者不会做完才发现支付、交易、教育、医疗等能力用不了。",
    caseTitle: "操作清单：认证与类目判断",
    caseGoal: "用一页表判断自己的小程序是否需要认证、资质或备案。",
    steps: ["登录小程序后台。", "进入“设置 - 基本设置 - 微信认证 - 详情”。", "按主体类型完成认证或主体验证。", "完善名称、头像、介绍和服务类目。", "按类目补充资质；涉及备案的按后台提示完成备案。"],
    files: [
      {
        name: "qualification-check.md",
        lang: "md",
        code: `# 认证与资质判断

| 项目 | 判断 |
| --- | --- |
| 个人主体 | 暂不支持微信认证，能力和类目受限 |
| 企业/个体工商户 | 可对公打款验证，也可微信认证 |
| 政府/媒体/其他组织 | 必须微信认证 |
| 微信支付 | 通常要求已认证小程序 |
| 服务类目 | 必须和小程序实际功能一致 |
| 特殊行业 | 提前准备许可证、备案、授权材料 |
| 审核风险 | 类目不符、资质缺失、名称/简介误导用户 |`
      }
    ],
    checklist: ["认证入口能找到", "类目与实际功能一致", "特殊行业资质已准备"],
    sources: ["access", "rules"]
  },
  {
    id: "account-03",
    track: "申请认证",
    title: "开发前准备：AppID、成员、域名",
    time: "20 分钟",
    summary: "注册后先把开发者、体验者、AppID、服务器域名配置好。否则代码能写，但真机、联调、请求和提审会被拦住。",
    goals: ["会获取 AppID", "会添加项目成员和体验成员", "知道正式请求必须配置 HTTPS 合法域名"],
    why: "开发前准备解决的是协作和环境问题。没有 AppID 是游客项目，没有成员权限不能上传，没有域名配置真机请求容易失败。",
    impact: "团队能正常联调；用户在正式版里不会遇到开发工具能请求、手机不能请求的问题。",
    caseTitle: "操作清单：开发环境开工",
    caseGoal: "把开发者工具和小程序后台连起来。",
    steps: ["后台进入“设置 - 开发设置”获取 AppID。", "后台进入“用户身份 - 成员管理”添加开发者和体验者。", "开发者工具创建项目时填入 AppID。", "需要后端接口时，在“开发设置 - 服务器域名”配置 HTTPS 域名。"],
    files: [
      {
        name: "dev-prep.md",
        lang: "md",
        code: `# 开发前准备

- AppID：小程序后台 -> 设置 -> 开发设置
- 开发者：小程序后台 -> 用户身份 -> 成员管理
- 体验者：用于扫码体验开发版/体验版
- request 域名：必须是 HTTPS 域名，不能用 localhost
- 开发工具：创建项目时填 AppID，不建议长期用测试号开发正式项目
- 后端密钥：AppSecret 只放服务端，不放小程序端`
      }
    ],
    checklist: ["开发者工具能用 AppID 打开项目", "开发者有上传权限", "接口域名已配置并有有效证书"],
    sources: ["access", "network", "quickstart"]
  },
  {
    id: "review-01",
    track: "提审发布",
    title: "上传代码与提交审核",
    time: "25 分钟",
    summary: "开发者工具上传代码后，管理员在小程序后台的版本管理里提交审核。审核不是自动发布，审核通过后还要手动发布。",
    goals: ["知道开发版、审核版、线上版的区别", "知道上传代码后去后台版本管理提交审核", "知道审核通过后还要发布"],
    why: "很多人以为开发者工具点上传就上线了。实际流程是上传、提交审核、审核通过、手动发布。",
    impact: "用户只会看到正式发布版本；你可以在审核前控制版本说明和测试入口，减少误发。",
    caseTitle: "操作清单：第一次提审",
    caseGoal: "把开发者工具里的代码变成审核版本。",
    steps: ["开发者工具完成预览和真机测试。", "点击“上传”，填写版本号和项目备注。", "登录小程序后台，进入“版本管理”。", "在开发版本中找到刚上传的代码，点击“提交审核”。", "填写功能页面、类目标签、测试账号和审核说明。"],
    files: [
      {
        name: "submit-review.md",
        lang: "md",
        code: `# 提交审核流程

1. 开发者工具：预览 / 真机测试
2. 开发者工具：上传代码
3. 小程序后台：版本管理
4. 开发版本：提交审核
5. 填写审核信息：
   - 重要业务页面
   - 服务类目和标签
   - 测试账号（如需要登录）
   - 审核说明
6. 提交后在审核版本里查看进度`
      }
    ],
    checklist: ["版本号和备注清楚", "重要页面不超过后台要求", "需要登录时准备测试账号"],
    sources: ["access", "rules"]
  },
  {
    id: "review-02",
    track: "提审发布",
    title: "审核材料怎么写更容易过",
    time: "30 分钟",
    summary: "审核最怕“审核员找不到功能、进不去页面、看不懂业务、类目不匹配”。材料要让审核员按最短路径体验核心功能。",
    goals: ["会写审核说明", "会准备测试账号", "知道常见拒审点"],
    why: "审核材料本质是把小程序的真实服务解释清楚。解释不清，审核员只能按风险处理。",
    impact: "用户更快拿到可用版本；开发者减少一轮又一轮的拒审整改。",
    caseTitle: "模板：审核说明",
    caseGoal: "给审核人员一条清晰路径完成体验。",
    steps: ["说明小程序提供什么服务。", "列核心功能路径。", "需要登录时提供测试账号。", "特殊资质或线下服务写明依据。", "避免隐藏入口、空页面、不可用按钮。"],
    files: [
      {
        name: "review-note-template.md",
        lang: "md",
        code: `# 审核说明模板

小程序名称：学习打卡助手
服务说明：为用户提供学习任务记录、打卡统计和学习计划管理。

核心体验路径：
1. 首页 -> 查看今日任务
2. 点击“新增任务” -> 填写标题和预计分钟数 -> 保存
3. 首页点击任务 -> 进入详情 -> 标记完成
4. 记录页 -> 查看完成统计

测试账号：
- 账号：review@example.com
- 密码：仅供审核使用

补充说明：
- 小程序不涉及交易、医疗、金融等特殊服务
- 所有示例内容均为测试数据`
      }
    ],
    checklist: ["首页能体现核心功能", "审核账号可登录", "类目、名称、简介、功能一致"],
    sources: ["access", "rules", "reject"]
  },
  {
    id: "review-03",
    track: "提审发布",
    title: "发布、回滚与上线前检查",
    time: "25 分钟",
    summary: "审核通过后需要手动发布。发布前必须做真机、登录、网络、缓存、异常、隐私和数据隔离检查。",
    goals: ["知道审核通过后手动发布", "会做上线前检查", "知道线上问题要保留回滚预案"],
    why: "上线不是点击发布，而是确认用户真实环境可用。开发工具环境不能代表线上环境。",
    impact: "用户打开小程序时核心路径可用；出问题时能快速止损。",
    caseTitle: "清单：上线前最后 15 分钟",
    caseGoal: "发布前跑完最小检查集。",
    steps: ["关闭开发环境域名校验后真机测试。", "清空缓存跑新用户流程。", "测试登录、请求失败、无数据状态。", "确认隐私、协议、资质和类目。", "审核通过后手动发布并观察。"],
    files: [
      {
        name: "release-checklist.md",
        lang: "md",
        code: `# 上线前检查

- [ ] 真机关闭调试模式后接口正常
- [ ] 新用户首次进入流程正常
- [ ] 登录失败、网络失败有提示
- [ ] 需要测试账号的功能可被审核员访问
- [ ] 名称、头像、简介和服务类目一致
- [ ] 隐私相关弹窗/协议按实际能力配置
- [ ] 线上接口按 user_id 隔离数据
- [ ] 审核通过后手动点击发布
- [ ] 发布后用微信搜索/扫码验证线上版`
      }
    ],
    checklist: ["真机通过", "审核通过后已手动发布", "线上版核心功能可用"],
    sources: ["access", "rules", "network"]
  },
  {
    id: "case-01",
    track: "开发案例",
    title: "案例一：本地版任务清单",
    time: "45 分钟",
    summary: "用 WXML、事件和 Storage 做一个不依赖服务器的任务清单，练会页面、列表、表单和本地持久化。",
    goals: ["会渲染任务列表", "会新增和完成任务", "会用 Storage 保存数据"],
    why: "先做本地版，能把小程序端基本功练完，不被后端环境拖慢。",
    impact: "用户离线也能记录任务；后续迁移到云开发或服务器时数据结构不需要重来。",
    caseTitle: "代码：本地任务 Store",
    caseGoal: "集中管理任务数据，页面只调用方法。",
    steps: ["创建 utils/task-store.js。", "页面 onShow 读取任务。", "表单提交时新增任务。", "点击任务切换完成状态。"],
    files: [
      {
        name: "utils/task-store.js",
        lang: "js",
        code: `const KEY = "study_tasks";

export function getTasks() {
  return wx.getStorageSync(KEY) || [];
}

export function setTasks(tasks) {
  wx.setStorageSync(KEY, tasks);
}

export function addTask(title) {
  const task = {
    id: Date.now(),
    title,
    done: false,
    createdAt: Date.now()
  };
  setTasks([task, ...getTasks()]);
  return task;
}

export function toggleTask(id) {
  const tasks = getTasks().map((task) => {
    if (task.id !== id) return task;
    return { ...task, done: !task.done };
  });
  setTasks(tasks);
  return tasks;
}`
      },
      {
        name: "pages/index/index.wxml",
        lang: "xml",
        code: `<view class="page">
  <input value="{{title}}" bindinput="onTitleInput" placeholder="输入任务" />
  <button bindtap="createTask">新增</button>

  <view wx:for="{{tasks}}" wx:key="id" data-id="{{item.id}}" bindtap="toggleTask">
    <text>{{item.done ? '已完成' : '未完成'}}</text>
    <text>{{item.title}}</text>
  </view>
</view>`
      }
    ],
    checklist: ["新增后列表立即更新", "重启后数据仍在", "Storage 不保存敏感信息"],
    sources: ["wxml", "storage"]
  },
  {
    id: "case-02",
    track: "开发案例",
    title: "案例二：云开发版任务清单",
    time: "60 分钟",
    summary: "用微信云开发数据库保存任务，不自建服务器也能做到多设备同步。",
    goals: ["会初始化云开发", "会新增和查询云数据库", "知道数据库权限要按用户隔离"],
    why: "云开发适合小程序 MVP，省掉域名、证书、服务器部署，把精力放在业务验证上。",
    impact: "用户换设备也能看到任务；开发者上线成本更低。",
    caseTitle: "代码：tasks 集合读写",
    caseGoal: "任务写入云数据库并从云数据库读取。",
    steps: ["开通云开发环境。", "创建 tasks 集合。", "app.js 初始化 wx.cloud。", "页面查询和新增任务。", "配置数据库权限，避免所有人读写所有数据。"],
    files: [
      {
        name: "app.js",
        lang: "js",
        code: `App({
  onLaunch() {
    wx.cloud.init({
      env: "your-env-id",
      traceUser: true
    });
  }
});`
      },
      {
        name: "pages/index/index.js",
        lang: "js",
        code: `const db = wx.cloud.database();

Page({
  data: {
    tasks: []
  },
  async onShow() {
    const res = await db.collection("tasks")
      .orderBy("createdAt", "desc")
      .get();
    this.setData({ tasks: res.data });
  },
  async addTask(title) {
    await db.collection("tasks").add({
      data: {
        title,
        done: false,
        createdAt: Date.now()
      }
    });
    this.onShow();
  }
});`
      }
    ],
    checklist: ["envId 已替换", "集合权限按用户隔离", "真机能读写数据"],
    sources: ["cloud"]
  },
  {
    id: "case-03",
    track: "开发案例",
    title: "案例三：云服务器版接口",
    time: "70 分钟",
    summary: "用自有服务端提供任务 API。适合已有后端、复杂权限、跨端复用或需要接企业内部系统的场景。",
    goals: ["会封装 wx.request", "知道正式域名必须 HTTPS", "知道服务端按用户隔离数据"],
    why: "自有服务端比云开发重，但数据、权限、系统集成都更可控。",
    impact: "用户获得稳定的跨端服务；开发者需要承担证书、域名、部署和安全责任。",
    caseTitle: "代码：小程序请求封装 + 服务端 API",
    caseGoal: "小程序调用 HTTPS 接口获取任务列表。",
    steps: ["部署 HTTPS API 域名。", "小程序后台配置 request 合法域名。", "小程序封装 request。", "服务端校验 session 并按 user_id 返回数据。"],
    files: [
      {
        name: "miniprogram/utils/request.js",
        lang: "js",
        code: `const BASE_URL = "https://api.example.com";

export function request({ url, method = "GET", data }) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: BASE_URL + url,
      method,
      data,
      header: {
        "content-type": "application/json",
        "x-session": wx.getStorageSync("session") || ""
      },
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data);
        } else {
          reject(new Error(res.data?.message || "请求失败"));
        }
      },
      fail: reject
    });
  });
}`
      },
      {
        name: "server/routes/tasks.js",
        lang: "js",
        code: `router.get("/tasks", requireSession, async (ctx) => {
  const tasks = await db.tasks.findMany({
    userId: ctx.user.id
  });
  ctx.body = { tasks };
});`
      }
    ],
    checklist: ["HTTPS 证书有效", "后台已配置 request 域名", "接口不返回其他用户数据"],
    sources: ["request", "network"]
  },
  {
    id: "case-04",
    track: "开发案例",
    title: "案例四：微信登录换业务 session",
    time: "55 分钟",
    summary: "小程序端调用 wx.login 拿 code，服务端用 code2Session 换 openid，再签发自己的业务 session。",
    goals: ["知道 code 只能用一次", "知道 session_key 不能下发到小程序", "会保存业务 session"],
    why: "微信登录只证明“这个微信用户是谁”，业务权限仍要由你的服务端管理。",
    impact: "用户免账号密码登录；开发者不会把 AppSecret 或 session_key 暴露到小程序端。",
    caseTitle: "代码：登录流程",
    caseGoal: "前端拿 code，后端换 openid，返回业务 session。",
    steps: ["小程序端 wx.login。", "把 code 发给服务端。", "服务端请求 code2Session。", "服务端签发业务 session。", "小程序后续请求带 x-session。"],
    files: [
      {
        name: "miniprogram/utils/auth.js",
        lang: "js",
        code: `import { request } from "./request";

export function login() {
  return new Promise((resolve, reject) => {
    wx.login({
      success: async ({ code }) => {
        try {
          const data = await request({
            url: "/auth/wechat-login",
            method: "POST",
            data: { code }
          });
          wx.setStorageSync("session", data.session);
          resolve(data.user);
        } catch (error) {
          reject(error);
        }
      },
      fail: reject
    });
  });
}`
      },
      {
        name: "server/routes/auth.js",
        lang: "js",
        code: `router.post("/auth/wechat-login", async (ctx) => {
  const { code } = ctx.request.body;
  const wxSession = await wechatCode2Session(code);
  const user = await upsertUserByOpenid(wxSession.openid);
  const session = signBusinessSession({ userId: user.id });

  ctx.body = {
    session,
    user: { id: user.id, nickname: user.nickname }
  };
});`
      }
    ],
    checklist: ["AppSecret 只在服务端", "session_key 不返回前端", "业务接口校验 x-session"],
    sources: ["login"]
  }
];

const STORAGE_KEY = "ai-longge-tutorial-progress-v1";
const COURSE_NAMES = {
  wechat: "微信小程序",
  codex: "Codex",
  workbuddy: "WorkBuddy"
};
const COURSE_GROUPS = {
  codex: { basic: "基础篇", advanced: "进阶篇", practice: "实战案例" }
};
const state = {
  course: "codex",
  selected: {
    wechat: wechatLessons[0].id,
    codex: "chapter-1",
    workbuddy: "chapter-1"
  },
  query: { wechat: "", codex: "", workbuddy: "" },
  progress: readProgress(),
  lastView: null
};

const toast = document.querySelector("#toast");
const staticLessonElements = {
  codex: [...document.querySelectorAll('[data-course="codex"][data-lesson-id]')],
  workbuddy: [...document.querySelectorAll('[data-course="workbuddy"][data-lesson-id]')]
};

function readProgress() {
  const empty = { wechat: new Set(), codex: new Set(), workbuddy: new Set() };
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    Object.keys(empty).forEach((course) => {
      if (Array.isArray(saved[course])) empty[course] = new Set(saved[course]);
    });
  } catch (error) {
    console.warn("学习进度读取失败，将使用空进度。", error);
  }
  return empty;
}

function saveProgress() {
  const serializable = Object.fromEntries(
    Object.entries(state.progress).map(([course, values]) => [course, [...values]])
  );
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(serializable));
  } catch (error) {
    showToast("当前浏览器无法保存学习进度");
  }
}

function getCourseItems(course) {
  if (course === "wechat") {
    return wechatLessons.map((lesson, index) => ({
      id: lesson.id,
      index: index + 1,
      title: lesson.title,
      group: lesson.track,
      searchText: `${lesson.title} ${lesson.summary} ${lesson.caseTitle} ${lesson.goals.join(" ")} ${lesson.steps.join(" ")}`.toLowerCase(),
      lesson
    }));
  }

  return staticLessonElements[course].map((element, index) => {
    const titleElement = element.querySelector("h3, h2");
    const title = titleElement?.textContent.trim() || `第 ${index + 1} 章`;
    let group = element.dataset.type ? COURSE_GROUPS.codex[element.dataset.type] : null;
    if (!group) group = element.querySelector(".chapter-type")?.textContent.trim() || "课程";
    return {
      id: element.dataset.lessonId,
      index: index + 1,
      title,
      group,
      searchText: `${element.dataset.keywords || ""} ${element.textContent}`.toLowerCase(),
      element
    };
  });
}

function getFilteredItems(course) {
  const query = state.query[course].trim().toLowerCase();
  const items = getCourseItems(course);
  return query ? items.filter((item) => item.searchText.includes(query)) : items;
}

function routeHref(course, lessonId) {
  return `#/${course}/${lessonId}`;
}

function parseRoute() {
  const raw = location.hash.replace(/^#\/?/, "");
  if (!raw) return { course: "codex", lessonId: "chapter-1", canonical: "#/codex" };

  const [course, lessonId, extra] = raw.split("/");
  if (course === "about" && !lessonId && !extra) return { course: "about", canonical: "#/about" };
  if (!COURSE_NAMES[course] || extra) return null;

  const items = getCourseItems(course);
  if (lessonId && !items.some((item) => item.id === lessonId)) return null;
  return {
    course,
    lessonId: lessonId || items[0].id,
    canonical: lessonId ? routeHref(course, lessonId) : `#/${course}`
  };
}

function normalizeAndRenderRoute() {
  let route = parseRoute();
  if (!route) {
    history.replaceState(null, "", "#/codex");
    route = { course: "codex", lessonId: "chapter-1", canonical: "#/codex" };
  } else if (!location.hash) {
    history.replaceState(null, "", route.canonical);
  }
  renderRoute(route);
}

function renderRoute(route) {
  document.querySelectorAll("[data-view]").forEach((view) => {
    view.hidden = view.dataset.view !== route.course;
  });
  document.querySelectorAll("[data-nav-course]").forEach((link) => {
    const active = link.dataset.navCourse === route.course;
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });

  if (route.course === "about") {
    document.title = "关于我 · AI卷王龙哥教程站";
    focusViewHeading("about");
    state.lastView = "about";
    return;
  }

  state.course = route.course;
  state.selected[route.course] = route.lessonId;
  renderCourse(route.course, route.lessonId);
  document.title = `${COURSE_NAMES[route.course]} · AI卷王龙哥教程站`;
  focusViewHeading(route.course);
  state.lastView = route.course;
}

function focusViewHeading(viewName) {
  if (state.lastView === viewName) return;
  const heading = document.querySelector(`[data-view="${viewName}"] h1`);
  heading?.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "auto" });
}

function renderCourse(course, selectedId) {
  const filtered = getFilteredItems(course);
  const hasResults = filtered.length > 0;
  const empty = document.querySelector(`[data-empty="${course}"]`);
  if (empty) empty.hidden = hasResults;

  renderNavigation(course, selectedId, filtered);
  renderProgress(course);

  if (course === "wechat") {
    const view = document.querySelector("#wechatLessonView");
    view.hidden = !hasResults;
    if (hasResults) renderWechatLesson(selectedId);
  } else {
    staticLessonElements[course].forEach((element) => {
      element.hidden = !hasResults || element.dataset.lessonId !== selectedId;
    });
    document.querySelectorAll(`[data-view="${course}"] .course-supplement`).forEach((section) => {
      section.hidden = !hasResults;
    });
    syncStaticProgress(course);
  }
}

function renderNavigation(course, selectedId, items = getFilteredItems(course)) {
  const groups = [];
  items.forEach((item) => {
    let group = groups.find((entry) => entry.name === item.group);
    if (!group) {
      group = { name: item.group, items: [] };
      groups.push(group);
    }
    group.items.push(item);
  });

  const markup = groups.map((group) => `
    <section class="nav-group">
      <p>${escapeHtml(group.name)}</p>
      ${group.items.map((item) => {
        const done = state.progress[course].has(item.id);
        const current = item.id === selectedId;
        return `<a class="chapter-link ${current ? "active" : ""}" href="${routeHref(course, item.id)}" ${current ? 'aria-current="page"' : ""}>
          <span class="chapter-index">${String(item.index).padStart(2, "0")}</span>
          <span>${escapeHtml(item.title)}</span>
          <i class="done-indicator ${done ? "done" : ""}" aria-label="${done ? "已完成" : "未完成"}"></i>
        </a>`;
      }).join("")}
    </section>
  `).join("");

  document.querySelectorAll(`[data-course-nav="${course}"], [data-mobile-nav="${course}"]`).forEach((nav) => {
    nav.innerHTML = markup || '<p class="nav-empty">没有匹配章节</p>';
  });
}

function renderProgress(course) {
  const items = getCourseItems(course);
  const total = items.length;
  const validIds = new Set(items.map((item) => item.id));
  const done = [...state.progress[course]].filter((id) => validIds.has(id)).length;
  const percent = total ? Math.round((done / total) * 100) : 0;
  const container = document.querySelector(`[data-progress="${course}"]`);
  if (!container) return;
  container.querySelector("strong").textContent = `${done} / ${total}`;
  container.querySelector("i").style.width = `${percent}%`;
}

function renderWechatLesson(lessonId) {
  const lesson = wechatLessons.find((item) => item.id === lessonId) || wechatLessons[0];
  const lessonIndex = wechatLessons.findIndex((item) => item.id === lesson.id) + 1;
  const sourceLinks = lesson.sources.map((key) => {
    const url = wechatSources[key];
    return `<a href="${url}" target="_blank" rel="noopener noreferrer">${escapeHtml(key)} · 官方来源</a>`;
  }).join("");
  const article = document.querySelector("#wechatLessonView");
  article.dataset.lessonId = lesson.id;
  article.dataset.keywords = `${lesson.track} ${lesson.title}`;
  article.innerHTML = `
    <header class="lesson-head">
      <div>
        <div class="badge-row"><span class="badge">${escapeHtml(lesson.track)}</span><span class="badge alt">第 ${lessonIndex} 课 · ${escapeHtml(lesson.time)}</span></div>
        <h2>${escapeHtml(lesson.title)}</h2>
        <p class="lesson-summary">${escapeHtml(lesson.summary)}</p>
      </div>
      <label class="complete-toggle"><input type="checkbox" data-progress-toggle data-course="wechat" data-lesson-id="${lesson.id}" ${state.progress.wechat.has(lesson.id) ? "checked" : ""}> 已完成</label>
    </header>
    <div class="lesson-grid">
      <div>
        <section class="content-section"><h3>本篇重点</h3><ul>${lesson.goals.map((goal) => `<li>${escapeHtml(goal)}</li>`).join("")}</ul></section>
        <section class="content-section"><h3>为什么要这样做</h3><p>${escapeHtml(lesson.why)}</p><div class="callout"><strong>对用户的影响</strong>${escapeHtml(lesson.impact)}</div></section>
        <section class="content-section case-box"><div class="case-header"><h3>${escapeHtml(lesson.caseTitle)}</h3><p>${escapeHtml(lesson.caseGoal)}</p></div>
          ${lesson.files.map((file) => `<figure class="code-block"><figcaption><span>${escapeHtml(file.name)}</span><button class="copy-btn" type="button" data-copy>复制代码</button></figcaption><pre><code class="language-${escapeHtml(file.lang)}">${escapeHtml(file.code)}</code></pre></figure>`).join("")}
        </section>
      </div>
      <aside class="side-panel" aria-label="本课辅助信息">
        <section><h3>操作步骤</h3><ol>${lesson.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol></section>
        <section><h3>验收标准</h3><ul>${lesson.checklist.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></section>
        <section class="source-list"><h3>官方来源</h3>${sourceLinks}</section>
      </aside>
    </div>`;
}

function syncStaticProgress(course) {
  staticLessonElements[course].forEach((article) => {
    const input = article.querySelector("input[data-done], input[data-chapter]");
    if (!input) return;
    input.dataset.progressToggle = "";
    input.dataset.course = course;
    input.dataset.lessonId = article.dataset.lessonId;
    input.checked = state.progress[course].has(article.dataset.lessonId);
  });
}

function handleSearch(event) {
  const course = event.target.dataset.search;
  state.query[course] = event.target.value;
  const matches = getFilteredItems(course);
  const current = state.selected[course];
  if (matches.length && !matches.some((item) => item.id === current)) {
    location.hash = routeHref(course, matches[0].id);
    return;
  }
  renderCourse(course, current);
}

function handleProgressChange(event) {
  const input = event.target.closest("[data-progress-toggle]");
  if (!input) return;
  const course = input.dataset.course;
  const lessonId = input.dataset.lessonId;
  if (!state.progress[course] || !lessonId) return;
  if (input.checked) state.progress[course].add(lessonId);
  else state.progress[course].delete(lessonId);
  saveProgress();
  renderProgress(course);
  renderNavigation(course, state.selected[course]);
}

function enhanceCopyControls() {
  document.querySelectorAll(".prompt").forEach((prompt) => {
    if (prompt.parentElement.querySelector('[data-copy-prompt]')) return;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "copy-btn prompt-copy";
    button.dataset.copyPrompt = "";
    button.textContent = "复制提示词";
    prompt.insertAdjacentElement("afterend", button);
  });
  document.querySelectorAll("button[data-copy]").forEach((button) => {
    button.type = "button";
  });
}

async function handleCopy(event) {
  const button = event.target.closest("[data-copy], [data-copy-prompt]");
  if (!button) return;
  let text = "";
  if (button.hasAttribute("data-copy-prompt")) {
    text = button.previousElementSibling?.textContent || "";
  } else {
    const container = button.closest("figure, .case-box, .case-panel, .template-grid article, .content-section");
    text = container?.querySelector("pre code, .prompt")?.textContent || "";
  }
  if (!text.trim()) {
    showToast("没有找到可复制内容");
    return;
  }
  try {
    await copyText(text.trim());
    const original = button.textContent;
    button.textContent = "已复制";
    showToast("内容已复制");
    setTimeout(() => { button.textContent = original; }, 1200);
  } catch (error) {
    showToast("复制失败，请手动选择内容");
  }
}

async function copyText(text) {
  if (navigator.clipboard?.writeText && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch (error) {
      // Clipboard 权限被拒绝时继续使用兼容方案。
    }
  }
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  textarea.remove();
  if (!copied) throw new Error("copy command failed");
}

let toastTimer;
function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.hidden = false;
  toastTimer = setTimeout(() => { toast.hidden = true; }, 1800);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function closeMobileMenus() {
  document.querySelectorAll(".mobile-chapter-menu[open]").forEach((details) => {
    details.open = false;
  });
}

document.querySelectorAll("[data-search]").forEach((input) => {
  input.addEventListener("input", handleSearch);
});
document.addEventListener("change", handleProgressChange);
document.addEventListener("click", handleCopy);
window.addEventListener("hashchange", () => {
  closeMobileMenus();
  normalizeAndRenderRoute();
});

enhanceCopyControls();
normalizeAndRenderRoute();
