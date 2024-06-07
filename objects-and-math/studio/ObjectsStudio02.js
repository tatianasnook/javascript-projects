// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];

// Code your orbitCircumference function here:
function orbitCircumference(r){
  return Math.round(2 * Math.PI * r)
}
// console.log(orbitCircumference(2000));

// Code your missionDuration function here:
function missionDuration(numOrbits, r = 2000, speed = 28000){
  let time = orbitCircumference(r) / speed;
  let totalTime = time * numOrbits;
  totalTime = Math.round(totalTime * 100) /100;
  console.log(`The mission will travel ${orbitCircumference(r) * numOrbits} km around the planet, and it will take ${totalTime} hours to complete.`);
  return totalTime;
}
// console.log(missionDuration(5));

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(arr){
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

// Code your oxygenExpended function here:

function oxygenExpended(candidateObject, r, speed){

  let spaceWalkHours = missionDuration(3, r, speed);
  let oxygenConsumed = candidateObject.o2Used(spaceWalkHours);
  oxygenConsumed = Math.round(oxygenConsumed * 1000) / 1000;

  return `${candidateObject.name} will perform the spacewalk, which will last ${spaceWalkHours} hours and require ${oxygenConsumed} kg of oxygen.`;
}

// console.log(oxygenExpended(selectRandomEntry(crew), 3000, 50000));

function chooseMemberSmallestOxygenConsumption(crew){
  let consumptionPerHour = [];
  for(let i = 0; i < crew.length; i++){
    consumptionPerHour.push(crew[i].o2Used(1))
  }
  const lowest = Math.min(...consumptionPerHour)
  return lowest;
}

console.log(chooseMemberSmallestOxygenConsumption(crew));