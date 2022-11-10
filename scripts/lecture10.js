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