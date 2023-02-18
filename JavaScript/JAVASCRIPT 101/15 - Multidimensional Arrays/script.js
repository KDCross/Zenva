//Lesson, basic multidimensional array
let a = [
  [1, 2, 3],
  [4, 5, 6, 7],
];
console.log(a);

console.log(a[0][1]);

//Challenge, make console show the number 6 from the above array of arrays:
console.log(a[1][2]);

//Changing value of an item in the array:
a[1][2] = 100;
console.log(a[1][2]);

//Continuing lesson, created the following array:
// let terrains = [
//   ["desert", "desert", "grass", "grass"]
// ];
// console.log(terrains);

//Challenge, add 3 more rows to the above array with values provided in the lesson:
let terrains = [
  ["desert", "desert", "grass", "grass"],
  ["desert", "grass", "water", "grass"],
  ["grass", "grass", "water", "water"],
  ["grass", "grass", "grass", "grass"]
];
console.log(terrains);
