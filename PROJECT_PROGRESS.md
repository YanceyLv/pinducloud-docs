# PinduCloud API Docs 项目进度

## 当前状态

- 状态：Base URL 与模型文档更新已提交并推送到远程仓库
- 日期：2026-06-26
- 当前任务：提交并推送当前文档更新

## 本次已完成

- 根据用户提供的当前支持模型列表，更新模型文档和 API 示例模型名。
- 已将模型文档更新推送到 `origin/main`。
- 初始化本地 Git 仓库并准备推送到 `https://github.com/YanceyLv/pinducloud-docs.git`。
- 已将项目主体提交推送到 `origin/main`。
- 最终进度记录提交已保留在本地，等待 GitHub 连接恢复后继续推送。
- 按用户要求移除文档和首页中的指定敏感表述。
- 检查现有 Docusaurus classic 项目结构。
- 创建 PinduCloud API 文档主页面：
  - `intro`
  - `quickstart`
  - `auth`
  - `chat-completions`
  - `images`
  - `models`
  - `errors`
- 统一所有 API 示例 Base URL 为 `https://pinducloud.com.cn/`。
- 所有 API 示例采用 OpenAI Compatible 风格。
- 将 `sidebars.js` 改为显式 API 文档菜单。
- 更新站点标题、导航、页脚和首页，移除默认 Docusaurus 展示文案。
- 更新 README 为 PinduCloud API Docs 项目运行说明。
- 在用户确认后删除 Docusaurus 默认模板文档、示例博客、示例首页组件和示例图片文件。
- 清理模板文件删除后留下的空目录。
- 保持 classic Docusaurus 结构，未引入新依赖。
- 已将 `https://github.com/YanceyLv/pinducloud-docs.git` 克隆到 `E:\pinducloud-docs`。
- 已确认本地分支 `main` 跟踪 `origin/main`，最新本地提交为 `855e8d1 Record model docs push`。
- 本次仅获取项目并更新进度记录，未修改业务文档、配置、依赖或项目架构。
- 已按用户要求将文档、README 和首页示例中的 API Base URL 更新为 `https://pinducloud.com.cn/`。
- 已将 Docusaurus 站点 `url` 更新为 `https://pinducloud.com.cn`，保留 `baseUrl: '/'` 作为站点路径前缀。
- 本次未安装依赖、未删除文件、未修改路由或项目架构。
- 已在模型列表文档中新增 `glm-5.2`。
- 已在 `/v1/models` 响应示例中新增 `glm-5.2`。
- 准备将 Base URL 更新和 `glm-5.2` 模型文档更新提交并推送到 `origin/main`。
- 已创建提交 `8c749e5`，提交信息为 `Update API base URL and add glm-5.2 model`。
- 已将 `main` 推送到 `origin/main`。

## 本次执行命令

- `Get-ChildItem -Force`
- `Get-Content PROJECT_PROGRESS.md -Raw`
- `rg --files`
- `Get-Content sidebars.js -Raw`
- `Get-Content docusaurus.config.js -Raw`
- `Get-Content package.json -Raw`
- `Get-ChildItem docs -Recurse -File`
- `Get-ChildItem blog -Recurse -File`
- `Get-ChildItem static\img -Recurse -File`
- `Remove-Item` 删除用户确认的模板文件
- `Remove-Item` 删除模板文件清理后留下的空目录
- `npm run build`
- `npm.cmd run build`
- `git status --short`
- `git diff --stat`
- `rg` 扫描默认模板文案残留
- `rg` 扫描指定表述残留
- `git init -b main`
- `git -c safe.directory=D:/pindu-docs remote add origin https://github.com/YanceyLv/pinducloud-docs.git`
- `git -c safe.directory=D:/pindu-docs add .`
- `git -c safe.directory=D:/pindu-docs commit -m "Initialize PinduCloud API docs"`
- `git -c safe.directory=D:/pindu-docs push -u origin main`
- `git -c safe.directory=D:/pindu-docs commit -m "Record GitHub push progress"`
- `git -c safe.directory=D:/pindu-docs push`
- `git -c safe.directory=D:/pindu-docs ls-remote origin HEAD`
- `rg` 扫描旧模型名残留
- `git -c safe.directory=D:/pindu-docs commit -m "Update supported model documentation"`
- `git -c safe.directory=D:/pindu-docs push`
- `git clone https://github.com/YanceyLv/pinducloud-docs.git .`
- `git -c safe.directory=E:/pinducloud-docs status --short --branch`
- `git -c safe.directory=E:/pinducloud-docs remote -v`
- `git -c safe.directory=E:/pinducloud-docs log -1 --oneline`
- `Get-Content -Path PROJECT_PROGRESS.md -Encoding UTF8`
- `rg -n "121\\.40\\.161\\.178|http://121\\.40\\.161\\.178|Base URL|baseUrl" README.md docs src docusaurus.config.js PROJECT_PROGRESS.md`
- `git -c safe.directory=E:/pinducloud-docs status --short --branch`
- `apply_patch` 更新 API Base URL 与进度记录
- `rg -n "121\\.40\\.161\\.178|http://121\\.40\\.161\\.178" README.md docs src docusaurus.config.js PROJECT_PROGRESS.md`
- `rg -n "https://pinducloud\\.com\\.cn|baseUrl" README.md docs src docusaurus.config.js PROJECT_PROGRESS.md`
- `git -c safe.directory=E:/pinducloud-docs diff --stat`
- `Test-Path node_modules`
- `Get-Content -Path docs\models.mdx -Encoding UTF8`
- `rg -n "glm-5\\.1|glm-5\\.2|当前支持模型|data" docs\models.mdx PROJECT_PROGRESS.md`
- `apply_patch` 更新模型列表文档和进度记录
- `git -c safe.directory=E:/pinducloud-docs remote -v`
- `git -c safe.directory=E:/pinducloud-docs diff --name-only`
- `apply_patch` 记录提交推送任务
- `rg -n "121\\.40\\.161\\.178|http://121\\.40\\.161\\.178" README.md docs src docusaurus.config.js PROJECT_PROGRESS.md`
- `rg -n "glm-5\\.2" docs\models.mdx PROJECT_PROGRESS.md`
- `git -c safe.directory=E:/pinducloud-docs add PROJECT_PROGRESS.md README.md docs/auth.mdx docs/chat-completions.mdx docs/errors.mdx docs/images.mdx docs/intro.mdx docs/models.mdx docs/quickstart.mdx docusaurus.config.js src/pages/index.js`
- `git -c safe.directory=E:/pinducloud-docs commit -m "Update API base URL and add glm-5.2 model"`
- `git -c safe.directory=E:/pinducloud-docs push origin main`

## 验证结果

- `npm run build`：PowerShell 执行策略拦截 `npm.ps1`，未执行构建。
- `npm.cmd run build`：通过，Docusaurus 已生成 `build` 静态文件目录。
- `git status --short`：当前目录不是 Git 仓库，无法输出 Git 状态。
- `git diff --stat`：当前目录不是 Git 仓库，无法输出 diff 统计。
- 默认模板文案残留扫描：未在 `docs`、`src`、`static`、配置文件和 README 中发现指定模板文案。
- 最终验证：`npm.cmd run build` 退出码为 0，生成 `build` 静态文件目录。
- 本次文案调整验证：`npm.cmd run build` 退出码为 0；指定表述残留扫描无匹配结果。
- 推送前验证：`npm.cmd run build` 退出码为 0。
- Git 推送结果：项目主体提交 `61ddd02` 已成功推送到 `https://github.com/YanceyLv/pinducloud-docs.git`，并设置为跟踪 `origin/main`。
- 后续同步结果：最终进度记录提交推送时连续遇到 `Recv failure: Connection was reset`；只读 `ls-remote` 探测同样失败，判断为当前环境到 GitHub 的连接临时不可用。
- 模型文档调整验证：`npm.cmd run build` 退出码为 0；旧示例模型名残留扫描无匹配结果。
- 模型文档推送结果：`main` 已推送到 `origin/main`，远程提交更新至 `7b09d34`。
- 本次获取验证：仓库已克隆到 `E:\pinducloud-docs`，`origin` 指向 `https://github.com/YanceyLv/pinducloud-docs.git`。
- 本次 Git 状态验证：`main` 已跟踪 `origin/main`，获取后项目代码无额外修改。
- 注意：直接执行 `git status` 会触发 Windows 所有权安全提示；本次验证使用临时 `-c safe.directory=E:/pinducloud-docs`，未修改全局 Git 配置。
- 本次 Base URL 更新验证：旧 IP 地址和旧 HTTP API 地址在文档、首页、配置和进度文件中无残留。
- 本次修改范围验证：仅涉及 README、docs、首页示例、Docusaurus 站点 URL 配置和进度文件。
- 构建验证：本地不存在 `node_modules`，按“不安装新依赖需确认”的规则未执行 `npm.cmd run build`。
- 本次模型更新验证：`glm-5.2` 已出现在模型列表表格和 `/v1/models` 响应示例中。
- 本次模型修改范围验证：模型新增仅修改 `docs/models.mdx` 和 `PROJECT_PROGRESS.md`；工作区同时保留上一轮 Base URL 更新文件。
- 提交推送前验证：旧 Base URL 残留扫描无匹配；`glm-5.2` 已出现在模型列表表格和 `/v1/models` 响应示例中；修改范围为 11 个已确认文件。
- 构建验证：本地不存在 `node_modules`，未安装依赖，未执行 `npm.cmd run build`。
- 推送结果：`main` 已从 `855e8d1` 推送更新到 `8c749e5`。

## 下一步任务清单

- 根据真实模型能力、上下文长度和价格继续补充模型详情。
- 确认 `glm-5.2` 的真实能力、上下文长度、价格和可用区域，并按生产信息补充文档。
- 根据实际鉴权、限流和错误码实现补充更精确的错误说明。
- 如对外正式发布，建议补充服务条款、计费说明和隐私合规说明。
- 建议后续确认 `https://pinducloud.com.cn/` 是否为正式生产 API 入口，并确认是否需要单独的 API 子域名。
- 用户确认本地获取结果后，可按需运行 `npm.cmd install` / `npm.cmd run build` 验证文档站构建；安装或更新依赖前需先确认。

## 风险点

- 当前错误码仍为 OpenAI Compatible 文档示例，需要与 PinduCloud 后端真实错误保持同步。
- 当前 Base URL 已使用 HTTPS，仍需确认域名证书、反向代理、WAF、访问日志和限流策略已按生产标准配置。
- 文档中未写入任何真实 API Key，后续维护时仍需避免密钥进入仓库。
- 当前仓库包含 `package-lock.json`，后续安装依赖时应保持锁文件一致，避免未经确认的依赖升级。
