// 正则表达式

// 1. 使用测试方法 RegExp.test(str)

let myString = "Hello, World!";
let myRegex = /Hello/;
let myRegExp = /wa/;

// 检测字符串myString是否符合正则表达式myRegex定义的规则。
let result1 = myRegex.test(myString);
let result2 = myRegExp.test(myString);

// 打印结果
console.log("myString中有 Hello 这个词吗：" + result1);//true
console.log("myString中有 wa 这个词吗：" + result2);//false


// 2. 同时用多种模式匹配文字字符串

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // 修改这一行
let result3 = petRegex.test(petString);

console.log("petString中有 dog或cat或bird或fish 这些词吗：" + result3);//true