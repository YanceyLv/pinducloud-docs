// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PinduCloud API Docs',
  tagline: 'OpenAI Compatible API for PinduCloud',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://pinducloud.com.cn',
  baseUrl: '/',

  organizationName: 'pinducloud',
  projectName: 'pindu-docs',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'PinduCloud API',
        logo: {
          alt: 'PinduCloud Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'apiSidebar',
            position: 'left',
            label: 'API 文档',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '快速开始',
                to: '/docs/quickstart',
              },
              {
                label: 'API 鉴权',
                to: '/docs/auth',
              },
              {
                label: '错误码',
                to: '/docs/errors',
              },
            ],
          },
          {
            title: 'API Reference',
            items: [
              {
                label: 'Chat API',
                to: '/docs/chat-completions',
              },
              {
                label: '图像生成',
                to: '/docs/images',
              },
              {
                label: '模型列表',
                to: '/docs/models',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PinduCloud.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
