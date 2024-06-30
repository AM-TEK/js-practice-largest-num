let numOneInput = prompt("Enter First Number");
let numOneNumber = Number(numOneInput);

let numTwoInput = prompt("Enter Second Number");
let numTwoNumber = Number(numTwoInput);

let numThreeInput = prompt("Enter Third Number");
let numThreeNumber = Number(numThreeInput);

const divOne = document.createElement("div");
const divOneContent = document.createTextNode(`First number is : ${numOneNumber}`);
divOne.appendChild(divOneContent);
const parentDiv = document.getElementById("parentDiv");
document.body.insertBefore(divOne, parentDiv);

const divTwo = document.createElement("div");
const divTwoContent = document.createTextNode(`Second number is : ${numTwoNumber}`);
divTwo.appendChild(divTwoContent);
const parentDivTwo = document.getElementById("parentDiv");
document.body.insertBefore(divTwo, parentDiv);

const divThree = document.createElement("div");
const divThreeContent = document.createTextNode(`Third number is : ${numThreeNumber}`);
divThree.appendChild(divThreeContent);
const parentdivThree = document.getElementById("parentDiv");
document.body.insertBefore(divThree, parentDiv);

const result = document.getElementById("largest");

if (numOneNumber > numTwoNumber && numOneNumber > numThreeNumber) {
  const largest = document.createTextNode(`The largest number is ${numOneInput}`)
  result.appendChild(largest);
} else if (numTwoNumber > numOneNumber && numTwoNumber > numThreeNumber) {
  const largest = document.createTextNode(`The largest number is ${numTwoInput}`)
  result.appendChild(largest);
} else {
  const largest = document.createTextNode(`The largest number is ${numThreeInput}`)
  result.appendChild(largest);
}