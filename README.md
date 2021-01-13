# vue-captcha-code

基于 `vue` 和 `canvas` 的一个验证码组件

## 安装

```
npm install vue-captcha-code --save
```

## APIS

[点这里](https://webengineerli.github.io/vue-captcha/?path=/docs/example-captcha--primary)

## 基本用法

```js
import VueCaptcha from 'vue-captcha-code';

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data: function() {
    return {
      code: '',
    };
  },
  components: { VueCaptcha },
  methods: {
    handleChange(code) {
      console.log('code: ', code);
    },
    refresh() {
      this.$refs.captcha.refreshCaptcha();
    },
  },
  template: `
    <div>
      <vue-captcha 
        ref="captcha" 
        :captcha.sync="code"
        @on-change="handleChange">
      </vue-captcha>
      <div>
        <button @click="refresh">刷新</button>
      </div>
    </div>
  `,
});
```

## 在线示例

[![Edit vue-captcha](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/vue-captcha-qlvzt?fontsize=14&hidenavigation=1&theme=dark)
s
