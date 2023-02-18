let scores = [10, 20, 10];

let i = 0;
while (i < scores.length) {
  scores[i]++;
  i++;
}
console.log(scores);

//Challenge, perform the above as a for loop:

for (i = 0; i < scores.length; i++) {
  scores[i]++;
}
console.log(scores);

//Lesson about forEach
scores.forEach(function (entry, index) {
  scores[index]++;
});
console.log(scores);

let catalog = [
  {
    title: "JS for Beginners",
    author: "Zenva",
    copies: 1,
  },
  {
    title: "HTML for Beginners",
    author: "Zenva",
    copies: 1,
  },
  {
    title: "CSS for Beginners",
    author: "XYZ",
    copies: 1,
  },
];

catalog.forEach(function (entry) {
  if (entry.author == "Zenva") {
    entry.copies++;
  }
});

console.log(catalog);
