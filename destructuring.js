// 解构赋值
// 1. 使用解构赋值从对象中分配变量
function getLength(str) {
    "use strict";
  
    // 在这行以下修改代码
    const { length : len } = str; // change this
    // 在这行以上修改代码
  
    return len; // 你必须在这行将 length 赋值给 len
  
  }
  
  console.log("字符串长度为："+getLength('FreeCodeCamp'));//返回12

// 2. 使用解构赋值从嵌套对象中分配变量
const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
  };
  
  function getMaxOfTmrw(forecast) {
    "use strict";
    // 在这行以下修改代码
    const { tomorrow : { max : maxOfTomorrow } }= forecast; // 改变这一行
    // 在这行以上修改代码
    return maxOfTomorrow;
  }
  
  console.log("获取最大值："+getMaxOfTmrw(LOCAL_FORECAST)); // 应该为 84.6

//   3. 使用解构赋值从数组中分配变量
  let a = 8, b = 6;
    (() => {
        "use strict";
        console.log(b)
        // 在这行以下修改代码
        const [ a1 , b1 ] = [ b , a ];
        [ a , b ] = [ a1 , b1 ];
        // 在这行以上修改代码
    })();
    console.log("a:"+a); // 应该等于 6
    console.log("b:"+b); // 应该等于 8

// 4. 使用解构赋值配合 rest 操作符来重新分配数组元素
    const source = [1,2,3,4,5,6,7,8,9,10];
    function removeFirstTwo(list) {
        "use strict";
        // 在这行以下修改代码
        const [a,b,...arr] = list; // change this
        // 在这行以上修改代码
        return arr;
    }
    const arr = removeFirstTwo(source);
    console.log(arr); // 应该为 [3,4,5,6,7,8,9,10]
    console.log(source); // 应该为 [1,2,3,4,5,6,7,8,9,10];

// 5. 使用解构赋值将对象作为函数的参数传递
  const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  const half = (function() {
    "use strict"; // 不要改变这行

    // 在这行以下修改代码
    const { max , min } = stats;
    return function half({ max , min }) {
      console.log("最大值 ：" + max)
      // 请在函数参数中使用解构赋值
      return (max + min) / 2.0;
    };
    // 在这行以上修改代码

  })();
  console.log("stats : " + stats); // 应该为 object
  console.log("最大值和最小值的平均值 : " + half(stats)); // 应该为 28.015
    