const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
food = food.split(',').sort();
equipment = equipment.split(',').sort();
pets = pets.split(',').sort();
sleepAids = sleepAids.split(',').sort();

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [food, equipment, pets, sleepAids];
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let cabinetNumber = input.question('Select a cabinet in the cargoHold between 0 and 3, inclusive? ');
let itemInCabinet = input.question('What item from the cabinet do you need? ');

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if(cabinetNumber >= 0 && cabinetNumber <= 3){
  console.log(cargoHold[cabinetNumber]);
} else {
  console.log('Error: Invalid number. Please choose a value between 0 and 3, inclusive.')
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”

if(cargoHold[cabinetNumber].includes(itemInCabinet)){
    console.log(`Cabinet ${cabinetNumber} DOES contain ${itemInCabinet}.`);
} else {
  console.log(`Cabinet ${cabinetNumber} DOES NOT contain ${itemInCabinet}.`);
}
