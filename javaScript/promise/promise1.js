// 자바스크립트에서 비동기 처리를 하는 방식은 콜백 패턴과 promise

const requestData = (callback) => {
   setTimeout(()=> {
      callback({name:'abc', age:23})
   }, 1000);
} // 콜백패턴

const onSucess = (data) => {
   console.log(data) // 1초 후 실행
}

console.log('call requestData');
requestData(onSucess);

// ----------------------------------

// 콜백패턴 - 비동기처리 함수 1
const requestData1 = (callback) => {
    // ...
    callback(data);
}

// 비동기 처리함수 2
const requestData2 = (callback) => {
  // ...
  callback(data);
}


const onSuccess1 = (data) => {
   console.log(data);
   requestData2(onSucess2);
}

const onSucess2 = (data) => {
   console.log(data)
}

requestData1(onSuccess1) // 첫번째 비동기함수(콜백함수)

// promise는 비동기상태를 값으로 다룰수 있는 객체로 
// promise를 사용하면 비동기 프로그래밍을 할때 동기 프로그래밍 방식으로 코드를 작성할 수 있습니다.
requestData1() // 비동기함수 호출
  .then(data => { // 그 처리가끝나면 data를 받아서 필요한 처리를 함
      console.log(data);
      return requestData2(); // 두번째 함수를 호출해서 두번째 비동기처리가 끝나면 
  })
  .then(data => {
    console.log(data); // 데이터를 받아서 처리를 함 
    // ...
  });

  // -------------------------------------------------------------

// promise객체는 3가지 방식으로 생성가능

const p1 = new Promise((resolve,reject)=>{
   // 이 안에서 비동기 처리가끝나면 두 함수중 하나를 호출 (resolve,reject) 비동기 처리가 끝낫다는것을 알려줌 
}); // 두개의 매개변수는 모두 함수 
const p2 = Promise.reject('error message'); // reject상태인 promise객체가 만들어짐
const p3 = Promise.resolve(param) // fulfilled상태인 promise객체가 만들어짐 
// promise의 객체는 상태말고 데이터를 가질수있음 param, error message들이 데이터 


// promise객체는 3개의 상태를 가질수있음
// 대기중(pending) - 비동기처리가 끝나지 않았을때
// 성공 (fulfilled) - 비동기처리가 끝나고 성공했을때 
// 실패 (rejected) - 실패했을때
// fulfilled 또는 rejected상태를 settled상태라고 부름 

//new 키워드를 사용했을때는 처음에 pending상태가됨 그리고 이 두 함수중에 하나를 호출하기 전에는 상태가 변경되지 않음 
// resolve를 호출하면 fulfilled상태 
// reject를 호출하면 reject상태 



// promise객체는 then메서드를 가지고있음
requestData().then(onResolve, onRejct);
// promise상태가 fulfiled가 되면 onResolve,,첫번째 함수가 호출됨
Promise.resolve(123).then(data=> console.log(data));
Promise.reject('error').then(null, data => console.log(data));


const requestData1 =() => {
   return new Promise((resolve, reject)=> {
      setTimeout(()=> {
         resolve(10);
      },1000)
   })
}

const requestData2 = () => {
   return new Promise((resolve,reject)=> {
      setTimeout(()=> {
        resolve(20);
      },1000)
   })
}

//then으로 연결가능 비동기처리함수 
requestData1() // 프로미스를 반환하는 함수 여기서 비동기처리가 끝나면 
  .then(data => { // then 메서드가 항상 프로미스 객체를 반환함 데이터를 받아서 필요한 처리를 함 
     console.log(data);
     return requestData2();
  })
  .then(data => {
    console.log(data);
    return data + 1; // then메서드는 이값을 데이터로 하는 Promise객체를 반환함 그리고 상태는 fulfiled상태가 됨.
  })
  .then(data => {
    console.log(data);
    throw new Error('some error'); // 에러를 발생시킴-> then메서드는 이값을 데이터로 하는 promise객체를 반환함 rejected상태 호출
  })
  .then(null, error => {
     console.log('error!!!'); // undefined반환 undefined로 하는 promise객체를 반환 상태는 fulfilled
  })
  .then(data=>{
    console.log(data); //그래서 undefined를 받아서 처리함 
  })

  // -------------------------------
  Promise.reject('err')
    .then(()=> console.log('then1'))
    .then(()=> console.log('then2'))
    .then(
      ()=> console.log('then3'),
      ()=> console.log('then4') // 두번째 함수로 정의된 이부분을 반환 - return하는게 없으니 undefined를 fulfilled상태로 반환
    )
    .then(
      ()=> console.log('then5'), // fulfilled이므로 이부분 반환
      ()=> console.log('then6')
    )

    // ----------------------------------

    Promise.reject(1).then(null, error => {
        console.log(error);
    })

    Promise.reject(1).catch(error => {
       console.log(error)
    });

    // -------------------------

    Promise.resolve().then(
      () => {
         throw new Error('some error')
      }, //여기서 에러를 던져도 밑에 함수가 실행되지않음 
      error => {
        console.log(error)
      }
    ) // 여기서 .then해주고 그다음에 처리해야함 

  // 그러므로 이렇게 작성해야함
  Promise.resolve()
      .then(()=>{ 
        throw new Error('some error');
      })
      .catch(error => {
         console.log(error); // 위에서 던진에러도 여기서 처리
      })

  //catch도 promise객체반환
// 따라서 catch이후에도 then사용가능 
  Promise.reject(10)
      .then(data => {// reject니까 이부분 생략 
         console.log('then1',data);
         return 20;
      })
      .catch(data=> {
         console.log('catch:', data);
         return 30; // 30으로 하는 promise객체 출력 fulfilled로 
      })
      .then(data=> {
         console.log('then2:',data)
      })

    // ---------------------------------

    Promise.resolve(10)
      .then(data => {
         console.log('onThen',data);
         return data + 1;
      })
      .catch(error => {
         console.log('onCatch');
         return 100;
      })
      .finally(()=> { // finally에는 데이터가 넘어오지않고 이전에 넘어온값을 그대로 반환 return 소용 없음 
         console.log('onFinally');
      })
      .then(data => {
         console.log('onThen', data);
         return data + 1;
      })
    
      //----------------
      const requestData = () =>{
         return fetch() // 서버와 통신 
          .catch(error=>{ // 에러면 여기서 처리
             //...
             //return null; 만약 여기서 이렇게입력했다면 서버통신에 에러가 낫을때 null이 넘어옴 
          })
          .finally(()=> {
            sendLogToServer('requestData finished');
          })
      }
      requestData().then(data => console.log(data))

      // -------------------------------

      requestData1() // 각각의 처리가 병렬로 처리되지않음 
         .then(data => {
             console.log(data);
             return requestData2();
         })
         .then(data => {
             console.log(data);
         })

   
      requestData1().then(data => console.log(data));
      requestData2().then(data => console.log(data));
      // 이제 2번함수를 1번함수를 기다리지않음 
      // 두비동기처리는 거의 동시에 처리함

      // 여러 promise를 병렬로 처리하고싶을땐
      Promise.all([requestData1(), requestData2()]).then(([data1,data2]) => {
          console.log(data1,data2)
      }) // 배열에 원하는 갯수만큼 객체입력
      // 입력된 모든 객체가 fulfilled상태가되어야 then


      Promise.race([ // 여러개의 promise중에서 가장빨리 settled상태가된 promise를 반환
         requestData(), // 이게 늦게실행되면 reject가 실행
         new Promise((_, reject)=> setTimeout(reject, 3000))
      ])
      .then(data => console.log('fulfilled',data))
      .catch(error => console.log('rejected'));

      // --------------------------

      let cachedPromise;
      function getData() {
         cachedPromise = cachedPromise || requestData();
         return cachedPromise;
      }
      // promise를 이용하여 데이터 캐싱을 구현함
      getData().then( v => console.log(v));
      // 처음에 호출할때 requestData 실행 => promise객체가 만들어지고
      // 그것이 캐싱이됨

      getData().then( v => console.log(v));
      // 그리고 두번째 호출하면 캐싱되었던 promise가
      // 그대로 가져옴

      // ------------------------------
      Promise.resolve(10)
         .then(data => {
               console.log(data);
               Promise.resolve(20);// return 을 안하면 밑에서 undefined
         })
         .then(data => {
               console.log(data) 
         })

         // -----------------------
  
         // then메서드는 기존 객체를 수정하지않고 
         // 새로운 promise객체를 반환
   function requestData() {
       const p = Promise.resolve(10);
       p.then(data=> {
           return data + 20;
       }) // then을 사용후
       return p; //  이전 promise객체를 반환 그러나 이러면 10이출력됨

       // return p.then(data => {
      //       return data+20;
      //  }) 이렇게 사용해야함
   }

   requestData().then(v => {
       console.log(v);
   })

   // -------------------------------------------

// 중첩해서 사용 x
      requestData1() 
         .then(result => {
             return requestData2(result).then(result2 => {
                 console.log({ result2 });
             });
         })
         .then( ()=> {
             console.log('end');
         })

  // 이렇게 연결하여 사용 
         requestData1() 
         .then(result => {
             return requestData2(result)
         }).then(result2 => {
            console.log({ result2 });
        })
         .then( ()=> {
             console.log('end');
         })

// -------------------------------------------------

// 한개의 데이터만 넘어감 두번째 then에서 result1를 참조하려면?
requestData1() 
.then(result1 => {
    return requestData2(result1)
}).then((result1, result2) => {
   console.log({ result1,result2 });
})

// promise중첩

requestData1() 
.then(result1 => {
    return requestData2(result1).then(result2 => { // 두번째 데이터까지 받아놓고 배열형식으로 반환
       console.log({ reulst2 });
       return [result1,result2];
    });
}).then(([result1, result2]) => {
   console.log({ result1,result2 });
})


// promise를 중첩하지않고
requestData1() 
   .then(result1 => { // result1 처럼 promise가 아닌 값을 넣으면 promise객체처럼 처리(fulfilled)
       return Promise.all([result11, requestData2(result1)]);
   })
   .then(([result1, result2]) => {
      // ...
   }) 

// ------------------

// 동기코드와 같이 사용하는 경우
// 예외처리에 신경써야함

function doSync() {
    throw new Error('some error');
}

function requestData() {
    doSync(); // 동기함수에서 예외가 발생하는경우 예외처리하는곳이 없어서 문제가될수잇음
    return fetch()
      .then(data => console.log(data))
      .catch(error => console.log(error)); // 동기함수에서 예외처리가 catch에서 실행되지않음

    

}

  // 만약 doSync라는 함수가 반드시 fetch전에 호출되어야하는게 아니라면
   // 이와같이 then메서드안쪽으로 넣어주는게좋음 -> catch메서드안에서 처리가능
  function requestData() {
   
   return fetch()
     .then(data => {
      doSync();   
      console.log(data)})
     .catch(error => console.log(error)); 
  }

  // 만약 doSync가 fetch전에 처리되어야한다면

  function requestData() {
      return Promise.resolve() // fulfilled상태인 promise객체를만들고
         .then(doSync) // doSync를 호출 => 그럼 doSync안에서 발생한 예외는 결국 catch쪽에서 처리
         .then(fetch)
         .then(data => {
             console.log(data);
         })
         .catch(error => console.log(error));
  }