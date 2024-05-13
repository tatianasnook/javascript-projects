const input = require('readline-sync');
//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another 
// for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let fuelLevel = 0;
let numAstronauts = 0;
let altitude = 0;

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer 
  value greater than 5000 but less than 30000. */
fuelLevel = input.question('Enter the starting fuel level: ');

while(Number(fuelLevel) > 30000 || Number(fuelLevel) <= 5000){
  fuelLevel = input.question('Invalid input. Enter the starting fuel level: ');
}

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.

numAstronauts = input.question('Enter the number of astronauts: ');

while(Number(numAstronauts) > 7 || Number(numAstronauts) < 1){
  numAstronauts = input.question('Invalid input. Enter the number of astronauts: ')
}

//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, 
// decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

while(fuelLevel - 100 * numAstronauts >= 0){
  fuelLevel = fuelLevel - 100 * numAstronauts;
  altitude += 50;
}

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”
If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

let output = `The shuttle gained an altitude of ${altitude} km.`;

if(altitude >= 2000){
  console.log(`${output} Orbit achieved!`);
} else {
  console.log(`${output} Failed to reach orbit.`);
}