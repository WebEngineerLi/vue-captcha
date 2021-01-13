const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'vue-captcha-code': path.resolve('src/captcha.vue'),
      },
    },
  },
};
