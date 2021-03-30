// eslint-disable-next-line @typescript-eslint/no-var-requires
const stylelint = require('stylelint');

module.exports = {
    plugins: {
        'postcss-css-variables': {
            variables: {
                '--black': '#333',
                '--alabaster-grey': '#f9f9f9',
                '--white': '#fff',
            },
        },
        'postcss-custom-media': {
            importFrom: './base/_media.css',
        },
        'postcss-import': {
            plugins: [stylelint()],
        },
        'postcss-nested': {},
        'postcss-preset-env': {},
        'postcss-color-function': {},
        'postcss-global-import': {},
    },
};
