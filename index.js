var people = [
  { name: "alan", age: 20, country: "france" },
  { name: "ivan", age: 24, country: "tunisia" },
  { name: "jhon", age: 19, country: "usa" },
  { name: "aya", age: 28, country: "tunisia" },
  { name: "nabil", age: 24, country: "tunisia" },
];

//--------------------map---------------------------//
var array = [];
for (var i = 0; i < people.length; i++) {
  array.push({
    name: people[i].name,
    age: people[i].age,
  });
}

const array1 = people.map(function (person) {
  return person.name
});

const array2 = people.map(p => {
  return {name: p.name, age: p.age}
});

// console.log(array2);
//--------------------map---------------------------//

//--------------------filter---------------------------//
var people1 = [];
for (let i = 0; i < people.length; i++) {
  if(people[i].age < 24) {
    people1.push(people[i]);
  }
}

const people2 = people.filter(function (person) { 
  return person.age < 24
})

const people3 = people.filter(p => p.age < 24);
const people4 = people.filter(p => !(p.age < 24));

// console.log(people3);
//--------------------filter---------------------------//

//--------------------find---------------------------//
const findPersonFromtunisia = people.find((p) => p.country === 'tunisia')
// console.log(findPersonFromtunisia)
//--------------------find---------------------------//
