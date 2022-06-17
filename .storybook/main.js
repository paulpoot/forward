const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/preset-scss',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-next-router',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config) => {
    let enrichedConfig = config;

    enrichedConfig.resolve.alias = {
      ...enrichedConfig.resolve.alias,
      '~': path.resolve(__dirname, '../'),
      '@api': path.resolve(__dirname, '../src/api'),
      '@assets': path.resolve(__dirname, '../src/assets'),
      '@blocks': path.resolve(__dirname, '../src/blocks'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@atoms': path.resolve(__dirname, '../src/components/atoms'),
      '@molecules': path.resolve(__dirname, '../src/components/molecules'),
      '@organisms': path.resolve(__dirname, '../src/components/organisms'),
      '@templates': path.resolve(__dirname, '../src/components/templates'),
      '@contexts': path.resolve(__dirname, '../src/contexts'),
      '@hooks': path.resolve(__dirname, '../src/hooks'),
      '@libs': path.resolve(__dirname, '../src/libs'),
      '@mocks': path.resolve(__dirname, '../src/mocks'),
      '@pages': path.resolve(__dirname, '../src/pages'),
      '@styles': path.resolve(__dirname, '../src/styles'),
      '@typings': path.resolve(__dirname, '../src/typings'),
      '@utils': path.resolve(__dirname, '../src/utils'),
    };

    return enrichedConfig;
  },
};
