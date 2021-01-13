const path = require('path');

module.exports = {
  webpackFinal: async (config) => {
    config.resolve.alias['vue-captcha-code'] = path.resolve('src/captcha.vue');
    return config;
  },
  stories: ['../**/*.stories.mdx', '../stories/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
};
