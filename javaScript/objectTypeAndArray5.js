const arr = [1,2,3];

//배열을 스택처럼
arr.push(4);
console.log(arr.pop());
console.log(arr);

arr.splice(1,1);// 첫번재는 인덱스 ,삭제할갯수
console.log(arr);
arr.splice(1,0,10,20,30); // 세번째이후로는 추가할 아이템을 나열
console.log(arr);
arr.splice(1,3,40,50);
console.log(arr);

const arr2 = [...arr];
 arr.sort();// 오름차순 기존배열을 수정
console.log(arr);
arr2.sort();
console.log(arr2)
arr.sort((a,b)=>(a%10)-(b%10)); // 이 함수에서 음수를 반환하면 a,b의 순서를 변경하지 않겠다는 의미 양수를 반환하면 a,b의 순서를 변경하겠다는 의미
                      // 10으로 나누는것만 보기때문에 1의자리숫자만 보겟다는 의미
console.log(arr);