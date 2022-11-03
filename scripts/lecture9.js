// Simple hello world script
// we use // for comments
// remember in CSS we use /* for comments */
// in HTML we use <!-- for comments -->
// we use the console.log() function to print to the console
console.log("Hello Javascript!");

// finding the first paragraph
//para is just a name for a variable
//could be anything starting with a letter or underscore or dollar sign
const para = document.querySelector('p');

// I add a click event listener to the paragraph
para.addEventListener('click', updateName);

//I define what to do when the paragraph is clicked
function updateName() {
    //we save the results of a prompt in a variable called name
    //the prompt function takes a string as an argument
    //returns the value entered by the user - as a string
  const name = prompt('Enter a new name');
    //we use the textContent property to change the text of the paragraph
    //we use backticks to create a string with embedded variables
    // on computer keyboards, the backtick is the key to the left of the 1 - usually above the tab key
  para.textContent = `Player 1: ${name}`;
  //we find first element from class results
  const resultsElement = document.querySelector('.results');
  resultsElement.textContent = `Updated at ${new Date()}`;
  //older way would be to use innerHTML - generally not recommended
//using innerHTML is a security risk - you can inject malicious code
//using innerHTML you can create any element very easily but at a cost of security

}