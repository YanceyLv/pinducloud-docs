// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  apiSidebar: [
    'intro',
    'quickstart',
    'auth',
    {
      type: 'category',
      label: 'API Reference',
      collapsed: false,
      items: [
        'chat-completions',
        'images',
        'models',
        {
          type: 'category',
          label: '视频生成接口 API',
          collapsed: false,
          link: {type: 'doc', id: 'video/overview'},
          items: [
            {
              type: 'category',
              label: '豆包 Seedance 视频生成',
              collapsed: false,
              link: {type: 'doc', id: 'video/seedance/overview'},
              items: [
                'video/seedance/create',
                'video/seedance/private-assets',
                'video/seedance/query',
                'video/seedance/list',
                'video/seedance/delete',
              ],
            },
            {
              type: 'category',
              label: 'MiniMax-H3 视频生成',
              collapsed: false,
              link: {type: 'doc', id: 'video/h3/overview'},
              items: [
                'video/h3/create',
                'video/h3/regeneration',
                'video/h3/context-ir',
                'video/h3/query',
                'video/h3/list',
                'video/h3/delete',
              ],
            },
          ],
        },
        'errors',
      ],
    },
  ],
};

export default sidebars;
