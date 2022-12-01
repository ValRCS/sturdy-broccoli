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

//lets make a function to display sum of two numbers
function displaySum() {
    //get the two input fields
    // const number1 = document.querySelector('#firstNumber'); //select by id
    // const number2 = document.querySelector('#secondNumber');
    //lets handle unlimited number of inputs by refactoring the code
    const numberInputs = document.querySelectorAll('.numeric-input'); //select by class
    //get sum of all the numbers
    let sum = 0;
    //we can use for loop to iterate over the numberInputs
    for (let i = 0; i < numberInputs.length; i++) {
       sum += Number(numberInputs[i].value);
    }
    //get the result paragraph
    const resultParagraph = document.querySelector('.number-sum'); //selecting by class
    //calculate the sum
    // const sum = parseInt(number1.value) + parseInt(number2.value);
    //display the sum
    resultParagraph.innerText = `The sum is ${sum}`;
}

//lets attach this function to document load event

//we can use the addEventListener method
document.addEventListener('DOMContentLoaded', displaySum);
//so we changed the content of result paragraph when the page is loaded
//mdn docs on DOMContentLoaded event
//https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event

//even better would be to have a main function that will call all the other functions when document is loaded

//now how to attach displaySum to my numeric inputs?
//i could use id for both inputs and attach the function to the change event
//but this is not very good because if i have more inputs i would need to attach the function to each input
//better would be to use a class for both inputs and attach the function to the change event

//so let's do that

//first we need to get the inputs

const numberNodeList= document.querySelectorAll('.numeric-input'); //this will return a NodeList not Array
//so we need to convert it to an array
//we can use Array.from method
const numberArray = Array.from(numberNodeList); //we could have done this in one line but this is more readable
//now we have an array of inputs
//we can use for of loop to iterate over the array
console.log("Let's add input handlers to numeric inputs");
for (const numberInput of numberArray) {
    //log the id of the input
    console.log(`The id of the input is ${numberInput.id}`);
    // numberInput.addEventListener('change', displaySum); //this fires when the focus is lost
    //how about firing the function when the input changes immediately?
    numberInput.addEventListener('input', displaySum);
};

//lets make a function to change background color of our page from the 3 sliders
function changeBackgroundColor() {
    //get the 3 sliders
    const redSlider = document.querySelector('#redSlider');
    const greenSlider = document.querySelector('#greenSlider');
    const blueSlider = document.querySelector('#blueSlider');
    //get the background color paragraph
    const backgroundColorParagraph = document.querySelector('.background-color');
    //get the background color div
    const backgroundColorDiv = document.querySelector('.background-color-div');
    //get the values of the sliders
    const red = redSlider.value;
    const green = greenSlider.value;
    const blue = blueSlider.value;
    //display the values in the paragraph
    backgroundColorParagraph.innerText = `The background color is rgb(${red}, ${green}, ${blue})`;
    //change the background color of the div
    backgroundColorDiv.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

//lets attach changeBackgroundColor to the change event of the sliders
//lets get all 3 color-input inputs

const colorInputs = document.querySelectorAll('.color-input');
//we can use for of loop to iterate over the colorInputs
for (const colorInput of colorInputs) {
    //log id of the input
    console.log(`The id of the input that we are attaching listener is ${colorInput.id}`);
    //colorInput.addEventListener('change', changeBackgroundColor); //again this is fired when the focus is lost
    //we can use input event to fire the function when the input changes
    colorInput.addEventListener('input', changeBackgroundColor);
}

//lets make a function to handle changes in color picker
function handleColorPickerChange(event) {
    console.log("Color picker changed");
    console.log(event.target.value);
    //get the background color div
    const backgroundColorDiv = document.querySelector('.color-pick-paragraph');
    //change the background color of the div
    backgroundColorDiv.style.backgroundColor = event.target.value;
}

//we can attach the listener to the change event
const colorPicker = document.querySelector('#myColorPicker');
colorPicker.addEventListener('change', handleColorPickerChange);

//let's handle changes in the checkbox
function handleCheckboxChange(event) {
    console.log("Checkbox changed");
    console.log(event.target.checked);
    //get the checkbox
    const checkbox = document.querySelector('#myCheckbox');
    //get the paragraph
    const checkboxParagraph = document.querySelector('.checkbox-paragraph');
    //display the value of the checkbox in the paragraph
    checkboxParagraph.innerText = `The checkbox is ${checkbox.checked}`;
}

//again lets attach the listener to the change event
const checkbox = document.querySelector('#myCheckbox');
checkbox.addEventListener('change', handleCheckboxChange);

//let's  handle changes in date picker
function handleDateChange(event) {
    console.log("Date changed");
    console.log(event.target.value);
    //get the date picker
    const datePicker = document.querySelector('#myDateInput');
    //get the paragraph
    const dateParagraph = document.querySelector('.date-paragraph');
    //display the value of the date picker in the paragraph
    dateParagraph.innerText = `The date is ${datePicker.value}`;
}

//again lets attach the listener to the change event
const datePicker = document.querySelector('#myDateInput');
datePicker.addEventListener('change', handleDateChange);


//so using event listeners is a type of asynchronous programming
//we pass functions to the event listeners and they are called when the event happens
//we can also use event listeners to handle events that are not related to the DOM like the load event

//TODO for students
//explore other input types and make a function to handle changes in them
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input