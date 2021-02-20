class Student {
    fullName: string; //在次申明对象属性
    aaa: string;
    bbb: number;
    ccc: boolean;
    ddd: undefined;
    eee: null;
    fff: object;
    ggg: symbol;
    hhh: any;
    lll: number[];
    mmm: Array<any>;
    nnn: Array<number>;
    ooo: [string, number]; // 元组类型 Tuple
    ppp: () => {}; // 函数  返回对象
    qqq: () => string; // 函数  返回字符串
    rrr: () => void; // 函数  没有返回值
    // any 泛型
    // enum 枚举
    // void 没有任何类型 只能赋值null undefined
    // never 永不存在的值的类型  抛出异常 或者没有返回值的函数
    constructor(public firstName, public middleInitial, public lastName) {
        // public 相当于直接申明一个属性
        this.fullName = firstName + " " + middleInitial + " " + lastName;
        this.bbb = 2;
    }

    printName (name: string) {
        console.log(name)
        console.log(this.firstName)
    }
}

// 类型断言 类似其他语言的强制类型转换 只在编译阶段起作用
let someValue: any = "this is a string";
let strLength1: number = (<string>someValue).length // 尖括号
let strLength2: number = (someValue as string).length // as语法
// 使用 JSX 时  只允许使用 as 语法

interface Person { // 接口/注解 用来描述集合  赋值时，变量值和接口保持一致 不能多不能少
    firstName: string;
    lastName: string;
}

interface sub {
    testMore: string;
    commandline: string[] | string | (() => string); // 联合类型  只能赋值指定的类型，赋值其它类型就会报错
}

interface Son extends Person, sub{
    // 接口继承 可继承多接口   通过其他接口来扩展自己
    testExtend: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");
console.log(user);
user.printName(user.fullName);

// enum: 枚举类型,用于定义数值集合
// void: 用于标识方法返回值的类型，表示该方法没有返回值
// never: 代表不会出现的值

let CB: (fn: () => number) => string;
CB = (fn: () => number) => {
    fn()
    return 'ssss'
}

// 剩余参数
function restParams(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}
console.log(restParams('aaaa', 'bbbb'))
// 必传参数   
// 可选参数   
// 默认参数   若没有值 可用undefined替代
function paramsType(param4: number = 666, param1: string, param2?: number, param3 = 555) {
    console.log(param1)
    console.log(param2)
    console.log(param3)
    console.log(param4)
};
paramsType(undefined, 'a', 3)

// 函数重载
// 重载是方法名字相同，而参数不同，返回类型可以相同也可以不同, 每个重载的方法（或者构造函数）都必须有一个独一无二的参数类型列表。
// 参数不同  类型不同、数量不同、类型顺序不同
// function heavyLoad(param1: string): string;
// function heavyLoad(param1: number): number;
function heavyLoad(param1: string | number): string | number {
    if (typeof param1 === 'number') {
        return param1;
    } else if (typeof param1 === 'string') {
        return param1;
    }
}
heavyLoad('a')
heavyLoad(1)
document.body.innerHTML = greeter(user);

// 同一个文件夹下，其它文件里不能有同样的变量定义  declare
// 只要文件存在 import 或 export 关键字，都被视为 module
export {}
