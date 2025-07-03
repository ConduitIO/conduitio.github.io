import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Conduit | Data Integration for Production Data Stores',
  tagline: 'Sync data between your production systems using an extensible, event-first experience with minimal dependencies that fit within your existing workflow for free.',
  favicon: 'img/favicon.ico',
  
  // Set the production url of your site here
  url: 'https://conduitio.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'conduitio', // Usually your GitHub org/user name.
  projectName: 'conduitio.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  onDuplicateRoutes: 'warn',
  
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        gtag: {
          trackingID: 'G-QKF0TW3J6Z',
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: './src/sidebars/sidebars.ts',
          editUrl: 'https://github.com/conduitio/conduitio.github.io/edit/main/',
          showLastUpdateTime: true,
        },
        theme: {
          customCss: ['./src/css/custom.css', './src/css/dark.css'],
        },
      } satisfies Preset.Options,
    ],
  ],
  
  themeConfig: {
    metadata: [{ name: 'facebook-domain-verification', content: '0aq4u2ydyv4axal6x65gslmidlhc7j' }],
    image: 'img/generic-social-image.png',
    navbar: {
      logo: {
        alt: 'Conduit Logo',
        src: '/img/logos/conduit-logo-light.svg',
        srcDark: '/img/logos/conduit-logo-dark.svg',
      },
      items: [
        { to: '/docs/using/connectors/list', position: 'left', label: 'Connectors' },
        { to: '/docs', position: 'left', label: 'Documentation' },
        { to: '/changelog', position: 'left', label: 'Changelog' },
        { to: '/api', position: 'left', label: 'HTTP API' },
        { to: 'https://github.com/ConduitIO', position: 'right', label: 'GitHub', className: 'svg-background github' },
      ],
    },
    algolia: { // https://docusaurus.io/docs/search#using-algolia-docsearch
      // The application ID provided by Algolia
      appId: '37HOKUPXLR', // 
      
      // Search API key: it is safe to commit it
      apiKey: '6a3c0c5d80ffbcba9eb001201f9128b8',
      
      indexName: 'conduit',
      
      // Facets could be configured via https://dashboard.algolia.com/apps/37HOKUPXLR/explorer/configuration/conduit/facets. It's important to note that the facets need to be enabled in the Algolia dashboard.
      contextualSearch: false,
      // searchParameters: {
      //   facetFilters: ['language:en', ''],
      // },
      
      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      // externalUrlRegex: '',
      
      // Optional: Algolia search parameters
      // searchParameters: {},
      
      // This creates a custom page where the search is displayed. This can be useful when sharing a specific list of urls.
      searchPagePath: 'docs/search', // 
      
      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: true,
    },
    footer: {
      style: 'dark',
      links: [
        {
          items: [
            {
              html: `
                <a href="/" class="text-black hover:text-gray-600">
                  <img id="footer-logo" src="/img/conduit/conduit-logo.svg" width="178" height="70" alt="Conduit Logo" />
                </a>
              `
            },
            {
              html: `
                <div class='flex mt-6'>
                  <a href='https://github.com/ConduitIO/' class='github-logo text-black ml-4'>
                    <svg aria-label="ConduitIO on GitHub" width="35" height="35" viewBox="0 0 72 70" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M36 0C55.8895 0 72 16.0623 72 35.8923C72 51.7564 61.6796 65.1967 47.3812 69.9559C45.5912 70.2864 44.9282 69.1848 44.9282 68.2153C44.9282 67.356 44.9503 65.1086 44.9724 62.112C54.9834 64.2713 57.105 57.3088 57.105 57.3088C58.7403 53.1665 61.105 52.0428 61.105 52.0428C64.3757 49.8174 60.8619 49.8615 60.8619 49.8615C57.2597 50.1259 55.337 53.5631 55.337 53.5631C52.1326 59.0494 46.9171 57.463 44.8619 56.5376C44.5304 54.2241 43.6022 52.6377 42.5856 51.7343C50.5635 50.853 58.9613 47.7683 58.9613 34.0195C58.9613 30.0976 57.5691 26.9027 55.2486 24.3909C55.6243 23.4655 56.8619 19.83 54.9171 14.8946C54.9171 14.8946 51.8895 13.9251 45.0166 18.5741C42.1436 17.7809 39.0718 17.3843 36 17.3623C32.9503 17.3843 29.8564 17.7809 26.9834 18.5741C20.1105 13.9251 17.0829 14.8946 17.0829 14.8946C15.116 19.83 16.3536 23.4876 16.7293 24.3909C14.4309 26.9027 13.0387 30.0976 13.0387 34.0195C13.0387 47.8124 21.4586 50.831 29.4807 51.7343C28.1989 52.836 27.0276 55.0393 27.0276 58.3884C27.0276 63.1917 27.0718 67.0475 27.0718 68.2373C27.0718 69.2068 26.4309 70.3085 24.5967 69.9559C10.2983 65.1967 0 51.7564 0 35.9144C0 16.0623 16.1105 0 36 0Z" fill="currentColor"></path></g><defs><clipPath id="clip0"><rect width="72" height="70" fill="white"></rect></clipPath></defs></svg>
                  </a>
                </div>
              `
            }
          ]
        },
        {
          title: 'Resources',
          items: [
            { label: 'Connectors', to: '/docs/using/connectors/list' },
            { label: 'Documentation', to: '/docs' },
            { label: 'Issues', href: 'https://github.com/ConduitIO/conduit/issues' },
            { label: 'Changelog', to: '/changelog' },
            { label: 'GitHub Discussions', href: 'https://github.com/ConduitIO/conduit/discussions' },
          ],
        },
      ],
    },
    announcementBar: {
      id: 'announcement-bar-14', // increment on change
      content: `Conduit v0.14.0 is here! <a class='cta' href='/changelog/2025-06-13-conduit-0-14-0-release' target='_blank' rel='noreferrer noopener'>See what's new</a>.`,
      isCloseable: true,
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'diff', 'json', 'hcl', 'yaml'],
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    async function tailwindPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        injectHtmlTags() {
          return {
            headTags: [
              {
                tagName: "link",
                attributes: {
                  rel: "stylesheet",
                  href: "https://cdn.jsdelivr.net/npm/tailwindcss/dist/preflight.min.css",
                },
              },
            ],
          };
        },
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'changelog',
        routeBasePath: 'changelog',
        path: './changelog',
        onUntruncatedBlogPosts: 'ignore',
        onInlineAuthors: 'ignore',
        onInlineTags: 'ignore',
        blogSidebarCount: 'ALL'
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/docs/connectors/connector-list',
            to: '/docs/using/connectors/list',
          },
          {
            from: '/docs/connectors/building-connectors',
            to: '/docs/developing/connectors',
          },
          {
            from: '/docs/connectors/building/',
            to: '/docs/developing/connectors',
          },
          {
            from: '/docs/connectors/installing',
            to: '/docs/using/connectors/installing',
          },
          {
            from: '/docs/connectors/referencing/',
            to: '/docs/using/connectors/referencing',
          },
          {
            from: '/docs/connectors/additional-built-in-plugins/',
            to: '/docs/using/connectors/additional-built-in-plugins'
          },
          {
            from: '/docs/pipeline-configuration-files/getting-started',
            to: '/docs/using/pipelines/configuration-file',
          },
          {
            from: '/docs/features/opencdc-record',
            to: '/docs/using/opencdc-record',
          },
          {
            from: '/docs/processors',
            to: '/docs/using/processors/getting-started',
          },
          {
            from: '/docs/processors/getting-started',
            to: '/docs/using/processors/getting-started',
          },
          {
            from: '/docs/processors/builtin/',
            to: '/docs/using/processors/builtin',
          },
          {
            from: '/docs/processors/standalone/building',
            to: '/docs/developing/processors/building',
          },
          {
            from: '/docs/processors/referencing-fields',
            to: '/docs/using/processors/referencing-fields',
          },
          {
            from: '/docs/features/schema-support',
            to: '/docs/using/other-features/schema-support',
          },
          {
            from: '/docs/features/pipeline-semantics',
            to: '/docs/core-concepts/pipeline-semantics',
          },
          {
            from: '/docs/pipeline-configuration-files',
            to: '/docs/using/pipelines/configuration-file',
          },
          {
            from: '/docs/features/stream-inspector',
            to: '/docs/using/other-features/stream-inspector'
          },
        ]
      },
    ],
  ],
};

export default config;
