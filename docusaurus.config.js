// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

module.exports = {
  title: 'Finn AI Docs',
  tagline: 'Documentación de Finn AI',
  url: 'https://finn-ai-docs.vercel.app', // Reemplaza con tu URL real
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'sozestrato', // Cambia por tu usuario de GitHub
  projectName: 'finn-ai-docs', // Debe coincidir con el nombre del repo en GitHub

  themeConfig: {
    colorMode: {
      defaultMode: 'light', // 🔹 Forzar Light Mode
      disableSwitch: true, // 🔹 Desactivar el cambio a modo oscuro
      respectPrefersColorScheme: false, // 🔹 No respetar el modo oscuro del sistema
    },
    navbar: {
      title: 'Finn AI Docs',
      logo: {
        alt: 'Finn AI Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/', label: 'Overview', position: 'left' },
        { to: '/features', label: 'Features', position: 'left' },
        { href: 'https://finn-ai.com', label: 'Website', position: 'right' },
        { href: 'https://github.com/sozestrato/finn-ai-docs', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'light', // 🔹 Fondo claro en el footer
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Overview', to: '/' },
            { label: 'Features', to: '/features' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'GitHub', href: 'https://github.com/sozestrato/finn-ai-docs' },
            { label: 'Website', href: 'https://finn-ai.com' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Finn AI. Todos los derechos reservados.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/', // 🔹 Esto hace que la documentación sea la página principal
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/sozestrato/finn-ai-docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
