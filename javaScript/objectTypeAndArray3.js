const arr = [1,2,3];
const arr2 = new Array(1,2,3);
console.log(typeof arr === 'object'); // array의 타입은 object이므로 
console.log(Object.values(arr)); // object생성자의 함수를 이용할수있음.

console.log(arr.map(item=>item+1));
console.log(arr.filter(item => item >=2)); // 오른쪽에 있는 조건을 만족하는 아이템만 새로운 배여롤 만들어 줌 기존배열은 건들지않음
console.log(arr.reduce((acc,item)=> acc+item,0)) // 오른쪽에 있는 값부터 시작해서 acc+item이란 연산을 사용해서 최종적으로 하나의 값을 반환 acc에는 누적된값이 계속 들어감.