import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Tabliss Glass Docs",
  titleDelimiter: "·",
  tagline: "Personal documentation for the Tabliss Glass fork",
  favicon: "img/icons/icon.svg",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true,
    faster: true,
  },

  // This site is kept for local documentation and internal reference.
  url: "http://localhost",
  // Set the /<baseUrl>/ pathname under which your site is served.
  baseUrl: "/",

  organizationName: "BookCatKid",
  projectName: "Tabliss-Glass",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.sass",
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: ["docusaurus-plugin-sass"],

  themeConfig: {
    navbar: {
      title: "Tabliss Glass",
      logo: {
        alt: "Tabliss Glass Logo",
        src: "img/icons/icon.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Documentation",
        },
        {
          to: "/gallery",
          label: "Gallery",
          position: "left",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "/intro",
            },
            {
              label: "Features",
              to: "/features",
            },
            {
              label: "Support",
              to: "category/support",
            },
            {
              label: "Gallery",
              to: "/gallery",
            },
          ],
        },
      ],
      copyright: `Tabliss Glass is a personal fork and is built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    metadata: [
      {
        name: "google-site-verification",
        content: "-jqlgm-10aLbyq4UgXkXf0JTZW7tXeB18i2XTAO8QJQ",
      },
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;
