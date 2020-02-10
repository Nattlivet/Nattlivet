const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withOffline = require('next-offline');

module.exports = withOffline(withSass(withCSS({
    projectRoot: __dirname,
    poweredByHeader: false,
    webpack: (config) => {
        config.resolve.extensions.push('.web.js', '.web.ts', '.web.tsx');
        return config;
    }
})));
