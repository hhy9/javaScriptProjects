async function getData() {
   return 123;
}
getData().then(data => console.log(data));


// -----------------------------------

async function getData() {
   return Promise.resolve(123);
}

getData()
  .then(data => console.log('fulfiled',data))
  .catch(data=> console.log('rejected',data));

  //---------------------------

  function requestData(value) {
     return new Promise(resolve =>
        setTimeout(()=> {
          console.log('requestData:',value);
          resolve(value);
        },1000)
        )
  }

  async function printData() {
     const data1 = await requestData(10); // await로 비동기처리를 기다리면서 동기방식으로 처리가능 await는 settled상태가 될때까지 기다림
     const data2 = await requestData(20);
     console.log(data1,data2);
  }
  printData();

  // ------------------------------

  async function getData() {
     console.log('getData 1');
     await Promise.reject(); // 여기서 rejected로 catch부분 실행되기때문에 밑에는 실행되지않음 
     console.log('getData 2');
     await Promise.resolve();
     console.log('getData 3')
  }

  getData()
    .then(()=> console.log('fulfilled'))
    .catch(error => console.log('rejected'));

  // -----------------------

  function getDataPromise() {
     asyncFunc1()
     .then(data =>{
       console.log(data);
       return asyncFunc2();
     })
     .then(data => {
        console.log(data);
     })
  }

  async function getDataAsync() { // then메서드를 사용할 필요 없기때문에 좀더 간단
     const data1 = await asyncFunc1();
     console.log(data1);
     const data2 = await asyncFunc2();
     console.log(data2);
  }


  // --------------비동기함수간의 의존성이 높아질수록  async await가독성 차이가남

  function getDataPromise() {
     return asyncFunc1()
     .then(data1 => Promise.all([data1, asyncFunc2(data1)]))
     .then(([data1, data2])=> {
        return asyncFunc3(data1, data2);
     });
  }

  async function getDataAsync() {
     const data1 = await asyncFunc1();
     const data2 = await asyncFunc2(data1);
     return asyncFunc3(data1, data2);
  }

  // ----------------------------------------
  // 여러 비동기함수를 병렬로 처리하는 방법

  async function getData() { // 두함수사이ㅔㅇ 의존성이 없다면 동시실행이 더빠름 
     const data1 = await asyncFunc1();
     const data2 = await asyncFunc2();
  }

  // promise객체는 생성과 동시에 비동기 코드가 실행됨

  function asyncFunc1() {
     return new Promise(resolve => {
        console.log('처리중 1');
        setTimeout(()=> {
           resolve(10);
        }, 1000);
     })
  }

  function asyncFunc2() {
     return new Promise(resolve => {
        console.log('처리중 2');
        setTimeout(()=> {
           resolve(20);

        },1000);
     })
  }

  async function getData() {
     const p1 = asyncFunc1();
     const p2 = asyncFunc2(); // promise객체 먼저생성
     const data1 = await p1; // await 키워드를 나중에쓰면 병렬로 실행됨 
     const data2 = await p2;
     console.log({ data1, data2 });
  }
  getData();

// ======================================
async function getData() { // 병렬로 처리 
  const [data1, data2 ] = await Promise.all([asyncFunc1(), asyncFunc2()]);
  // ...
}

// ----------------------

// async await함수 내부에서 발생하는 예외는
// try catch문으로 처리하는게 좋음

async function getData() { // 만약 getData함수가 async await함수가 아니었다면 doAsync함수에서 발생하는 예외는 catch문에서 처리되지않음 => doAsync함수의 처리가 끝나는 시점을 알수 없으므로
   try {
     await doAsync(); // 비동기함수와
     return doAsync(); // 동기함수 모두 호출 
   }catch (error) { // 두 함수에서 발생하는 모든 예외가 catch문에서 처리됨 
      console.log(error);
      return Promise.reject(error)
   }
}

// ---------------------------

class ThenableExample {
   then(resolve, reject) {
      setTimeout(() => resolve(123), 1000);
   }
}

async function asyncFunc() {
   const result = await new ThenableExample(); // promise처럼 동작함 
   console.log(result);
}

asyncFunc(); 