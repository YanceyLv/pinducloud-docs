# PinduCloud API Docs

PinduCloud 对外 API 文档站，基于 Docusaurus classic 构建，文档接口风格兼容 OpenAI API。

## 本地开发

```bash
npm run start
```

如果 PowerShell 执行策略拦截 `npm.ps1`，可使用：

```bash
npm.cmd run start
```

## 生产构建

```bash
npm run build
```

PowerShell 环境也可使用：

```bash
npm.cmd run build
```

## 文档结构

- `docs/intro.mdx`：首页
- `docs/quickstart.mdx`：快速开始
- `docs/auth.mdx`：API 鉴权
- `docs/chat-completions.mdx`：Chat API
- `docs/images.mdx`：图像生成
- `docs/models.mdx`：模型列表
- `docs/errors.mdx`：错误码

## API Base URL

```text
https://pinducloud.com.cn/
```

维护文档时不要写入真实 API Key、Token 或其他敏感凭据。
