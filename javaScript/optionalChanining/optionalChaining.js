const person = null;
const name = person.name; 

const name = person && person.name;
const name2 = person?.name; // 자동으로 person을 검사해줌 (null또는 undefined);

// ------------------------------------------------------------------

const person = {
   getName: () => 'abc',
};
const name = person.getName?.();
console.log(name);

//---------------------------------------------------------------------

const loadData = (onComplete) => {
   console.log('loading...');
   onComplete?.();
}

loadData();

// ----------------------------------------------------------------

const person = { friends: null, mother: null };

const firstFriend = person.friends?.[0];

const prop = 'name';
const name = person.mother?.[prop];

// ---------------------------------

const name =
  person &&
  person.friends &&
  person.friends[0] &&
  person.friends[0].mother &&
  person.friends[0].mother.name ;

const name2 = person?.friends?.[0]?.mother?.name;

// ------------------------------------------------

const person = {}
const name = person?.friends?.[0]?.mother?.name ?? 'default name';
// 물음표 두개를 이용하여 기본값을 입력하는 방식을 nullish coalescing 라고함

// -----------------------------------------------