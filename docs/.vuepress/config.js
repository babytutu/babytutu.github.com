module.exports = {
  base: '/books/',
  title: '学习材料',
  description: '资料合集',
  themeConfig: {
    sidebar: [
      {
        text: '首页',
        link: '/README.md'
      },
      {
        text: '指南',
        children: [
          '/books/使用vuepress搭建网站.md',
          '/books/ES6实用技术点.md',
          '/books/抓包工具charles使用说明.md',
          '/books/Markdown基本语法.md',
        ]
      },
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
            text: '11. 对象的新增方法',
            link: '/es6tutorial/docs/object-methods.md',
          },
          {
            text: '12. Symbol',
            link: '/es6tutorial/docs/symbol.md',
          },
          {
            text: '13. Set 和 Map 数据结构',
            link: '/es6tutorial/docs/set-map.md',
          },
          {
            text: '14. Proxy',
            link: '/es6tutorial/docs/proxy.md',
          },
          {
            text: '15. Reflect',
            link: '/es6tutorial/docs/reflect.md',
          },
          {
            text: '16. Promise 对象',
            link: '/es6tutorial/docs/promise.md',
          },
          {
            text: '17. Iterator 和 for...of 循环',
            link: '/es6tutorial/docs/iterator.md',
          },
          {
            text: '18. Generator 函数的语法',
            link: '/es6tutorial/docs/generator.md',
          },
          {
            text: '19. Generator 函数的异步应用',
            link: '/es6tutorial/docs/generator-async.md',
          },
          {
            text: '20. async 函数',
            link: '/es6tutorial/docs/async.md',
          },
          {
            text: '21. Class 的基本语法',
            link: '/es6tutorial/docs/class.md',
          },
          {
            text: '22. Class 的继承',
            link: '/es6tutorial/docs/class-extends.md',
          },
          {
            text: '23. Module 的语法',
            link: '/es6tutorial/docs/module.md',
          },
          {
            text: '24. Module 的加载实现',
            link: '/es6tutorial/docs/module-loader.md',
          },
          {
            text: '25. 编程风格',
            link: '/es6tutorial/docs/style.md',
          },
          {
            text: '26. 读懂规格',
            link: '/es6tutorial/docs/spec.md',
          },
          {
            text: '27. 异步遍历器',
            link: '/es6tutorial/docs/async-iterator.md',
          },
          {
            text: '28. ArrayBuffer',
            link: '/es6tutorial/docs/arraybuffer.md',
          },
          {
            text: '29. 最新提案',
            link: '/es6tutorial/docs/proposals.md',
          },
          {
            text: '30. Decorator',
            link: '/es6tutorial/docs/decorator.md',
          },
          {
            text: '31. 参考链接',
            link: '/es6tutorial/docs/reference.md',
          },
        ],
      },
    ],
  },
}