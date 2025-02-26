module.exports = {
  title: 'Finn AI Docs',
  tagline: 'Documentación de Finn AI',
  url: 'https://finn-ai-docs.vercel.app', // Cambia esto por la URL real
  baseUrl: '/', // Asegura que sea "/"
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'sozestrato', // Cambia por tu usuario de GitHub
  projectName: 'finn-ai-docs', // Debe coincidir con el nombre del repo en GitHub

  themeConfig: {
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
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/', // Esto asegura que la documentación es la página principal
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
