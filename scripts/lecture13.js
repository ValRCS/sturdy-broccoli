console.log("Handling some input events");

//let's create a function that will handle the click event

function handleButtonClick() {
    console.log("Button was clicked");
}



//we need to attach the function to the button click event
//there are several ways to do this

//first way is to use the addEventListener method
//this is a method of the button object
//we can use the button object because we have a reference to it in the btn variable

// const btn = document.querySelector('button'); //this would select the first button on the page
//better to use a more specific selector
//we will select by id and use the id attribute of the button
const btn = document.querySelector('#myButton'); //this would select the button with id myButton
//remember # in CSS is used for id, so we use it here as well

//now we have a button and we can attach an event listener to it
//we will use the click event

btn.addEventListener('click', handleButtonClick); //this will call the handleButtonClick function when the button is clicked

//so if we have multiple buttons we just make sure we have a reference to each button
//and attach the event listener to each button

//we can also use the onclick property of the button
//lets get another buttonmyButton2
const btn2 = document.querySelector('#mySecondButton');
//we can use the onclick property to attach a function to the click event
//this is a bit shorter but we can only have one function attached to the click event
//if we have multiple functions we need to use the addEventListener method

btn2.onclick = handleButtonClick; //so this shorter but only one listener is allowed

//let's create a function to handle mouseover event

//lets use event target to get the button that was clicked
//name handleMouseOver is arbitrary up to you but handle is a good prefix
function handleMouseOver(event) {
    console.log("Mouse is over some element");
    // console.log(event.target); //this will print the button that was clicked
    //log the id of the button
    console.log(`The id of the button is ${event.target.id}`);
    //log the class of the button
    console.log(`The class of the button is ${event.target.className}`);
    //log the text of the element
    console.log(`The text of the button is ${event.target.innerText}`);
}

//we can use the addEventListener method to attach the function to the mouseover event
btn.addEventListener('mouseover', handleMouseOver);
btn2.addEventListener('mouseover', handleMouseOver);

// const headline2 = document.querySelector('h2'); //this will select the first h2 on the page
//it would work but it is better to use a more specific selector
const headline2 = document.querySelector('.h2-headline'); //this will select the first h2 with class h2-headline
// . denotes a class in CSS so we use it here as well

//lets attach the same handleMouseOver function to the h2 headline
// headline2.addEventListener('mouseover', handleMouseOver);
//alternative way to attach the function to the event
headline2.onmouseover = handleMouseOver; //again only one listener is allowed here

//make a function to make text uppercase
function makeTextUppercase() {
    // console.log(event.target.innerText);
    // console.log(event.target.innerText.toUpperCase());
    console.log("Will make text uppercase");
    //lets get text input element which we want to uppercase
    const textInput = document.querySelector('#myTextBox');
    console.log(textInput.value);
    //we can change the value of the text input
    textInput.value = textInput.value.toUpperCase(); //you can do whatever you want here with the value
    //so input fields have value property which we can change
}

const btn3 = document.querySelector('#myUppercaseButton');
btn3.addEventListener('click', makeTextUppercase);

//lets handle change in the text input
function handleTextInputChange(event) {
    console.log("Text input changed");
    console.log(event.target.value);
    const nameLengthParagraph = document.querySelector('.name-length');
    nameLengthParagraph.innerText = `The length of the name is ${event.target.value.length}`;
}

//and let's attach the function to the change event
const textInput = document.querySelector('#myTextBox');
// textInput.addEventListener('change', handleTextInputChange);
//change event is fired when the value of the input field changes and the
// focus is lost for example when you click on another element or press Enter

//there is another event called input
//this event is fired when the value of the input field changes
//so it is fired even if the focus is not lost
//so if you type in the input field you will see the event being fired

//so if you want to handle the change event you need to use the change event
//if you want to handle the input event you need to use the input event

//so let's attach the same function to the input event
textInput.addEventListener('input', handleTextInputChange);