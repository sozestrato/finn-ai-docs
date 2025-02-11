presets: [
  [
    '@docusaurus/preset-classic',
    {
      docs: {
        routeBasePath: '/', // Esto hace que la documentación sea la página principal
        sidebarPath: require.resolve('./sidebars.js'),
      },
      theme: {
        customCss: require.resolve('./src/css/custom.css'),
      },
    },
  ],
],

