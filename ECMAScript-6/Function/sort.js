/**
 * Sorting Array with sort()
 */

var members = [
  { name: "Asique Ahmed", age: 25, project: 1 },
  { name: "Ahmed Sazzad", age: 25, project: 9 },
  { name: "Muhtasim Labib", age: 25, project: 2 },
  { name: "Asif Ahmed", age: 24, project: 5 },
  { name: "Monir Hossain", age: 24, project: 8 },
  { name: "Tonmoy Pagla", age: 22, project: 2 },
  { name: "Touhidul Islam", age: 22, project: 2 },
];

function MembersSort(arr) {
  arr.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    } else if (a.name < b.name) {
      return -1;
    } else {
      return 0;
    }
  });
  arr.sort(function (a, b) {
    return a.age - b.age;
  });
  arr.sort(function (a, b) {
    return b.project - a.project;
  });
  return arr;
}

console.log(MembersSort(members));
