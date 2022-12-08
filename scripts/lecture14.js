console.log("Let's add and remove some elements!"); //this will always be printed to the console
//remove the above line when you are done

//lets get a container element


//lets make a function that adds a new element to the container
function addElement() {
    //use const to make sure we don't change the value, can use let if you do need to change the value
    const parentElement = document.getElementById("container");
    //create a new element
    const newElement = document.createElement("div");
    //documentation for creating elements: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
    //now we add some content and some attributes to the new element
    //add a class to the new element
    newElement.classList.add("new-element"); //TODO add more classes
    //add new class depending whether there are an odd or even number of elements
    const numElements = parentElement.childElementCount;
    //alternatively you could have kept the count in a variable and incremented it each time you added an element

    if (numElements % 2 === 0) {
        newElement.classList.add("even");
    } else {
        newElement.classList.add("odd");
    }
    //add some text to the new element
    newElement.innerText = "I'm a new element!";
    //finally add the new element to the container
    parentElement.appendChild(newElement); //append adds to the end of the container element
}

//even better would be to add listeners when the page loads

//lets make a main function
//main should be kept as simple as possible
//when some task grows too large it should be broken down into smaller functions

function main() {
    //add a listener to the button
    console.log("main function called");

    //if we have many buttons we could make a separate function to add the listeners
    const addButton = document.getElementById("addButton");
    addButton.addEventListener("click", addElement);
}

//lets attach main to the window load event

document.addEventListener("DOMContentLoaded", main);