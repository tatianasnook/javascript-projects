let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function(){
      return Math.floor(Math.random() * 11)
   }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function(){
      return Math.floor(Math.random() * 11)
   }
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function(){
      return Math.floor(Math.random() * 11)
   }
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function(){
      return Math.floor(Math.random() * 11)
   }
};

let microAnimal = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function(){
      return Math.floor(Math.random() * 11)
   }
};

let candidates = [superChimpOne, salamander, superChimpTwo, dog, microAnimal];

// After you have created the other object literals, add the astronautID property to each one.
// Add a move method to each animal object
// Create an array to hold the animal objects.
// Print out the relevant information about each animal.

function crewReports(objName){
   return `${objName.name} is a ${objName.species}. They are ${objName.age} years old and ${objName.mass} kilograms. Their ID is ${objName.astronautID}.`
}
// console.log(crewReports(superChimpOne));
// console.log(crewReports(salamander));
// console.log(crewReports(superChimpTwo));
// console.log(crewReports(dog));
// console.log(crewReports(microAnimal));

// Start an animal race!

function fitnessTest(candidates){
 let results = [], numSteps, turns;
 
 for (let i = 0; i < candidates.length; i++){
     numSteps = 0;
     turns = 0;
     while(numSteps < 20){
     numSteps += candidates[i].move();
     turns++;
     }
     results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
 }
 return results;
}

console.log(fitnessTest(candidates));