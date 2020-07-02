// 初始化变量
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// 复制 collection 以便测试
var collectionCopy = JSON.parse(JSON.stringify(collection));

// 请把你的代码写在这条注释以下
function updateRecords(id, prop, value) {
  var obj = collection[id];
  while(!obj.hasOwnProperty(prop)){
    if(prop == 'tracks'){
      obj[prop] = [];
    }else{
      obj[prop] = '';
    }
  }
  if(value != null && value != []){
      console.log(value)
    obj[prop] = value;
  }else{
    delete obj[prop];
  }
  console.log(collection[5439].hasOwnProperty('tracks'));
  return collection;
}

// 你可以修改这一行来测试你的代码
updateRecords(5439, "tracks", "");
