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
    //lets customize this text depending on the number of elements
    //i will use ` to make a template string
    //we have have not added the element so elementCount is off by one
    //so we will correct it on the fly
    //of course we could use an if statement and use custom text for each case
    newElement.innerText = `I'm element No. ${numElements+1}!`;
    //let's add a value attribute to the new element - not always required
    newElement.setAttribute("value", numElements+1); //that can be used to identify the element

    //finally add the new element to the container
    parentElement.appendChild(newElement); //append adds to the end of the container element
}

//lets make a flexible function to add any number of elements
function addElements(numElements) { 
    //we can use a for loop to add multiple elements
    for (let i = 0; i < numElements; i++) {
        addElement();
    }
}

//lets make a function to add 10 elements
function add10Elements() {
    addElements(10);
}

//TODO function that reads button value and adds that many elements - more universal solution



//lets make a function to remove last element from our container
//we create a function on what to do when the button is clicked to be attached to the button later
function removeElement() {
    //get the container element
    const parentElement = document.getElementById("container");
    //get the last child of the container
    const lastChild = parentElement.lastElementChild;
    //lets remove last child only when it exists
    if (lastChild === null) {
        console.log("No more elements to remove!");
    } else {
        //remove the last child
        console.log("Removing last child: " + lastChild.innerText)
        parentElement.removeChild(lastChild);
    }
}


//lets make a function to remove all elements
function removeAllElementsFromParent(parentElement) {
    console.log("Removing all elements");
    //get the container element
    //we do not need to get parent we have it incoming by parameter
    // const parentElement = document.getElementById("container");
    //get the last child of the container
    //we need to use let since we will change the value of lastChild
    let lastChild = parentElement.lastElementChild;
    //lets make a while loop to remove all elements
    while (lastChild !== null) {
        //remove the last child
        console.log("Removing last child: " + lastChild.innerText)
        parentElement.removeChild(lastChild);
        //get the new last child
        lastChild = parentElement.lastElementChild;
    }
    //we could have gotten only specific children and removed them using querySelectorAll
}

//lets make a function to remove all elements from container
function removeAllElements() {
    //get the container element
    const parentElement = document.getElementById("container");
    removeAllElementsFromParent(parentElement);
}

function destroyPage() {
    //get the body element
    const parentElement = document.body;
    removeAllElementsFromParent(parentElement);
    //lets make a button to reload the page
    const reloadButton = document.createElement("button");
    reloadButton.innerText = "Reload page";
    //notice we create an anonymous function to be called when the button is clicked
    reloadButton.addEventListener("click", function() {
        location.reload();
        //more on location: https://developer.mozilla.org/en-US/docs/Web/API/Location
    });
    //note we could have used an arrow function as well
    //add button to the body
    parentElement.appendChild(reloadButton);
}

//even better would be to add listeners when the page loads

//lets make a main function
//main should be kept as simple as possible
//when some task grows too large it should be broken down into smaller functions

//in fact lets make a function to add listeners
function addListeners() {
    console.log("Adding listeners");
    const addButton = document.getElementById("addButton");
    addButton.addEventListener("click", addElement);
    //lets add a listener to the remove button
    const removeButton = document.getElementById("removeButton");
    removeButton.addEventListener("click", removeElement);
    //lets get add 10 elements button
    const add10Button = document.getElementById("add10Button");
    add10Button.addEventListener("click", add10Elements);
    //add listener to remove all elements button
    const removeAllButton = document.getElementById("removeAllButton");
    removeAllButton.addEventListener("click", removeAllElements);
    //lets add a listener to the destroy page button
    const destroyPageButton = document.getElementById("destroyPageButton");
    destroyPageButton.addEventListener("click", destroyPage);
}

function main() {
    //add a listener to the button
    console.log("main function called");

    //since we have many buttons we could make a separate function to add the listeners
    addListeners();

}

//lets attach main to the window load event

document.addEventListener("DOMContentLoaded", main);