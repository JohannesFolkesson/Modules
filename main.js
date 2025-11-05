// import lenght converter
//import { convert as convertLength } from "./convert-length.js";

//import weight converter
import { convert as convertWeight} from "./convert-weight.js";

// import temperature converter
//import {convert as convertTemp} from "./convert-temperature.js";

// const btn = document.querySelector("#btn")
// const btnLength = document.querySelector("#btnLength")



// {function printTemp() {
//     const input = document.getElementById('userInputTemp');
//     const text = document.getElementById('displayTemp');

//     let tempC = Number(input.value);
//     let tempF = convertTemp(tempC);

//     text.textContent = `The input temperature celsius ${tempC} is ${tempF} degrees in fahrenheit.`

//     input.value = ''

// }

// btn.addEventListener('click', (event) => {
//     printTemp();
// });


// function printLength() {
//     const input = document.getElementById('userInputLength');
//    const text = document.getElementById('displayLength');

//     let lengthC = Number(input.value);
//     let lengthM = convertLength(lengthC);

//     text.textContent = `The input length ${lengthC}cm is ${lengthM}  in meters.`

// }

// btnLength.addEventListener('click', (event) => {
//     printLength();
// });}




const btnWeight = document.querySelector("#btnWeight")

function printWeight() {
    const input = document.getElementById('userInputWeight');
   const text = document.getElementById('displayWeight');

    let weightC = Number(input.value);
    let weightM = convertWeight(weightC);

    text.textContent = `The input weight ${weightC}kg is ${weightM}  in pounds.`

}

btnWeight.addEventListener('click', (event) => {
    printWeight();
});
   


