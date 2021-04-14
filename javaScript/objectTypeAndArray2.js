const obj = {
  age: 21,
  name: 'mike'
};

const obj2 = {...obj}


obj.city = 'seoul';
obj.age = 30;
console.log(obj);
console.log(obj2)

delete obj.city;
console.log(obj);

delete obj['name'];
console.log(obj);

