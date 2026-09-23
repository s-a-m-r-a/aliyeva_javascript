const prompt = require('prompt-sync')();

// Task 1: If the entered number is greater than 7, then print “Hello”

let input = Number(prompt("Enter a number: "));

if (input > 7) {
    console.log("Hello");
}

// Task 2: If the entered name matches “John”, then output “Hello, John”, if not, then output "There is no such name" 

let name = prompt("Enter your name: ");

if (name === "John") {
    console.log("Hello, John");
} else {
    console.log("There is no such name");
}

//Task 3: There is a numeric array at the input, it is necessary to output array elements that are multiples of 3
let numbers = prompt("Enter some numbers using commas to separate: ");

let numArray = numbers.split(",").map(Number);

for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] % 3 === 0) {
        console.log(numArray[i]);
    }
}

/*
Question 2: Given bracket sequence: [((())()(())]]

Answer: No, the sequence is not correct.

To make it correct, the first of the two final "]" characters should be replaced with ")".

Correct sequence: [((())()(()))]
*/