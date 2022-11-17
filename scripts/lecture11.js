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
while (i < 10) {
    console.log(i);
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
    i += 2; //same as i = i + 2 we are incrementing i by 2
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

let sum = 0;
let number = prompt("Enter a number to add to the sum or enter 0 to stop");
number = parseInt(number); //we need to convert string to int
//we could also use parseFloat to convert to a float meaning a number with a decimal
while (number !== 0) {
    console.log(`BEFORE ADDING: sum is ${sum} and number is ${number}`);
    //we will check if the number is a number so it is not NaN
    if (isNaN(number)) {
        alert("Invalid input"); //pops up a message to the user
    } else {
        sum += number;
    }
    console.log(`The sum is ${sum} after adding ${number}`);
    number = prompt("Enter a number to add to the sum or enter 0 to stop");
    number = parseInt(number);
}

console.log(`The last number entered was ${number}`);
console.log(`AFTER LOOP IS DONE sum is ${sum}`);

//lets output sum to container div
let container = document.querySelector(".container"); //find first element with class container
//lets use text content
container.textContent = `The sum is ${sum}`;
