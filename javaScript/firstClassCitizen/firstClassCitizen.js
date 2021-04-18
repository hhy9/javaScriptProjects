// 일급함수
// 함수가 다른 변수처럼 취급되면 그 언어는 일급 함수를 갖고있다.
// 변수에 넣을수있고 매개변수로 받을수도있고 함수안에서 또 다른 함수를 반환할수있음.

const add10 = function (a) {
  return 10 + b;
};

const apply = ( arr, op ) => {
  return arr.map(op);
}

apply([1, 2, 3], add10);

const makeAdd = (v1) => {
   return function(v2) {
      return v1 + v2; // 클로저가 없엇다면 v1사용하지못함 왜냐면 v1은 이 함수가 실행을 끝내면 없어지기때문에
   }
}

const add3 = makeAdd(3);
console.log(add3(10));
const add7 = makeAdd(7);
console.log(add7(10));

// ---------------------------클로저는 함수와 그 함수를 둘러싸고있는 주변의 상태를 기억
// 함수안에 또 함수가잇는경우 클로저를 사용 -> 클로저 덕분에 내부 함수는 외부 함수의 지역변수와 매개변수에 접근가능
// 함수의 지역변수와 매개변수는 함수가 실행되는데만 존재 자바스크립트에서는 클로저가 있기때문에 그렇지않음


// 콜스택에 저장 함수가 실행을 종료하면 콜스택에서 이전에 마지막으로 실행했던 함수의 정보를 꺼내옴
// 콜스택에 담기는 실행정보를 execution context
const f1 = () =>{
   const v1 = 123; // lexical enviroment {변수이름:값} {v1:123} 이러한 map을 만들어줌
   console.log(v1);
}

const v2 = 456;
const f2 = () => {
   f1();
   console.log(v2);
}

f2();

//----------------------------------

const main = () => {
   let v = 0;
   const f1 = () => {
     v++;
     console.log(v)
   }
   const f2 = () =>{
     v++;
     console.log(v);
   }
   return {f1, f2};
}

const obj = main();
obj.f1();
obj.f2();
obj.f1();
obj.f2();
// 4번 호출하면 결과적으로 값은 4가됨 - lexical environment의 환경은 서로 공유하므로



