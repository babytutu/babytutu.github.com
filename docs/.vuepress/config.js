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
        text: '新手起步',
        children: [
          '/study/基础技能.md',
          '/study/ES6实用技术点.md',
          '/study/Vue源码解析.md',
        ],
      },
      {
        text: '实用工具',
        children: [
          '/tools/Vuepress.md',
          '/tools/Charles.md',
          '/tools/Markdown.md',
          '/tools/Mockjs.md',
          '/tools/Mocha.md',
          '/tools/Nodeppt.md',
          '/tools/Oh-My-ZSH.md',
          '/tools/Magnet.md',
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
      '/study/': [
        {
          text: '新手起步',
          children: [
            '/study/基础技能.md',
            '/study/ES6实用技术点.md',
            '/study/Vue源码解析.md',
          ],
        },
      ],
      '/tools/': [
        {
          text: '实用工具',
          children: [
            '/tools/Vuepress.md',
            '/tools/Charles.md',
            '/tools/Markdown.md',
            '/tools/Mockjs.md',
            '/tools/Mocha.md',
            '/tools/Nodeppt.md',
            '/tools/Oh-My-ZSH.md',
            '/tools/Magnet.md',
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
            {
              text: '1. ECMAScript 6简介',
              link: '/es6tutorial/docs/intro.md',
            },
            {
              text: '2. let 和 const 命令',
              link: '/es6tutorial/docs/let.md',
            },
            {
              text: '3. 变量的解构赋值',
              link: '/es6tutorial/docs/destructuring.md',
            },
            {
              text: '4. 字符串的扩展',
              link: '/es6tutorial/docs/string.md',
            },
            {
              text: '5. 字符串的新增方法',
              link: '/es6tutorial/docs/string-methods.md',
            },
            {
              text: '6. 正则的扩展',
              link: '/es6tutorial/docs/regex.md',
            },
            {
              text: '7. 数值的扩展',
              link: '/es6tutorial/docs/number.md',
            },
            {
              text: '8. 函数的扩展',
              link: '/es6tutorial/docs/function.md',
            },
            {
              text: '9. 数组的扩展',
              link: '/es6tutorial/docs/array.md',
            },
            {
              text: '10. 对象的扩展',
              link: '/es6tutorial/docs/object.md',
            },
            {
              text: '11. 运算符的扩展',
              link: '/es6tutorial/docs/operator.md',
            },
            {
              text: '12. 对象的新增方法',
              link: '/es6tutorial/docs/object-methods.md',
            },
            {
              text: '13. Symbol',
              link: '/es6tutorial/docs/symbol.md',
            },
            {
              text: '14. Set 和 Map 数据结构',
              link: '/es6tutorial/docs/set-map.md',
            },
            {
              text: '15. Proxy',
              link: '/es6tutorial/docs/proxy.md',
            },
            {
              text: '16. Reflect',
              link: '/es6tutorial/docs/reflect.md',
            },
            {
              text: '17. Promise 对象',
              link: '/es6tutorial/docs/promise.md',
            },
            {
              text: '18. Iterator 和 for...of 循环',
              link: '/es6tutorial/docs/iterator.md',
            },
            {
              text: '19. Generator 函数的语法',
              link: '/es6tutorial/docs/generator.md',
            },
            {
              text: '20. Generator 函数的异步应用',
              link: '/es6tutorial/docs/generator-async.md',
            },
            {
              text: '21. async 函数',
              link: '/es6tutorial/docs/async.md',
            },
            {
              text: '22. Class 的基本语法',
              link: '/es6tutorial/docs/class.md',
            },
            {
              text: '23. Class 的继承',
              link: '/es6tutorial/docs/class-extends.md',
            },
            {
              text: '24. Module 的语法',
              link: '/es6tutorial/docs/module.md',
            },
            {
              text: '25. Module 的加载实现',
              link: '/es6tutorial/docs/module-loader.md',
            },
            {
              text: '26. 编程风格',
              link: '/es6tutorial/docs/style.md',
            },
            {
              text: '27. 读懂规格',
              link: '/es6tutorial/docs/spec.md',
            },
            {
              text: '28. 异步遍历器',
              link: '/es6tutorial/docs/async-iterator.md',
            },
            {
              text: '29. ArrayBuffer',
              link: '/es6tutorial/docs/arraybuffer.md',
            },
            {
              text: '30. 最新提案',
              link: '/es6tutorial/docs/proposals.md',
            },
            {
              text: '31. Decorator',
              link: '/es6tutorial/docs/decorator.md',
            },
            {
              text: '32. 参考链接',
              link: '/es6tutorial/docs/reference.md',
            },
          ],
        },
      ],
    }
  },
  markdown: {
    code: {
      lineNumbers: false
    }
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