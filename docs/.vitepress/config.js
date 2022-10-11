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
 * @see https://vitepress.vuejs.org/config/introduction
 */
module.exports = {
  base: '/',
  title: '学无止境',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true
  },
  themeConfig: {
    logo: '/logo.png',
    title: '学无止境',
    nav: [
      {
        text: '新手起步',
        link: '/study/基础技能.md'
      },
      {
        text: '实用组件',
        items: [
          ...getMdListByFolder('components'),
        ],
      },
      {
        text: '实用工具',
        link: '/tools/Charles'
      },
      {
        text: 'Mac小技巧',
        link: '/mac/'
      },
      {
        text: '字体文件预览',
        link: '/utils/iconPreview'
      },
      {
        text: '参考资料',
        items: [
          {
            text: 'Vue',
            link: 'https://cn.vuejs.org'
          },
          {
            text: 'Vant',
            link: 'https://vant-contrib.gitee.io/vant/#/zh-CN/'
          },
          {
            text: 'miniprogram',
            link: 'https://developers.weixin.qq.com/miniprogram/dev/framework/'
          },
          {
            text: 'MDN Web Docs',
            link: 'https://developer.mozilla.org'
          },
          {
            text: 'ES6 教程',
            link: 'https://wangdoc.com/es6/'
          }
        ],
      },
    ],
    sidebar: {
      '/components/': [
        {
          text: '实用组件',
          items: [
            ...getMdListByFolder('components'),
          ],
        }
      ],
      '/study/': [
        {
          text: '新手起步',
          items: [
            ...getMdListByFolder('study'),
          ],
        },
      ],
      '/tools/': [
        {
          text: '实用工具',
          items: [
            ...getMdListByFolder('tools'),
          ],
        },
      ],
    }
  },
}
