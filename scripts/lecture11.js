console.log("Looping constructs");

//infinite loop
//generally you want to avoid infinite loops
//there are some uses for infinite loops
//such as a game that runs until the user quits
//or an application that runs until the user closes it
//without proper care, infinite loops can cause your computer to crash or slow down
// while (true) {
//     console.log("Look ma I am looping");
// }

let i = 0;
const whileLoopElement = document.getElementById("whileLoop");
while (i < 10) {
    console.log(i);
    //use textContent to add to the DOM
    whileLoopElement.textContent += i + " "; //add a space after each number
    i++; //same as i = i + 1 or i += 1 we are incrementing i by 1
}
console.log("After the loop i is " + i);
console.log(`After the loop i is ${i}`); //same as above but using a template literal

//philosophy speaking while loops are for when you don't know how many times you will loop

//for loops are for when you know how many times you will loop

//we can do everything with while loops that we can do with for loops

//but for loops are more concise

//we can go down in a while loop

i = 5;
while (i >= 0) {
    console.log(i);
    i--;  //same as i = i - 1 or i -= 1 we are decrementing i by 1
}
console.log("After the loop i is " + i);
console.log(`After the loop i is ${i}`); //same as above but using a template literal


//we can use a break statement to exit a loop early

i = 0;
while (i < 10) {
    console.log(i);
    if (i === 5) {
        console.log(`i is 5 so I am breaking out of the loop`);
        break; //so we go to line 51 from here
    }
    i++; //same as i = i + 1 or i += 1 we are incrementing i by 1
}

console.log(`After the loop i is ${i}`); //same as above but using a template literal

//there is a less used looping construct called do while
//idea is to do something at least once then check the condition
//sort of shooting first and asking questions later

i = 700; //no matter what my condition is I will run at least once!
do {
    console.log(i);
    i++; //same as i = i + 1 or i += 1 we are incrementing i by 1
} while (i < 10);

console.log(`After do while loop i is ${i}`); //same as above but using a template literal

//if we did not have do while loop we could have simulated it with a while loop
//but it would be more code

i = 900; //no matter what my condition is I will run at least once!
while (true) {
    console.log(i);
    i++; //same as i = i + 1 or i += 1 we are incrementing i by 1
    if (i >= 10) {
        console.log(`i is 10 or greater so I am breaking out of the loop`);
        break;
    }
}

console.log(`After while loop i is ${i}`); //same as above but using a template literal

//we can increment by more than 1

i = 0;
while (i < 10) {
    console.log(i);
    i += 2; //same as i = i + 2 we are incrementing i by 2
}

console.log(`After the loop i is ${i}`); //same as above but using a template literal

i = 0;
while (i <= 10) {
    console.log(i);
    i += 5; //same as i = i + 2 we are incrementing i by 2
}

console.log(`After the loop i is ${i}`); //same as above but using a template literal


//let's ask for input from the user
//we will use a while loop to validate the input

// let input = prompt("Enter a number between 1 and 10");
// //parse input to int
// input = parseInt(input);
// console.log(`After parseInt input is ${input}`);
// //check if input is a number
// while (isNaN(input) || input < 1 || input > 10) {
//     input = prompt("Invalid input. Enter a number between 1 and 10");
//     input = parseInt(input);
//     console.log(`INSIDE LOOP: After parseInt input is ${input}`);
// }

// console.log(`You entered ${input}`);

//we can use a while loop to sum up numbers
//we will ask the user for a number and add it to the sum

// let sum = 0;
// let number = prompt("Enter a number to add to the sum or enter 0 to stop");
// number = parseInt(number); //we need to convert string to int
// //we could also use parseFloat to convert to a float meaning a number with a decimal
// while (number !== 0) {
//     console.log(`BEFORE ADDING: sum is ${sum} and number is ${number}`);
//     //we will check if the number is a number so it is not NaN
//     if (isNaN(number)) {
//         alert("Invalid input"); //pops up a message to the user
//     } else {
//         sum += number;
//     }
//     console.log(`The sum is ${sum} after adding ${number}`);
//     number = prompt("Enter a number to add to the sum or enter 0 to stop");
//     number = parseInt(number);
// }

// console.log(`The last number entered was ${number}`);
// console.log(`AFTER LOOP IS DONE sum is ${sum}`);

// //lets output sum to container div
// let container = document.querySelector(".container"); //find first element with class container
// //lets use text content
// container.textContent = `The sum is ${sum}`;

//so let's look at for loops
//for loops are for when you know how many times you will loop

//for (initialization; condition; increment) {
//    //code to run
//}

//example
const forLoopElement = document.getElementById("forLoop");
for (let i = 0; i < 10; i++) {
    console.log(i);
    //update textContent
    forLoopElement.textContent += i + " "; //again adding a space after each number
}
//what will value of i be after the loop?
console.log(`After the loop i is ${i}`);
//turns out we are seeing i value we declared earlier for the while loop

//crucial part is that this i is only available inside the for loop, the scope is limited to the for loop

//this is very important for clarity and avoiding bugs

//lets try this with different iterator
// for (let j = 0; j < 10; j++) {
//     console.log(j);
// }
// //what will value of j be after the loop?
// console.log(`After the loop j is ${j}`); //will be an error because j is not defined outside the for loop

//we if we needed to use j outside the loop we would have to declare it outside the loop
let j = 0; //j is global to the file
//usually you want to declare variables as close to where you use them as possible
for (; j < 10; j++) { //notice the empty initialization
    console.log(j);
}
//what will value of j be after the loop?
console.log(`After the loop j is ${j}`);

//in older versions of javascript you could not declare variables inside a for loop
//so variables declared inside a for loop were global to the file and could cause bugs

//there is a continue statement that will skip the rest of the code in the loop and go to the next iteration
//it works with both while and for loops

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log(`i is 5 so I am skipping the rest of the code in the loop`);
        continue; //goes straight to the next iteration here
    }
    console.log(i); //so this code will not run when i is 5
}

//let us explore more variation of for loops

//we can use a for loop to sum up numbers
let total = 0;
for (let i = 0; i < 10; i+=3) { //our step is 3 here so we will add 0, 3, 6, 9
    console.log(`BEFORE: i is ${i} and total is ${total}`);
    total += i;
    console.log(`AFTER: i is ${i} and total is ${total}`);
}
console.log(`After the loop total is ${total}`); //should be 18

//lets iterate over letters in a string
const myName = "Valdis";
for (let i = 0; i < myName.length; i++) {
    console.log(myName[i]); //notice we are using square brackets to access the letter at index i
    //also notice we start at 0 and go up to but not including myName.length
    //most things are 0 based in javascript like most programming languages
}

//we can use a for .. of loop to iterate over strings and arrays
console.log("Using for .. of loop");
for (let letter of myName) {
    console.log(letter); //no need for index
}

//iterate over an array
const myArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
//array is a special type of object in javascript
//it is 0 based so we can use the same logic as with strings
//classical for loop in most languages and useful in Javascript if you need to use the index
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
//alternative is to  use of loop, if you do not need index
for (let element of myArray) {
    console.log(element);
}
//documentation on of loop https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of




//finally we come to for...in loop
//it is used to iterate over properties of an object
//we will use an object literal
//objects in Javascript are key value pairs
//you can use any type of value as a key but it is usually a string
//the value can be any type including another object
//Javascript objects along with arrays are the most common data structures
//they form the backbone of most applications
//also JSON is based on objects
const myObject = {
    name: "Valdis",
    age: 99,
    city: "Riga",
    country: "Latvia",
    isAwesome: true,
    favoriteNumbers: [1, 2, 3, 4, 5], //so values here are arrays
    favoriteFoods: ["pizza", "sushi", "ice cream"],
    favoriteMovies: ["The Matrix", "The Lord of the Rings", "The Matrix Reloaded"]
};

//we can use for...in loop to iterate over properties of an object
for (let key in myObject) {
    console.log(`The key is ${key} and the value is ${myObject[key]}`);
}

//so to recap we have 3 types of for loops
//for loop with initialization, condition and increment
//for...of loop for iterating over arrays and strings
//for...in loop for iterating over properties of an object