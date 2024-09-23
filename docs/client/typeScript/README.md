# 基础笔记一

## 基础类型易错点

1. 元组Tuple

```js
let x: [string, number]
// 当访问一个越界的元素，会使用联合类型代替
console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString
x[6] = true;   // Error,布尔不是（string | number）类型
```

2. Never

never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。即使any也不可以赋值给never

```js
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

```

3. Object
object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。

使用object类型，就可以更好的表示像Object.create这样的API。例如：

```js
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error
```

## 变量易错点

1. 对象展开比数组复杂的多

```js
let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { food: "rich", ...defaults };
```

name，defaults里的food属性会重写`food: "rich"`，再这里并不是我们呢想要的结果

2.  对象展开还有一些意想不到的限制。首先，它仅包含对象自身的可枚举属性。大体上是说当你展开一个对象实例是，你会丢失其方法

```js
class C {
  p = 12;
  m() {
  }
}
let c = new C();
let clone = { ...c };
clone.p; // ok
clone.m(); // error!

```

3. 在结构属性上基于一个默认或可选的属性用来替换主初始化列表，要知道`C`的定义又一个`b`是可选属性

```js
function f({ a, b = 0 } = { a: "" }): void {
    // ...
}
f({ a: "yes" }); // ok, default b = 0
f(); // ok, default to {a: ""}, which then defaults b = 0
f({}); // error, 'a' is required if you supply an argument
```

## 接口

1. 只读属性

TypeScript具有`ReadonlyArray<T>`类型，它与`Array<T>`相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改：

```js
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
a = ro; // error!
```

上面代码的最后一行，可以看到就算把整个ReadonlyArray赋值到一个普通数组也是不可以的。但是你可以用类型断言重写

```js
a = ro as number[];
```


**readonly vs const**
最简单判断该用`readonly`还是`const`的方法是看把它作为变量使用还是作为一个属性，作为变量使用的话用`const`，若作为属性则使用`readonly`

2. 额外的属性检查

```js
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    // ...
}

// error: 'colour' not expected in type 'SquareConfig'
let mySquare = createSquare({ colour: "red", width: 100 });
```

如果一个对象字面量存在任何“目标类型”不包含的属性时，你会得到一个错误

绕开这些检查非常简单

- 方法一：最简单的方法就是适用类型断言

```js
let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);
```

- 方法二：最佳的方式时能够添加一个字符串**索引签名**，前提时你能够确定这个兑现更可能具有某些作为特殊用途使用的额外属性，如果`SequareConfig`带有上面定义的类型的`color`和`width`属性，并且还会带有任意数量的其他属性，那么我们可以这样定义它：

```js
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}
```

- 方法三：它就是将这个对象赋值给另一个变量：因为`squareOptions`不会经过额外属性检查，所以编译器不会报错。

```js
let squareOptions = { colour: "red", width: 100 };
let mySquare = createSquare(squareOptions);
```


3. 可索引的类型

TypeScript支持两种索引签名：字符串和数字。可以同时使用两种类型的索引，***但是数字索引的返回值必须是字符串索引返回值类型的子类型。***这是因为当使用`number`来索引时，JavaScript会将它转换成`string`然后再去索引对象。也就是说用`100`（一个`number`）去索引等同于使用`“100”`(一个`string`)去索引，因此两者需要保持一致/

```js
class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}

// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
interface NotOkay {
    [x: number]: Animal;
    [x: string]: Dog;
}
```

字符串索引签名能够 很好的描述dictionary模式，并且他们也会确保所有属性与其返回值类型匹配。因为字符串索引声明了obj.property和obj["property"]两种形式都可以。下面的例子里，name的类型与字符串索引类型不匹配，所以类型检查器给出一个错误提示：

```js
interface NumberDictionary {
  [index: string]: number;
  length: number;    // 可以，length是number类型
  name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
}
```

4. 类静态部分和实例部分的区别

当你操作类和接口的时候，你要知道累屎具有两个类型的：静态部分的类型和实例的类型。你会注意到，当你用构造器签名去定义一个接口并试图定义一个类去实现这个接口时会得到一个错误：

```js
interface ClockConstructor {
    new (hour: number, minute: number);
}

class Clock implements ClockConstructor {
    currentTime: Date;
    constructor(h: number, m: number) { }
}
```

这里因为当一个类实现了一个接口时，只对其实例部分进行类型检查。constructor存在于类的静态部分，所以不再检查的范围内。


5. 接口继承类

当接口继承了一个类类型时，它会继承类的成员但不包括其实现。九号嫌犯个借口声明了所有类中存在的成员，但并没有提供实现一样。这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现（implement）

```js
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}

// 错误：“Image”类型缺少“state”属性。
class Image implements SelectableControl {
    select() { }
}

class Location {

}
```
