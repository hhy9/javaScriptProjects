const printLog = ( a = 1) => {
   console.log({ a });
}

printLog();
printLog(3);

// ------------------

const getDefault = () =>{
   console.log('called getDefault');
   return 1;
}

const printLogo = (a = getDefault()) =>{
  console.log({ a });
}

printLog();
printLog(3);

// -------------------------------

// 반드시 입력해야하는 매개변수
const required = () => {
  throw new Error('no parameter'); // 예외처리
}

const printLog = ( a = required()) => {
  console.log({ a })
}

printLog(10);
printLog();

// ---------------------------------

const printLog = (a, ...rest)  => {
   console.log( {a, rest });
}

printLog(1, 2, 3);
// restParameter

const getValues1 = ( numbers, greaterThan, lessThan ) => {
   return numbers.filter(item => greaterThan < item && item < lessThan);
}

const getValues2 = ( {numbers, greaterThan, lessThan }) => {
   return numbers.filter(item => greaterThan < item && item < lessThan);
}

const numbers = [10, 20, 30, 40];
const result1 = getValues1(numbers, 5, 25);
const result2 = getValues2({ numbers, greaterThan: 5, lessThan: 25});

console.log({ numbers, greaterThan: 15 }) // 입력하고싶은것만 입력하면됨
// ---------------------------------------------

const f1 = ({ p1, p3, ...rest }) => {
   console.log({ p1, p3, rest});
}

f1({ p1:'a', p2: 'b', p3: 'c', p4:'d'});
f1({ p1:'a', p3: 'b' });

// ------------------------------------------
// 화살표 함수 
const add = (a, b) => a + b;
const add5 = a => a+5;
const addAndReturnObject = (a, b) => ({ result: a + b});

// 화살표함수에 여러줄의 코드가 필요하다면

const add = (a, b) => {
   if ( a <= 0 || b <= 0 ) {
     throw new Error('must be positive number');
   }
   // 이경우에 return값을 사용해야함 중괄호가 있으므로
   return a + b;
};

// -------------------------------
// 화살표함수가 일반함수와 다른점은 this 와 arguments가 바인딩되지 않는다는 점
// 따라서 화살표함수에서 arguments가 필요하다면 나머지 매개변수를 이용(...rest)
const printLog = (...rest) => console.log(rest);
printLog(1, 2);