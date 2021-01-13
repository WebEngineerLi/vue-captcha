import VueCaptcha from 'vue-captcha-code';

export default {
  title: 'Example/Captcha',
  component: VueCaptcha,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data: function () {
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
      <vue-captcha ref="captcha" :captcha.sync="code" @on-change="handleChange"></vue-captcha>
      <div>
        <button @click="refresh">刷新</button>
      </div>
    </div>
  `,
});

export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
