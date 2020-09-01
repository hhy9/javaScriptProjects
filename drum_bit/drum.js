
 function drumSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)//div를 가져옴
  if(!audio) return;
  audio.currentTime = 0; //현재시간 0으로해서 딜레마 없앰
  audio.play();
  key.classList.add('playing');//class 추가하고 제거하지않음 그래서 동작멈춤
 }
 

function removeTransition(e) {
  if(e.propertyName !== 'transform') return ;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key'); //모든키가 해당되어야하니까 모든 키에대하여 이벤트

//전환이 종료되고 종료되면  전환제거라는 함수를 만들어야함
//각 키에 이벤트리스너가 추가됨
keys.forEach(key => key.addEventListener('transitionend',removeTransition));

window.addEventListener('keydown', drumSound)

