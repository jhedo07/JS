// sort() = method used to sort an array in a place.
//          Sorts elements as strings in lexicographic order, not alphabetical
//          lexicographic = (alphabet + numbers + symbols) as strings

let numbers = [1, 5, 9, 8, 3, 7, 2, 10, 4, 6];

numbers.sort((a, b) => a - b);
// numbers.sort((a, b) => b - a); // reverse

console.log(numbers);

let letters = ["zebra", "apple", "Deer", "Elephant", "Cat"];

letters.sort((a, b) => a.localeCompare(b));
// letters.sort((a, b) => b.localeCompare(a)); // reverse

console.log(letters);