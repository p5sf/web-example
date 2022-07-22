// 获取无限嵌套属性值
const data = {
  a:{
    b:{
      c:1,
      d:2,
    }
  }
}
// const fn = (data,attr) =>{
//   if (!attr.includes("/")) {
//     return data[attr]
//   }else {
//     const arr = attr.split("/")
//     const cur = arr[0];
//     const currAttr = arr.slice(1).join("/");
//     return fn(data[cur], currAttr);
//   }
// }

const fn = (data, attr) => attr.split('/').reduce((obj, key) => obj[key], data)

const result = fn(data,"a/b")
const result1 = fn(data,"a")
console.log(result1)
