// console.log("Javascript Functions");

// //functions are a way to group code together
//function represents a block of code that can be executed at a later time

//simplest function is one that does not take any parameters and does not return anything

function sayHello() {
    console.log("Hello RTU Students");
    //of course I could write more code here
}

//you need to call the function to execute it
// sayHello();
// //I can call the function over and over again
// sayHello();
//i could use a loop to call the function 10 times
// for (let i = 0; i < 10; i++) {
//     sayHello();
// }

// //functions can take parameters
// //parameters are like variables that are local to the function
function customHello(name) {
    console.log(`Hello ${name}`);
}

// customHello("Valdis");
// customHello("Alice");
// customHello("Bob");
// customHello("Charlie");
// customHello("Diana");

//functions can take multiple parameters
function customHello2(name, age) {
    console.log(`Hello ${name} you are ${age} years old`);
}

// customHello2("Valdis", 47);
// customHello2("Alice", 12);
// customHello2("Bob", 13);
// customHello2("Charlie", 14);

// areaOfRectangle(100, 200); //so we called function before we defined it, this is called hoisting, not all languages do this, but JS does
//more about hoisting here https://developer.mozilla.org/en-US/docs/Glossary/Hoisting

// we can use a function to calculate the area of a rectangle
function areaOfRectangle(width, height) {
    let area = width * height; //area is local to this function not accessible outside, this is called function scope
    console.log(`The area of a rectangle with width ${width} and height ${height} is ${area}`);
}

// areaOfRectangle(10, 20);
// areaOfRectangle(5, 10);

// //functions can return values
// //we can use a function to calculate the area of a rectangle
function add(a, b) {
    return a + b; //instead of printing we return the value to the caller and they can do whatever they want with it
}

// let result = add(10, 20); //result is a global variable
// console.log(`The result of adding 10 and 20 is ${result}`);

//lets make a multiplication function
function multiply(a, b) {
    return a * b;
}

//now we can combine the two functions
// result = multiply(add(10, 20), add(30, 40)); //result should be 2100 === (10+20)*(30+40)
// //so inner functions are called first and then the result is used to calculate the outer function
// console.log(`The result of multiplying 30 plus 40 with 10 plus 20 is ${result}`);

//calling function within function can be compare to movie Inception where you have a dream within a dream
//while in a function you can call another function and that function can call another function and so on
//within the function you have local variables and parameters that are not accessible outside the function

//good practice would be to have a function that does one thing and does it well

//also good practice is to have a function that does not have side effects - meaning does not use global variables

//function can have default values for parameters
function customHello3(name = "Valdis", age = 47) {
    console.log(`Hello ${name} you are ${age} years old`);
};
//provide sane defaults for parameters, so that if you call the function without parameters it will still work

// a good way of organizing code is to have a main function that calls other functions

//you can have a function with default parameters and can return a value
function add2(a = 2, b = 3) {
    return a + b;
};


function main() {
    //we can call other functions from here
    //you could have a config function that sets up global variables
    //you could have a setup function that sets up the page
    sayHello();
    customHello("Valdis");
    customHello3(); //this will use default values
    customHello3("Alice", 12);
    customHello3("Bob"); //Bob will be name and 47 will be age
    areaOfRectangle(10, 20);
    let result = add(10, 20);
    console.log(`The result of adding 10 and 20 is ${result}`);
    result = multiply(add(10, 20), add(30, 40));
    console.log(`The result of multiplying 30 plus 40 with 10 plus 20 is ${result}`);
    result = add2(); //uses default values
    console.log(`The result of adding 2 and 3 is ${result}`);
    result = add2(10, 20); //uses provided values
    console.log(`The result of adding 10 and 20 is ${result}`);

    //you could have a cleanup function that would clean up after the program is done
}

main(); //we call the main function to start the program so we have a single entry point

//using above approach our variables are local to the function and we do not have to worry about them being overwritten

//because in a big web application we can have many functions and many variables and we need to be careful not to overwrite them
//we can have in fact multiple .js files and we can use functions to organize our code
//most pages these days are using some kind of framework like React or Angular or Vue which has its own functions and variables


// some tips on naming functions from 
// https://javascript.info/function-basics

//Naming a function
// Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does.

// It is a widespread practice to start a function with a verbal prefix which vaguely describes the action. There must be an agreement within the team on the meaning of the prefixes.

// For instance, functions that start with "show" usually show something.

// Function starting with…

// "get…" – return a value,
// "calc…" – calculate something,
// "create…" – create something,
// "check…" – check something and return a boolean, etc.

//we use camelCase for function names
//for more complex names we can have function name with multiple words
//for example: calculateAreaOfRectangle

//One function – one action
// A function should do exactly what is suggested by its name, no more.

// Two independent actions usually deserve two functions, even if they are usually called together (in that case we can make a 3rd function that calls those two).

// function that is longer than screen height is usually a sign of a problem. 
//If a function does everything in one go, then it’s difficult to understand what it does and to reuse individual parts of its body.