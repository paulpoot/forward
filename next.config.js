/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const { parsed: localEnv } = require('dotenv').config();
const path = require('path');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

module.exports = withPlugins([optimizedImages, withBundleAnalyzer], {
    future: {
        webpack5: true,
    },
    webpack: function (cfg) {
        const webpack = require('webpack');
        const originalEntry = cfg.entry;
        cfg.entry = async () => {
            const entries = await originalEntry();

            if (entries['main.js'] && !entries['main.js'].includes('./client/polyfills.ts')) {
                entries['main.js'].unshift('./client/polyfills.ts');
            }

            return entries;
        };

        cfg.resolve.alias = {
            ...cfg.resolve.alias,
            customKnobs: path.resolve(__dirname, './.storybook/knobs'),
            '~': path.resolve(__dirname, './'),
        };

        cfg.plugins.push(new webpack.EnvironmentPlugin(localEnv));

        return cfg;
    },
});
