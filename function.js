// 在 ES5 中，当我们需要在对象中定义一个函数的时候，我们必须如下面这般使用function关键字：

const person1 = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
// 在 ES6 语法的对象中定义函数的时候，你可以完全删除function关键字和冒号。请看以下例子：

const person2 = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};

// 问题： 使用以上这种简短的语法，重构在bicycle对象中的setGear函数

// 在这行以下修改代码
const bicycle = {
    gear: 2,
    setGear(newGear) {
      "use strict";
      this.gear = newGear;
    }
  };
  // 在这行以上修改代码
  bicycle.setGear(3);
  console.log(bicycle.gear);

//   2. 使用 class 语法定义构造函数

/* 
ES6 提供了一个新的创建对象的语法，使用关键字class。

值得注意的是，class只是一个语法糖，它并不像 Java、Python 或者 Ruby 这一类的语言一样，严格履行了面向对象的开发规范。

在 ES5 里面，我们通常会定义一个构造函数，然后使用 new关键字来实例化一个对象：
*/

var SpaceShuttle1 = function(targetPlanet){
  this.targetPlanet = targetPlanet;
  console.log(targetPlanet);
}
var zeus = new SpaceShuttle1('Jupiter');
// class的语法只是简单地替换了构造函数的写法：

class SpaceShuttle2 {
  constructor(targetPlanet){
    this.targetPlanet = targetPlanet;
    console.log(targetPlanet);
  }
}
const zeus = new SpaceShuttle2('Jupiter');
// 注意class关键字声明了一个新的函数，并在其中添加了一个会在使用new关键字创建新对象时调用的构造函数


// 问题：使用class关键字，并写出正确的构造函数，来创建Vegetable这个类：

// Vegetable这个类可以创建 vegetable 对象，这个对象拥有一个在构造函数中赋值的name属性。

