# TypeScript

TypeScript for JavaScript Programmers

## Types by Inference

```js
const user = {
  name: "Hayes",
  id: 0,
}
```

```ts
interface User = {
  name: string,
  id: number,
}

const user: User = {
  name: "Hayes",
  id: 0,
}

class UserInfo {
  name: string
  id: number

  constructor(name: string, id: number) {
    this.name = name
    this.id = id
  }
}

const user1: User = new UserInfo('Jack', 1)
```

## Composing Types

Unions

```ts
type MyBool = true | false
```

Generics

```ts
type StringArray = Array<string>
type NumberArray = Array<number>
type ObjectWithNameArray = Array<{ name: string }>
```

## Structural Type System

```ts
interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);
```

```ts
class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint); // logs "13, 56"
```

## TSConfig

[Intro to the TSConfig Reference](https://www.typescriptlang.org/tsconfig)

目录中的 TSConfig 文件表明该目录是 TypeScript 或 JavaScript 项目的根目录。 TSConfig 文件可以是 tsconfig.json 或 jsconfig.json，它们的配置项和行为相同。

Compiler Options

Top Level

- files
- extends
- include
- exclude
- references

### Files - files

Default： false

标记文件，如果文件较少可以使用这个配置

```json
{
  "compilerOptions": {},
  "files": [
    "core.ts",
    "sys.ts",
    "types.ts",
    "scanner.ts",
    "parser.ts",
    "utilities.ts",
    "binder.ts",
    "checker.ts",
    "tsc.ts"
  ]
}
```


### Extends - extends

extends 的值是一个字符串，其中包含要继承的另一个配置文件的路径

configs/base.json:

```json
{
  "compilerOptions": {
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
```

tsconfig.json:

```json
{
  "extends": "./configs/base",
  "files": ["main.ts", "supplemental.ts"]
}
```

### Include - include

包含的文件，默认[]如果files已指定

```json
{
  "include": ["src/**/*", "tests/**/*"]
}
```

包含的文件

```
.
├── scripts                ⨯
│   ├── lint.ts            ⨯
│   ├── update_deps.ts     ⨯
│   └── utils.ts           ⨯
├── src                    ✓
│   ├── client             ✓
│   │    ├── index.ts      ✓
│   │    └── utils.ts      ✓
│   ├── server             ✓
│   │    └── index.ts      ✓
├── tests                  ✓
│   ├── app.test.ts        ✓
│   ├── utils.ts           ✓
│   └── tests.d.ts         ✓
├── package.json
├── tsconfig.json
└── yarn.lock
```

### Exclude - exclude

指定解析包含时应跳过的文件名或模式数组，一般不用设置

Default: node_modules,bower_compon

### References - references

> Project references are a way to structure your TypeScript programs into smaller pieces. Using Project References can greatly improve build and editor interaction times, enforce logical separation between components, and organize your code in new and improved ways.

[Project References](https://www.typescriptlang.org/docs/handbook/project-references.html)

可以配置为单独的配置文件或包含tsconfig.json的目录

```json
{
  "references": [
    {
      "path": "./tsconfig.config.json"
    }
  ]
}
```
