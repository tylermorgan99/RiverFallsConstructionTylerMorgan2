
"Use strict";
const PROMPT = require('readline-sync');


let BedroomNumber, BathroomNumber, CarNumber, TotalCost;


function main() {
	SetLotNumber();
	setBedroomNumber();
	setBathroomNumber();
	SetCarNumber();
	SetTotalCost();
	printCost();
}

main();

function SetLotNumber () {
    SetLotNumber = Number(PROMPT.question(`\nPlease enter the lot number`))
}

function setBedroomNumber() {
	BedroomNumber = Number(PROMPT.question(`\nPlease enter # of bedrooms`))
}

function setBathroomNumber() {
    BathroomNumber = Number(PROMPT.question(`\nPlease enter # of bathrooms`))
}

function SetCarNumber() {
    CarNumber = Number(PROMPT.question (`\nPlease enter # of cars for the garage`))
}

function SetTotalCost() {
   TotalCost  = 50000 + BedroomNumber*17000 + BathroomNumber*12500 + CarNumber*6000
}

function printCost () {
    console.log(`Total Lot Cost: \$${TotalCost}`)
}