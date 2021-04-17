const arr = [1,2,3];

arr.forEach(item=> console.log(item));
for(const item of arr) {
  console.log(item);
}

console.log(arr.some(item => item === 2)); // 하나라도 만족하면 true 
console.log(arr.every(item => item === 2)); // 모든 아이템에 대해서 오른쪽의 조건을 만족해야 하기때문에 지금은 false가 반환될것
console.log(arr.includes(2));
console.log(arr.find(item => item % 2 === 1)); // 오른족의 조건을 만족하는 첫번째 아이템 반환
console.log(arr.findIndex(item => item % 2 === 1));