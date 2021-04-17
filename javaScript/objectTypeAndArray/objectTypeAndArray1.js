
const obj2 = new Object({
  age: 21,
  name: 'mike'
});


console.log(Object.keys(obj)); // 키를 배열로 반환
console.log(Object.values(obj)); // 모든 값을 배열로 반환
console.log(Object.entries(obj)); // key:value 반환 튜플형식으로

const obj = {
  age: 21,
  name: 'mike'
};
for(const [key,value] of Object.entries(obj)){
  console.log(key,value)
  console.log(value)
  // age 21
  // name mike
}

