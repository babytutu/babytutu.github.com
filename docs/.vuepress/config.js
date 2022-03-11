const path = require('path')
const fs = require('fs')

/**
 * 根据相对目录返回md文件列表
 * @param {String} folder 相对docs目录
 * @returns md文件列表
 */
const getMdListByFolder = (folder) => fs.readdirSync(`./docs/${folder}`).filter(i => i.includes('.md')).map(i => `/${folder}/${i}`)

module.exports = {
  base: '/',
  title: '学无止境',
  port: 9001,
  description: '前端开发入门',
  themeConfig: {
    logo: '/images/logo.svg',
    lastUpdated: false,
    contributors: false,
    navbar: [
      {
        text: '基础知识',
        children: [
          {
            text: '新手起步',
            children: [
              ...getMdListByFolder('study'),
            ]
          },
          {
            text: '实用组件',
            children: [
              ...getMdListByFolder('components'),
            ],
          },
        ],
      },
      {
        text: '实用工具',
        children: [
          ...getMdListByFolder('tools'),
        ],
      },
      {
        text: 'Mac小技巧',
        link: '/mac/'
      },
      {
        text: 'ES6 入门教程',
        link: '/es6tutorial/',
      },
      {
        text: '参考资料',
        children: [
          {
            text: 'Vue',
            link: 'https://cn.vuejs.org/v2/guide/'
          },
          {
            text: 'Element',
            link: 'http://element.eleme.io/#/zh-CN/component/installation'
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
          }
        ],
      },
    ],
    sidebar: {
      '/components/': [
        {
          text: '实用组件',
          children: [
            ...getMdListByFolder('components'),
          ],
        }
      ],
      '/study/': [
        {
          text: '新手起步',
          children: [
            ...getMdListByFolder('study'),
          ],
        },
      ],
      '/tools/': [
        {
          text: '实用工具',
          children: [
            ...getMdListByFolder('tools'),
          ],
        },
      ],
      '/mac/': [
        {
          text: 'Mac小技巧',
          link: '/mac/',
        }
      ],
      '/es6tutorial/': [
        {
          text: 'ES6 入门教程',
          children: [
            {
              text: '前言',
              link: '/es6tutorial/README.md',
            },
            ...getMdListByFolder('es6tutorial/docs'),
          ],
        },
      ],
    }
  },
  markdown: {
    code: {
      lineNumbers: false
    },
    importCode: {
      handleImportPath: (str) => str.replace(/^@src/, path.resolve(__dirname))
    },
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: '站内搜索',
          }
        },
      },
    ],
  ],
}