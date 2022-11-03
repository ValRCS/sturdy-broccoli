console.log("Let's explore our variables and math");
//we can use the console.log() function to print to the console
//in Javascript we can use var, let, or const to declare a variable

//var is the old way of declaring a variable
//generally you want to avoid using var in modern Javascript
//var was too loose and allowed for some weird behavior

//let is the new way of declaring a variable
//let is block scoped - it is only available within the block it is declared in

//we use let when we know that the value of the variable will change
let age = 30;
//we can use the console.log() function to print to the console
console.log(age);
//increase age
age = age + 1; //this is assignment not equality!
console.log(age);
//decrease age by 5 just like Benjamin Button
age = age - 5;
console.log(age);

//we use const when we know that the value of the variable will not change
//the rule of thumb is to use const unless you know you need to use let
//typically we use const to find something in the DOM
const myContainer = document.querySelector('.container');
//let's put age in the container
myContainer.textContent = age;
//no need to print anything it will show on the page inside .container div text content

//other math works as well
//we can use +, -, *, /, %, **
//we can use +=, -=, *=, /=, %=, **=

//we can use += to add to a variable
age += 1; // just like age = age + 1;
//there is no ++ operator in Javascript

console.log(age);

//we can use -= to subtract from a variable
age -= 5; // just like age = age - 5;
console.log(age);

console.log(10 * 10); // no variables here we just print the result
console.log(10 / 10); // no variables here we just print the result
let divResult = 10 / 6; // no variables here we just print the result

//so data types in Javascript are dynamic
//we don't have to declare the type of data we are using
//we can use a variable to store a number, string, boolean, object, array, function, etc.

//we can use the typeof operator to find the type of data
//we can use the console.log() function to print to the console
console.log(typeof age); //number - Javascript doesn't have an integer type
console.log(typeof divResult); //number - Javascript doesn't have a float type

// numbers with decimals have some weird behavior
//we can use the console.log() function to print to the console
console.log(0.1 + 0.2); //0.30000000000000004
//turns out floating point numbers are not exact
//there is a specificaion for floating point numbers
//https://en.wikipedia.org/wiki/IEEE_754

//there are some numbers that floats can't represent exactly

//it will be important when we try to do math with money
//when we try to compare floating point numbers then we will need to be careful

//we have string data types
const myName = "Valdis";
console.log(myName);
//typeof operator will tell us that it is a string
console.log(typeof myName);

//we can use the + operator to concatenate strings
//we can use the console.log() function to print to the console
console.log("Hello " + myName); // it is okay for small strings

//I like the modern backtick way of creating strings
//we can use the console.log() function to print to the console
console.log(`Hello ${myName} wouldn't it be nice if your age was ${age}`); // <-- this is called a template literal 
//it especially nice when we have multiple lines and variables

//how about single quotes?
//we can use the console.log() function to print to the console
console.log('Hello ${myName} wouldn\'t it be nice if your age was ${age}'); // <-- this is called a template literal
//in Javascript we use backslash to escape characters
//in Javascript " and ' are the same for strings

//some other data types
//we can use the console.log() function to print to the console

const myTruth = true;
console.log(myTruth);
console.log(typeof myTruth);
const myLie = false;
console.log(myLie);
console.log(typeof myLie);

//booleans will be useful for logic and conditionals 

//we can raise powers with **

console.log(2 ** 3); // 2 * 2 * 2 = 8
const googol = 10 ** 100; //Googol
console.log(googol);
//wikipedia says it is 10^100
//https://en.wikipedia.org/wiki/Googol

//so Javascript has big number support built in
//how about precision?
//there is some loss of precision after 15 digits

//now we come to an important operator
//the modulo operator %

//we can use the console.log() function to print to the console

console.log(10 % 3); // 1
console.log(10 % 4); // 2
console.log(10 % 5); // 0
console.log(10 % 6); // 4
console.log(10 % 7); // 3

//does the above make sense?

//we use modulo to find out if a number is even or odd
//we can use the console.log() function to print to the console

console.log(10 % 2); // 0
console.log(11 % 2); // 1

//let's use prompt to make a simple temperature converter

//we can use the prompt() function to get input from the user

//we can use the console.log() function to print to the console

//we can use the parseInt() function to convert a string to an integer

// const celsius = parseInt(prompt("Please enter a temperature in Celsius"));
//we probably want to parse to float
//we can use the parseFloat() function to convert a string to a float
const celsius = parseFloat(prompt("Please enter a temperature in Celsius"));

//we can use the console.log() function to print to the console

console.log("Temperature in Celsius " + celsius);

//to fix floating point imperfections we can use toFixed() method
//we can also use round() method
// const farenheit = Math.round(celsius * 1.8 + 32); 
const farenheit = (celsius * 1.8 + 32).toFixed(2); //so we want 2 digits after the decimal point

console.log("Temperature in Farenheit " + farenheit);
const tempContainer = document.querySelector('.temp-container');
tempContainer.textContent = `Temperature in Celsius ${celsius} is ${farenheit} in Farenheit`;

//Javascript is case sensitive
//the following two variables are different
const myVariable = 10;
const myvariable = 20; //this is a different variable
console.log(myVariable);
console.log(myvariable);

//above is a bad naming convention, we should use camelCase
const myLongVariableName = 30;
console.log(myLongVariableName);


//avoid using reserved words
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords

//find out length of my name
console.log(myName.length); //6
console.log(`My name is ${myName} and it is ${myName.length} characters long`);

//Java and Javascript are different languages
//Java is a compiled language
//Javascript is an interpreted language
//Java is a general purpose language
//Javascript is a web language

//there is a saying Javascript and Java are related like car and carpet ... they are both used to get you from A to B but that is about it

//technically they are both from C family of languages but they are distant cousins at most

//the names are similar for marketing reasons
//the story goes that Javascript was created to add some interactivity to web pages
//in 1995 Java was becoming popular and Netscape wanted to capitalize on that
//so they named it Javascript to make it sound like Java
