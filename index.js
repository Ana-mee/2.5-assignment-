//buttons
let addButton = document.querySelector('#add');
let subButton = document.querySelector('#sub');
let multButton = document.querySelector('#mult');
let divButton = document.querySelector('#div');
let modButton = document.querySelector('#mod');

//inputs
let one = document.querySelector('#one');
let two = document.querySelector('#two');

//result
let resultElement = document.querySelector('#final');

// click event listeners
addButton.addEventListener('click', performAdd);
subButton.addEventListener('click', performSub);
multButton.addEventListener('click', performMult);
divButton.addEventListener('click', performDiv);
modButton.addEventListener('click', performMod);

// Addition
function performAdd() {
    let num1 = parseInt(one.value);
    let num2 = parseInt(two.value);
    let result = num1 + num2;
    resultElement.textContent = result;
}

// Subtraction
function performSub() {
    let num1 = parseInt(one.value);
    let num2 = parseInt(two.value);
    let result = num1 - num2;
    resultElement.textContent = result;
}

// Multiplication
function performMult() {
    let num1 = parseInt(one.value);
    let num2 = parseInt(two.value);
    let result = num1 * num2;
    resultElement.textContent = result;
}

// Division
function performDiv() {
    let num1 = parseInt(one.value);
    let num2 = parseInt(two.value);
    let result = num1 / num2;
    resultElement.textContent = result;
}

// Modulo
function performMod() {
    let num1 = parseInt(one.value);
    let num2 = parseInt(two.value);
    let result = num1 % num2;
    resultElement.textContent = result;
}