function Counter() {
  this.value = 0;
  this.add = amount => {
    this.value += amount; // 이 함수의 this - 화살표함수의 this는 정적
  };
}

const counter = new Counter();
console.log(counter.value);
counter.add(5);
console.log(counter.value);
const add = counter.add;
add(5); //  화살표함수의 this는 화살표함수가 생성될 당시 
console.log(counter.value);


function Counter2() {
  this.value = 0;
  this.add = function (amount) {
    this.value += amount;
     console.log(this === global) // true
  }
}

const counter2 = new Counter2();
console.log(counter2.value);
counter2.add(5); // counter2가 이 함수를 호출한 주체
console.log(counter2.value);
const add2 = counter.add;
add2(5); //  따로 주체가  없음 => 이럴땐 전역객체를 가르킴(global객체)
console.log(counter.value); // 10이 아니라 5가나옴 왜냐면 일반함수에서는 this가 value를 가르키는게아니기때문에
                          // 일반함수의 this는 이함수를 호출한 주체를 가르킴


  // ----------------------------

  class Counter3 { // class여도 일반함수로 정의햇을때 동적으로 this/ 화살표함수면 counter3클래스의 객체를 가르킴
    value = 0;
    add(amount) {
      this.value += amount;
    }
  }

  /////////////////////////////////////

  const counter3 = {
    value : 0,
    add: function (amount) {
      this.value += amount;
    }
    // add: (amount) => {
  //     this.value += amount;
  // } 이건 전부다 0이나옴 why? 화살표함수가 생성될 당시의 this는 
   // } 이 화살표함수를 감싸고 있는 일반 함수가 없기때문에 항상 전역객체를 가르킴
  }

  console.log(counter3.value);
  counter3.add(5);
  console.log(counter3.value);
  const add3 = counter3.add;
  add3(5);
  console.log(counter3.value);
  // 일반함수를 사용했을때처럼 마지막에 5출력