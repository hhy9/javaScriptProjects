const arr = [1, 2];
const [a, b] = arr;
console.log(a);
console.log(b);

// ------------------------

let a, b;
[a, b] = [1, 2];

// ---------------------

const arr = [1];
const [a = 10, b = 20] = arr;
console.log({ a, b });

// -----------------------

let a = 1;
let b = 2;
[a, b] = [b, a];
console.log({ a, b });

// -------------------

const arr = [1, 2, 3];
const [a, , c] = arr;
console.log({a, c});

// ------------

const arr = [1, 2, 3];
const [first, ...rest1] = arr;
console.log(rest1); // [2 , 3]
const [a, b, c, ...rest2] = arr;
console.log(rest2) // []

// ------------------------------

const obj = { age: 21, name: 'mike' };
const { age, name } = obj;
console.log({ age, name });

// --------------------------------

const obj = { age: 21, name: 'mike' };
const { age, name } = obj;
const { name, age } = obj;
const { a, b } = obj; // 이러면 undefined;

// ----------------------------

const obj = { age: 21, name: 'mike' };
const {age: theAge, name} = obj;
console.log(theAge); 
console.log(age); // 에러

// -----------------------------

// 원래 값이 undefined인 경우만 기본값이 할당됨. null인경우엔 할당되지않음.
const obj = { age: undefined, name: null, grade: 'A'};
const { age = 0, name = 'noName', grade = 'F' } = obj;
console.log({ age, name, grade });

//----------------------------

const obj = { age: undefined, name: 'mike' };
const { age: theAge = 0, name} = obj;

// ------------------------------

// 기본값이 사용될때만 함수가 호출됨

const getDefaultAge = () => {
   console.log('hello');
   return 0;
}

const obj = { age: 21, grade: 'A'};
const { age = getDefaultAge(), grade } = obj;
console.log(age);

// ----------------------------------

const obj = { age: 21, name: 'mike', grade: 'A'};
const { age, ...rest } = obj;
console.log(rest);

// --------------------------------

const people = [
   { age: 21, name: 'mike' },
   { age: 51, name: 'sara' }
];

for (const { age, name } of people ) {
   // ...
}

// ----------------------------

 const obj = { name: 'mike', mother: { name: 'sara' } };
 const {
    name,
    mother: { name: motherName },
 } = obj;
 console.log({ name, motherName });
 console.log(mother) // 에러

 // --------------------------

 // 왼쪽에는 첫번째 아이템 / 그래서 [] 아이템이 비었기때문에 123이 들어감
 const [{ prop: x } = { prop: 123 }] = [];
 console.log(x);

 // {} 객체가 하나있어서 기본값이 적용되지않으나 prop이라는 속성값이 있으니 undefined;
 const [{ prop: x } = { prop: 123 }] = [{}];
 console.log(x);

 // ---------------------------------------

 // 계산된속성명 활용 별칭사용 
const index = 1;
const { [`key${index}`]: valueOfTheIndex } = { key1: 123 };
console.log(valueOfTheIndex);

// -------------------------------------

 const obj = {};
 const arr = [];
 ({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });
 console.log(obj); // { prop: 123 }
 console.log(arr); // [ true ]


 // ---------------------------------------