<template>
  <canvas :height="height" :width="width" ref="canvas" @click="refreshCaptcha"></canvas>
</template>

<script>
import { originalCharacter, randomColor, randomNum } from './utils';

export default {
  name: 'VueCaptcha',
  props: {
    height: {
      type: Number,
      default: 40,
    },
    width: {
      type: Number,
      default: 100,
    },
    bgColor: {
      type: String,
      default: '#DFF0D8',
    },
    charNum: {
      type: Number,
      default: 4,
    },
    fontSize: {
      type: Number,
      default: 25,
    },
    onChange: {
      type: Function,
    },
    className: {
      type: String,
    },
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    generateCaptcha() {
      let checkCode = '';
      if (this.$refs.canvas) {
        const ctx = this.$refs.canvas.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, this.width, this.height);
          ctx.beginPath();
          ctx.fillStyle = this.bgColor;
          ctx.fillRect(0, 0, this.width, this.height);
          for (let i = 0; i < this.charNum; i++) {
            const charGap = Math.round(this.width / this.charNum);
            const offset = Math.round(charGap / 2) - 6;
            const code = originalCharacter[randomNum(0, originalCharacter.length - 1)];
            checkCode += code;
            ctx.save();
            ctx.beginPath();
            ctx.fillStyle = 'white';
            ctx.strokeStyle = randomColor();
            ctx.font = `${this.fontSize}px serif`;
            ctx.rotate((Math.PI / 180) * randomNum(-5, 5));
            ctx.strokeText(code, offset + i * charGap, this.height / 2 + 8);
            ctx.beginPath();
            ctx.moveTo(randomNum(0, this.width), randomNum(0, this.height));
            ctx.lineTo(randomNum(0, this.width), randomNum(0, this.height));
            ctx.stroke();
            ctx.restore();
          }
          return checkCode;
        } else {
          return '';
        }
      } else {
        return '';
      }
    },

    handleChange(code) {
      this.$emit('on-change', code);
      this.$emit('update:captcha', code);
    },
    refreshCaptcha() {
      const code = this.generateCaptcha();
      this.handleChange(code);
    },
  },
  mounted() {
    this.refreshCaptcha();
  },
};
</script>
<style scoped></style>
