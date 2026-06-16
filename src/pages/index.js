import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="PinduCloud API Docs"
      description="PinduCloud OpenAI Compatible API 文档">
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.inner}>
            <p className={styles.eyebrow}>OpenAI Compatible API</p>
            <Heading as="h1" className={styles.title}>
              PinduCloud API Docs
            </Heading>
            <p className={styles.subtitle}>
              面向生产环境的 API 文档，覆盖鉴权、Chat、图像生成、模型列表和错误处理。
            </p>
            <div className={styles.actions}>
              <Link className="button button--primary button--lg" to="/docs/intro">
                查看文档
              </Link>
              <Link className="button button--secondary button--lg" to="/docs/quickstart">
                快速开始
              </Link>
            </div>
            <pre className={styles.code}>
              <code>{`curl http://121.40.161.178/v1/chat/completions \\
  -H "Authorization: Bearer $PINDUCLOUD_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"model":"deepseek-v4-flash","messages":[{"role":"user","content":"Hello"}]}'`}</code>
            </pre>
          </div>
        </section>
      </main>
    </Layout>
  );
}
