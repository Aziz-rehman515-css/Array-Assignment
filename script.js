
// 1. Create an array of 3 student names and add one more using push().

const students = ["Ali", "Ahmed", "Bilal"];

students.push("Usman");

console.log(students);

// 2. Remove the last item from an array of fruits using pop().


let fruits = ["Apple", "Banana", "Mango", "Orange"];
fruits.pop();
console.log(fruits);


// 3. Add "Monday" to the beginning of a days array using unshift().
let days = ["Tuesday", "Wednesday", "Thursday"];
days.unshift("Monday");
console.log(days);


// 4. Remove the first item from an array of colors using shift().
let colors = ["Red", "Blue", "Green", "Yellow"];
colors.shift();
console.log(colors);


// 5. Use splice() to insert "Math" and "Science" at index 2 of a subjects array.
let subjects = ["English", "Urdu", "Computer", "History"];
subjects.splice(2, 0, "Math", "Science");
console.log(subjects);




// 6. Use splice() to remove 2 elements starting from index 1 of a cities array.
let cities = ["Quetta", "Karachi", "Lahore", "Islamabad"];
cities.splice(1, 2);
console.log(cities);


// 7. Use slice() to get the first 3 items from a countries array.
const countries = ["Pakistan", "China", "Turkey", "Iran", "USA"];
const result5 = countries.slice(0, 3);
console.log(result5);

// 8. Convert the string "apple,banana,mango" into an array using split().
const fruits2 = "apple,banana,mango";
const result = fruits2.split(",");
console.log(result);


// 9. Join an array of characters ['J','S'] into a single string using join().



const letters = ["J", "S"];
const result2 = letters.join("");
console.log(result2);



// 10. Combine two arrays ['pen','pencil'] and ['eraser','sharpener'] using
// concat().
const arr1 = ["Pen", "Pencil"];
const arr2 = ["Eraser", "Sharpener"];
const result3 = arr1.concat(arr2);

console.log(result3);



// 11. Sort an array of numbers [10, 5, 2, 8] using sort() (as strings).
const numbers = [10, 5, 2, 8];
numbers.sort();
console.log(numbers);



// 12. Sort an array of names alphabetically using sort().
const names = ["Zahid", "Ali", "Ahmed", "Bilal"];
names.sort();
console.log(names);


// 13. Reverse the order of an array of numbers using reverse().
const numbers2 = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers2);


// 14. Use indexOf() to find the index of "Blue" in a colors array.
const colors2 = ["Red", "Green", "Blue", "Yellow"];
const result4 = colors2.indexOf("Blue");
console.log(result4);
