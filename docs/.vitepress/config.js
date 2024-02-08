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
 * @see https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes
 */
module.exports = {
  base: '/',
  title: '学无止境',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  markdown: {
    theme: 'one-dark-pro',
    lineNumbers: true,
  },
  themeConfig: {
    logo: '/logo.png',
    title: '学无止境',
    nav: [
      {
        text: '新手起步',
        link: '/study/基础技能.md',
      },
      {
        text: '实用组件',
        items: [...getMdListByFolder('components')],
      },
      {
        text: '实用工具',
        link: '/tools/Charles',
      },
      {
        text: 'Mac小技巧',
        link: '/mac/解决端口被占用',
      },
      {
        text: 'iOS开发',
        link: '/iOS/iOS Distribution',
      },
      {
        text: 'Java开发',
        link: '/Java/Java安装',
      },
      {
        text: 'Linux',
        link: '/linux/Linux常用命令',
      },
      {
        text: '字体文件预览',
        link: '/utils/iconPreview',
      },
      {
        text: '参考资料',
        items: [
          {
            text: 'Vue',
            link: 'https://cn.vuejs.org',
          },
          {
            text: 'React',
            link: 'https://react.dev/',
          },
          {
            text: 'miniprogram',
            link: 'https://developers.weixin.qq.com/miniprogram/dev/framework/',
          },
          {
            text: 'MDN Web Docs',
            link: 'https://developer.mozilla.org',
          },
          {
            text: 'ES6 教程',
            link: 'https://wangdoc.com/es6/',
          },
          {
            text: 'Vant',
            link: 'https://vant-contrib.gitee.io/vant/#/zh-CN/',
          },
          {
            text: 'Ant Design Mobile',
            link: 'https://mobile.ant.design/zh',
          },
        ],
      },
      {
        text: '开发相关网站',
        items: [
          {
            text: '全国互联网安全管理服务平台',
            link: 'https://beian.mps.gov.cn/',
          },
          {
            text: '工业和信息化部',
            link: 'https://dxzhgl.miit.gov.cn',
          },
          {
            text: '邓白氏编码',
            link: 'https://www.dnbportal.cn/',
          },
          {
            text: '苹果开发者网站',
            link: 'https://developer.apple.com/',
          },
          {
            text: 'Dcloud开发者后台',
            link: 'https://dev.dcloud.net.cn/',
          },
          {
            text: '微信公众平台',
            link: 'https://mp.weixin.qq.com/',
          },
          {
            text: '微信开放平台',
            link: 'https://open.weixin.qq.com/',
          },
          {
            text: '中国版权保护中心',
            link: 'https://www.ccopyright.com/',
          },
          {
            text: '腾讯应用开放平台',
            link: 'https://open.tencent.com/',
          },
          {
            text: '中国信通院',
            link: 'https://appsign.caict.ac.cn/register',
          },
          {
            text: '百度移动应用平台',
            link: 'https://app.baidu.com/',
          },
          {
            text: '小米开放平台',
            link: 'https://dev.mi.com/platform/appstore',
          },
        ],
      },
    ],
    sidebar: {
      '/components/': [
        {
          text: '实用组件',
          items: [...getMdListByFolder('components')],
        },
      ],
      '/study/': [
        {
          text: '新手起步',
          items: [...getMdListByFolder('study')],
        },
      ],
      '/tools/': [
        {
          text: '实用工具',
          items: [...getMdListByFolder('tools')],
        },
      ],
      '/mac/': [
        {
          text: 'Mac小技巧',
          items: [...getMdListByFolder('mac')],
        },
      ],
      '/iOS/': [
        {
          text: 'iOS开发',
          items: [...getMdListByFolder('iOS')],
        },
      ],
      '/Java/': [
        {
          text: 'Java开发',
          items: [...getMdListByFolder('Java')],
        },
      ],
      '/linux/': [
        {
          text: 'Linux',
          items: [...getMdListByFolder('linux')],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/babytutu' },
      {
        icon: {
          svg: `<svg viewBox="0 0 128 128" width="24" height="24" data-v-11b02119=""><path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z" data-v-11b02119=""></path><path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z" data-v-11b02119=""></path></svg>`,
        },
        ariaLabel: 'vue',
        link: 'https://babytutu.github.io/front-h5',
      },
      {
        icon: {
          svg: `<svg width="100%" height="100%" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="0" cy="0" r="2" fill="rgb(8,126,64)"></circle><g stroke="rgb(8,126,64)" stroke-width="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>`,
        },
        ariaLabel: 'react',
        link: 'https://babytutu.github.io/react-app',
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2021-present Babytutu',
    },
    search: {
      provider: 'local',
    },
  },
}
