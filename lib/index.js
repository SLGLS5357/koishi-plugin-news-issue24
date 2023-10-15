"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apply = exports.usage = exports.Config = exports.name = void 0;
const koishi_1 = require("koishi");
exports.name = 'news-issue24';
exports.Config = koishi_1.Schema.object({});
exports.usage = `

<style>
html, body {
  width: 100%;
  height: 100%;
  display: flex;
  background: #000;
}
svg {
  width: 100%;
  height: 100px;
  margin: auto;
}
svg text {
  text-transform: uppercase;
  animation: stroke 5s infinite alternate;
  letter-spacing: 10px;
  font-size: 90px;
}
@keyframes stroke {
  0% {
    fill: rgba(72, 138, 20, 0);
    stroke: rgba(54, 95, 160, 1);
    stroke-dashoffset: 25%;
    stroke-dasharray: 0 50%;
    stroke-width: 0.8;
  }
  50% {
    fill: rgba(72, 138, 20, 0);
    stroke: rgba(54, 95, 160, 1);
    stroke-width: 1.2;
  }
  70% {
    fill: rgba(72, 138, 20, 0);
    stroke: rgba(54, 95, 160, 1);
    stroke-width: 1.5;
  }
  90%,
  100% {
    fill: rgba(72, 138, 204, 1);
    stroke: rgba(54, 95, 160, 0);
    stroke-dashoffset: -25%;
    stroke-dasharray: 50% 0;
    stroke-width: 0;
  }
}

</style>
<svg viewBox="400 0 400 200">
  <text x="0" y="70%"> api来自夏柔的公益项目 </text>
</svg>

- 插件动态字体参考插件\`Kbot\`
- 夏柔网址\`https://api.aa1.cn/\`欢迎爱发电
`;
function apply(ctx) {
    ctx.command('news', '国内新闻24期').alias('新闻')
        .action(async ({ session }, ...args) => {
        return ((0, koishi_1.h)('image', { url: 'https://v.api.aa1.cn/api/60s-v3/?cc=%E5%9B%BD%E5%86%85%E8%A6%81%E9%97%BB' }));
    });
}
exports.apply = apply;
