const name = 'mike';
const obj = {
  age: 21,
  name,
  getName() {
    return this.name;
  }
}

// 단축 속성명 shorthand property names

const makePerson1 = (age, name) => {
  return { age:age, name:name };
}

const makePerson2 = (age, name) => {
  return { age,name }
}

console.log(makePerson1(1,"test"))
console.log(makePerson2(1,"test"))

// -----------------------------------------
const name = 'mike';
const age = 21;

console.log( name, age );
console.log( 'name =', name,', age =',age );
console.log({ name, age })

// ---------------------------------
// computed property names
const makeObject1 = (key, value) => {
  const obj ={};
  obj[key] = value;
  return obj;
}

const makeObject2 = (key, value) => {
  return { [key]: value };
}

console.log(makeObject1("test",1))
console.log(makeObject2("test2",2))
console.log(makeObject2("test3",2))

// -----------------------------------
Math.max(1, 3, 7, 9);
const numbers = [1, 3, 7, 9];
Math.max(...numbers);

// ---------------------------------------

[1, ...[2, 3], 4]; 
new Date(...[2018, 11, 24]);