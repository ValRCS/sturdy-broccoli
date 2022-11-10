console.log("Hello conditionals and logic!");

let a = 10;
let aString = "10";
// lets compare a and aString
// we can use the console.log() function to print to the console
//i am using backticks ` here to interpolate the variables into the string
//if we used regular quotes we would have to use + to concatenate
console.log(`variable a:${a} and variable aString ${aString} are equal?`, a == aString); // true, but this is not a good way to compare usually

let b = 10;
//recommended way to compare is to use ===
//we can use the console.log() function to print to the console
console.log(`variable a:${a} and variable b ${b} are STRICTLY equal?`, a === b); // true, this is the recommended way to compare
//lets compare a and aString
//we can use the console.log() function to print to the console
console.log(`variable a:${a} and variable aString ${aString} are STRICTLY equal?`, a === aString); // false, this is the recommended way to compare
//if you wanted to use == reliably you would have to convert both variables to the same type
//or you would have to consult type coercion rules such as found in:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
//https://dorey.github.io/JavaScript-Equality-Table/

//same goes for != and !==
//use !== unless you have a good reason not to

//we can use the console.log() function to print to the console
console.log(`variable a:${a} and variable aString ${aString} are NOT equal using != ?`, a != aString); // false, but this is not a good way to compare usually

//we can use the console.log() function to print to the console
console.log(`variable a:${a} and variable aString ${aString} are NOT equal using !== ?`, a !== aString); // true, this is the recommended way to compare

//you could convert aString to a number
//we can use the console.log() function to print to the console
let aNumber = Number(aString); //will convert a string to a number
console.log(`variable a:${a} and variable aNumber ${aNumber} are equal?`, a === aNumber); // true, this is the recommended way to compare

//how would you convert a number to a string?
let anotherString = String(a); //will convert a number to a string
//we can use the console.log() function to print to the console
console.log(`variable aString:${aString} and variable anotherString ${anotherString} are equal?`, aString === anotherString); // true, this is the recommended way to compare

let c = 42;
//lets compare a and c using > and < and >= and <=
//we can use the console.log() function to print to the console
console.log(`variable a:${a} is greater than variable c ${c} ?`, a > c); // false
//we can use the console.log() function to print to the console
console.log(`variable a:${a} is less than variable c ${c} ?`, a < c); // true
//we can use the console.log() function to print to the console
console.log(`variable a:${a} is greater than or equal to variable c ${c} ?`, a >= c); // false
//we can use the console.log() function to print to the console
console.log(`variable a:${a} is less than or equal to variable c ${c} ?`, a <= c); // true

const myName = "Valdis";
const anotherName = "Valerija";
//lets compare myName and anotherName using > and < and >= and <=
//we can use the console.log() function to print to the console
console.log(`variable myName:${myName} is greater than variable anotherName ${anotherName} ?`, myName > anotherName); // false
//we can use the console.log() function to print to the console
console.log(`variable myName:${myName} is less than variable anotherName ${anotherName} ?`, myName < anotherName); // true
//we can use the console.log() function to print to the console
console.log(`variable myName:${myName} is greater than or equal to variable anotherName ${anotherName} ?`, myName >= anotherName); // false
//we can use the console.log() function to print to the console
console.log(`variable myName:${myName} is less than or equal to variable anotherName ${anotherName} ?`, myName <= anotherName); // true

//so for string comparison lexicographical order is used
//https://en.wikipedia.org/wiki/Lexicographical_order

//find ordinal number of a character
//we can use the console.log() function to print to the console
console.log(`ordinal number of a is ${"a".charCodeAt(0)}`); // 97
//lets show ā
//we can use the console.log() function to print to the console
console.log(`ordinal number of ā is ${"ā".charCodeAt(0)}`); // 257

//lets do a smiley face
//we can use the console.log() function to print to the console
console.log(`smiley face is ${"😀".charCodeAt(0)}`); // should be 128512 but it is 55357 in UTF-16
//so you can see that UTF-16 is not the same as UTF-8
//UTF-16 is a fixed length encoding - meaning it uses 2 bytes for most characters - rare these days
//UTF-8 is a variable length encoding - meaning it uses 1-4 bytes for most characters

//logic operators

// && is AND - both sides must be true - logical conjunction
//we can use the console.log() function to print to the console
console.log(`true && true is ${true && true}`); // true
//we can use the console.log() function to print to the console
console.log(`true && false is ${true && false}`); // false
//we can use the console.log() function to print to the console
console.log(`false && true is ${false && true}`); // false
//we can use the console.log() function to print to the console
console.log(`false && false is ${false && false}`); // false


// || is OR - either side must be true - logical disjunction
//we can use the console.log() function to print to the console
console.log(`true || true is ${true || true}`); // true
//we can use the console.log() function to print to the console
console.log(`true || false is ${true || false}`); // true
//we can use the console.log() function to print to the console
console.log(`false || true is ${false || true}`); // true
//we can use the console.log() function to print to the console
console.log(`false || false is ${false || false}`); // false

// ! is NOT - logical negation
//we can use the console.log() function to print to the console
console.log(`!true is ${!true}`); // false
//we can use the console.log() function to print to the console
console.log(`!false is ${!false}`); // true

//you can use ! to convert truthy to falsy and vice versa

//we can use ! to flip the value of a boolean
let myBool = true;
//we can use the console.log() function to print to the console
console.log(`myBool is ${myBool}`); // true
myBool = !myBool;
//we can use the console.log() function to print to the console
console.log(`myBool is ${myBool}`); // false
//we can keep going
myBool = !myBool;
//we can use the console.log() function to print to the console
console.log(`myBool is ${myBool}`); // true - back to where we started

//sometimes you will see code with !! - this is a double negation
//we can use the console.log() function to print to the console
console.log(`!!true is ${!!true}`); // true
//we can use the console.log() function to print to the console
console.log(`!!false is ${!!false}`); // false
//how about 0 ?
//we can use the console.log() function to print to the console
console.log(`!!0 is ${!!0}`); // false - so 0 is falsy and was converted to false

//link to falsy values
//https://developer.mozilla.org/en-US/docs/Glossary/Falsy

//now we get to the fun part
//conditional statements

//if statement
//we can use the console.log() function to print to the console
console.log(`if statement`);
if (true) {
    //we can use the console.log() function to print to the console
    console.log(`inside if statement`);
    }
//we can use the console.log() function to print to the console
console.log(`outside if statement`);

///usually instead of true/false we will use some variable
// let myVar = true;
// let myVar = 2*2 === 4; //comparsion will be evaluated first then assigned to myVar
a = 2;
b = 4; //notice we are not using let, since we already declared a and b


//we can use the console.log() function to print to the console
console.log(`if statement`);
if (a*a === b) {
    //we can use the console.log() function to print to the console
    console.log(`inside if statement ${a}*${a} === ${b}`);
    }
//we can use the console.log() function to print to the console
console.log(`outside if statement`);

//what happens if we change the value of a
//this is a good time to introduce else
a = 3;
//we can use the console.log() function to print to the console
console.log(`BEFORE if statement`);
if (a*a === b) {
    //we can use the console.log() function to print to the console
    console.log(`inside if statement ${a}*${a} === ${b}`);
    }
else { //we do not have to be explicit about else
    //as Sherlock Holmes said "when you have eliminated the impossible, whatever remains, however improbable, must be the truth"
    console.log(`inside else statement ${a}*${a} !== ${b}`);
}
//we can use the console.log() function to print to the console
console.log(`outside if statement`);


//now we introduce else if
//this is useful when you have multiple conditions

//lets change a
a = 1;

//we can use the console.log() function to print to the console
console.log(`BEFORE if statement`);
if (a*a === b) {
    //we can use the console.log() function to print to the console
    console.log(`inside if statement ${a}*${a} === ${b}`);
    }   
else if (a*a > b) {
    console.log(`inside else if statement ${a}*${a} > ${b}`);
}
else { //we do not have to be explicit about else
    //as Sherlock Holmes said "when you have eliminated the impossible, whatever remains, however improbable, must be the truth"
    console.log(`inside else statement ${a}*${a} < ${b}`);
}

//key takeaways
//if statements are used to execute code based on a condition
//if statements are evaluated from top to bottom
//if statements are evaluated until a condition is met
//only one block of code will be executed inside an if statement !

//if statements can be nested

//we can use the console.log() function to print to the console


//example of nested if statements
//we can use the console.log() function to print to the console
console.log(`BEFORE if statement`);
a = 2;
let d = 10;
if (a*a === b) {
    //we can use the console.log() function to print to the console
    console.log(`inside if statement ${a}*${a} === ${b}`);
    //nested inner if statement starts here
    if (d === 10) {
        console.log(`inside nested if statement ${d} === 10`);
    } else {
        console.log(`inside nested else statement ${d} !== 10`);
    } //end of nested inner if statement

    } else if (a*a > b) {
    console.log(`inside else if statement ${a}*${a} > ${b}`);
} else {
    console.log(`inside else statement ${a}*${a} < ${b}`);
        
}

//if you have multiple similar conditions you can use switch statements

//switch statements are useful when you have multiple conditions

//lets change a
a = 1;

//we can use the console.log() function to print to the console
console.log(`BEFORE switch statement`);
switch (a) {
    case 1: //we fall through to the next case
        console.log(`inside case 1`);
        //if you forget to break, you will fall through to the next case
    case 2:
        console.log(`inside case 1 or 2`);
        break; //notice break, usually you want to break out of the switch statement
    case 3:
        console.log(`inside case 3`);
        break;
    default: //for everything else
        console.log(`inside default`);
        break;
}
console.log(`AFTER switch statement`);
//techincally switch statements are not if statements but they are similar

//key takeaways
//switch statements are used to execute code based on a condition
//switch statements are evaluated from top to bottom
//switch statements are evaluated until a condition is met
//block of code will be executed inside a switch statement until a break is encountered

//you can use switch for strings

//lets ask for user input
let myString = prompt("Enter a string"); //will prompt user for input


//we can use the console.log() function to print to the console

//we can use the console.log() function to print to the console
console.log(`BEFORE switch statement`);
switch (myString) {
    case "hello": //we fall through to the next case
        console.log(`inside case hello`);
        break;
    case "world":
        console.log(`inside case world`);
        break;
    default: //for everything else
        console.log(`inside default you entered ${myString}`);
        break;
}
//in switch case everything is case sensitive
//in switch equality is checked using === strict equality

//of course if you have a big range of conditions you can use if statements
// using > and < 


//more documentation on if else if else statements
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
//javascript.info has a good tutorial on if else if else statements
//https://javascript.info/ifelse

//more documentation on switch statements
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
//javascript.info also has a good tutorial on switch statements
//https://javascript.info/switch