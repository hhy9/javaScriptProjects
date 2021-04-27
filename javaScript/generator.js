// 제너레이터 실행을 멈출때 값을 전달할수있음

function* f1() {
  yield 10;
  yield 20;
  return 'finished';
}

const gen = f1();
// 제너레이터는 배열과 달리 값을 미리 만들어놓지 않음
// 필요한 순간에 값을 계산해서 전달 가능->메모리 측면에서 효율적

function* f1() {
  console.log('f1-1');
  yield 10; // yield는 제너레이터가 멈춤 
  console.log('f1-2');
  yield 20;
  console.log('f1-3');
  return 'finished'; // return은 done을 true로 만듬 { value:finished,done:true}
}

const get = f1();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

console.log(gen.next());
console.log(gen.return('abc')); //반환값이 true
console.log(gen.next());


function* f1() {
  try {
    console.log('f1-1');
    yield 10; // yield는 제너레이터가 멈춤 
    console.log('f1-2');
    yield 20;

  } catch (e) {
    console.log('f1-catch',e);
    yield 30;
    console.log('f1-3');
    yield 40;
    console.log('f1-4');
  }
}

const get = f1();

console.log(gen.next());
console.log(gen.throw('some error')); // 예외처리가능
console.log(gen.next());


// 제너레이터 객체는 iterable이면서 iteraotr임

const arr = [10, 20, 30];
const iter = arr[Symbol.iterator]();
console.log(iter.next());

//iterator 조건
// next메서드를 갖고있다.
// next메서드는 value와 done속성값을 가진 객체를 반환한다.
// done 속성값은 작업이 끝났을 때 참이 된다.

// iterable 조건 -반복가능한 객체// 대표적 예 -배열
// Symbol.iterator 속성값으로 함수를 갖고있다.
// 해당 함수를 호출하면 iterator를 반환한다.

function* f1() {
  // ...
}

const gen = f1();
console.log(gen[Symbol.iterator]() === gen);

// 제너레이터 객체가 iterable이라는것을 보여줌
// 제너레이터 객체는 iterator

function* f1() {
   yield 10;
   yield 20;
   yield 30;
}

for (const v of f1()) {
   console.log(v);
}

const arr = [...f1()];
console.log(arr);
//done 속성값이 true가될때까지 펼침
