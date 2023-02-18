//Creates the array with the four items listed
let database = ["turtle", "cat", "dog", "bird"];
console.log(database);
console.log(database.length);

//Sets "animal" to the item in the indicated position in the array
let animal = database[1];
console.log(animal);

//Changes the first item in the array to "dinosaur"
database[0] = "dinosaur";
console.log(database);

//Sets "last" to the last item in the array
let last = database[database.length - 1];
console.log(last);

//Appends item onto end of array
database.push("lizard");
console.log(database);

//Removes last item from array
database.pop();
console.log(database);
