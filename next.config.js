const path = require('path');
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  webpack: function (cfg) {
    cfg.module.rules.push({
      test: /\.(woff|woff2)$/,
      loader: 'file-loader',
      options: {
        outputPath: 'static/fonts/',
        publicPath: '/_next/static/fonts/',
        limit: 1,
      },
    });

    cfg.resolve.alias = {
      ...cfg.resolve.alias,
      '~': path.resolve(__dirname, './'),
    };

    return cfg;
  },
};

module.exports = withPlugins(
  [
    [withBundleAnalyzer],
    // your other plugins here
  ],
  nextConfig,
);
