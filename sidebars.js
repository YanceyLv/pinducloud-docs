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
      items: ['chat-completions', 'images', 'models', 'errors'],
    },
  ],
};

export default sidebars;
