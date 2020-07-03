// ES5 : apply从数组中获取最大值
let max = Math.max.apply(Math,[1,2,3]);
console.log(max);

// ES6
let max2 = Math.max(...[1,2,3]);
console.log(max2);