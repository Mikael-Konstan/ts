var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        // public 相当于直接申明一个属性
        this.fullName = firstName + " " + middleInitial + " " + lastName;
        this.bbb = 2;
    }
    Student.prototype.printName = function (name) {
        console.log(name);
        console.log(this.firstName);
    };
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
console.log(user);
user.printName(user.fullName);
// enum: 枚举类型,用于定义数值集合
// void: 用于标识方法返回值的类型，表示该方法没有返回值
// never: 代表不会出现的值
var CB;
CB = function (fn) {
    fn();
    return 'ssss';
};
// 类型断言 类似其他语言的强制类型转换
var someValue = "this is a string";
var strLength1 = someValue.length; // 尖括号
var strLength2 = someValue.length; // as语法
// 剩余参数
function restParams(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
console.log(restParams('aaaa', 'bbbb'));
// 必传参数   
// 可选参数   
// 默认参数   若没有值 可用undefined替代
function paramsType(param4, param1, param2, param3) {
    if (param4 === void 0) { param4 = 666; }
    if (param3 === void 0) { param3 = 555; }
    console.log(param1);
    console.log(param2);
    console.log(param3);
    console.log(param4);
}
;
paramsType(undefined, 'a', 3);
// 函数重载
// 重载是方法名字相同，而参数不同，返回类型可以相同也可以不同, 每个重载的方法（或者构造函数）都必须有一个独一无二的参数类型列表。
// 参数不同  类型不同、数量不同、类型顺序不同
// function heavyLoad(param1: string): string;
// function heavyLoad(param1: number): number;
function heavyLoad(param1) {
    if (typeof param1 === 'number') {
        return param1;
    }
    else if (typeof param1 === 'string') {
        return param1;
    }
}
heavyLoad('a');
heavyLoad(1);
document.body.innerHTML = greeter(user);
// 同一个文件夹下，其它文件里不能有同样的变量定义
// 只要文件存在 import 或 export 关键字，都被视为 module
// export {}
