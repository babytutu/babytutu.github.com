const fs = require('fs')

/**
 * 根据相对目录返回md文件列表
 * @param {String} folder 相对docs目录
 * @returns md文件列表
 */
const getMdListByFolder = (folder) => fs.readdirSync(`./docs/${folder}`).filter(i => i.includes('.md')).map(i => ({
  text: i.replace('.md', ''),
  link: `/${folder}/${i}`.replace('.md', '')
}))

/**
 * @see https://vitepress.dev/reference/site-config
 */
module.exports = {
  base: "/",
  title: "学无止境",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  markdown: {
    theme: "material-theme-palenight",
    lineNumbers: true,
  },
  themeConfig: {
    logo: "/logo.png",
    title: "学无止境",
    nav: [
      {
        text: "新手起步",
        link: "/study/基础技能.md",
      },
      {
        text: "实用组件",
        items: [...getMdListByFolder("components")],
      },
      {
        text: "实用工具",
        link: "/tools/Charles",
      },
      {
        text: "Mac小技巧",
        link: "/mac/",
      },
      {
        text: "字体文件预览",
        link: "/utils/iconPreview",
      },
      {
        text: "NASA API",
        items: [...getMdListByFolder("NASA")],
      },
      {
        text: "参考资料",
        items: [
          {
            text: "Vue",
            link: "https://cn.vuejs.org",
          },
          {
            text: "Vant",
            link: "https://vant-contrib.gitee.io/vant/#/zh-CN/",
          },
          {
            text: "miniprogram",
            link: "https://developers.weixin.qq.com/miniprogram/dev/framework/",
          },
          {
            text: "MDN Web Docs",
            link: "https://developer.mozilla.org",
          },
          {
            text: "ES6 教程",
            link: "https://wangdoc.com/es6/",
          },
        ],
      },
    ],
    sidebar: {
      "/components/": [
        {
          text: "实用组件",
          items: [...getMdListByFolder("components")],
        },
      ],
      "/study/": [
        {
          text: "新手起步",
          items: [...getMdListByFolder("study")],
        },
      ],
      "/tools/": [
        {
          text: "实用工具",
          items: [...getMdListByFolder("tools")],
        },
      ],
      "/NASA/": [
        {
          text: "NASA API",
          items: [...getMdListByFolder("NASA")],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/babytutu" },
      {
        icon: {
          svg: `<svg viewBox="0 0 128 128" width="24" height="24" data-v-11b02119=""><path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z" data-v-11b02119=""></path><path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z" data-v-11b02119=""></path></svg>`,
        },
        ariaLabel: "vue",
        link: "https://babytutu.github.io/front-h5",
      },
      {
        icon: {
          svg: `<svg width="100%" height="100%" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="0" cy="0" r="2" fill="rgb(8,126,64)"></circle><g stroke="rgb(8,126,64)" stroke-width="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>`,
        },
        ariaLabel: "react",
        link: "https://babytutu.github.io/react-app",
      },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2021-present Babytutu",
    },
  },
};
