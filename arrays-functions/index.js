// QUESTION 1- Difference between mutating array methods and non-mutation array methods with examples

// A) Mutating array methods are the ones that change the object after the method has been used while non-mutating array methods do not change the objects after the method has been used.

// Mutating Array Method

// i) pop()
// ii) push()
// iii) shift()
// iv) sort()
// v) splice()

// Non-mutating Array Methods

// i) slice()
// ii) concat()
// iii) map()
// iv) filter()
// v) ...array

//QUESTION 2
let languages = ["C#", "Javascript", "Ruby", "PHP", "Phython"];
console.log(languages);

//adding Kotlin to the end of the array
languages.push("Kotlin");
console.log(languages);

//Adding Java after Ruby
languages.splice(3, 0, "Java");
console.log(languages);

//Remove the first item in the array
languages.shift();
console.log(languages);

//Add Scala and Swift to the beginning of the array
languages.unshift("Scala", "Swift");
console.log(languages);

//Replace php with Go and Rust
languages.splice(5, 1, ["Go", "Rust"]);
console.log(languages);

//QUESTION 3
let fruit = ["apple", "mango", "banana"];
function changeFruit(fruit) {
  fruit[2] = "orange";
  return fruit;
}
console.log(changeFruit(fruit));
//ans: The fruit 'banana was replaced by 'Orange' in the array.

//QUESTION 4
let numbers = [1, 5, 9, 6];
console.log(Math.max(...numbers));

//QUESTION 5
function valTimesIndex(num) {
  return num.map((val, index) => val * index);
}
let arr = [2, 4, 6];
let results = valTimesIndex(arr);
console.log(results);
