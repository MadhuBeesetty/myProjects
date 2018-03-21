//find all the users with the uoungest age//
const filter = (arr,ans=[],least) => {
  arr.reduce((a,v)=>{
    if(a>v.age) a=v.age;
    return least = a;
  },arr[0].age);
  return arr.filter(e => e.age == least);
}

console.log(filter([
  { id: 1, firstName: 'Abe', lastName: 'Good', age: 20, followingIds: [2, 3] },
  { id: 2, firstName: 'Bo', lastName: 'Bad', age: 29, followingIds: [1, 5] },
  { id: 3, firstName: 'Cam', lastName: 'Albert', age: 32, followingIds: [1, 4] },
  { id: 4, firstName: 'Carl', lastName: 'Michael', age: 30, followingIds: [1, 4, 5] },
  { id: 5, firstName: 'Dan', lastName: 'Bobby', age: 33, followingIds: [3, 5] },
  { id: 6, firstName: 'Emily', lastName: 'Gregory', age: 29, followingIds: [2, 4] },
  { id: 7, firstName: 'Eric', lastName: 'Bob', age: 29, followingIds: [2, 4] },
  { id: 8, firstName: 'Derek', lastName: 'Goodley', age: 90, followingIds: [] },
  { id: 9, firstName: 'Derek', lastName: 'Badley', age: 99, followingIds: [3, 4, 5, 8] },
  { id: 10, firstName: 'Dan', lastName: 'Hey', age: 12, followingIds: [] },
  { id: 11, firstName: 'Derek', lastName: 'Badley', age: 12, followingIds: [8] },
  { id: 12, firstName: 'Hello', lastName: 'World', age: 99, followingIds: [5, 8, 9] },
]));
