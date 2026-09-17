import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const organizationName = process.env.GITHUB_REPOSITORY_OWNER ?? 'ModPVZRH';
const projectName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'FGUI';

const config: Config = {
  title: 'LauncherUi',
  tagline: '在 PVZRH 游戏内绘制原生 Android 插件界面',
  favicon: 'img/logo.png',

  future: {
    v4: true,
  },

  url: process.env.DOCUSAURUS_URL ?? `https://${organizationName.toLowerCase()}.github.io`,
  baseUrl: process.env.DOCUSAURUS_BASE_URL ?? '/',
  organizationName,
  projectName,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'LauncherUi',
      logo: {
        alt: 'LauncherUi',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '文档',
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
              label: '介绍',
              to: '/docs/intro',
            },
            {
              label: '快速上手',
              to: '/docs/getting-started',
            },
            {
              label: '控件总览',
              to: '/docs/widgets/overview',
            },
            {
              label: '常见问题',
              to: '/docs/troubleshooting',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PVZRH Mod Dev`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['csharp', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
