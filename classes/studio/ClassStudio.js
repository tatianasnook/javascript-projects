//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, 
// and scores. Note that scores will be an array of test results.

class CrewCandidate {
  constructor(name, mass, scores) {
    this.name = name;
    this.mass = mass;
    this.scores = scores;
  }

  addScore(newScore) {
    this.scores.push(newScore);
  }

  average() {
    let totalSum = 0;
    for(let i = 0; i < this.scores.length; i++){
      totalSum += this.scores[i];
    }
    let average = totalSum/this.scores.length;
    return Math.round(average * 10)/ 10;
  }

  status() {
    let averageScore = this.average();
    let result = '';

    if(averageScore >= 90){
      result = 'Accepted';
    } else if(averageScore >= 80){
      result = 'Reserve';
    } else if(averageScore >= 70){
      result = 'Probationary';
    } else {
      result = 'Rejected';
    }

    return `\n${this.name} earned an average test score of ${averageScore}% and has a status of ${result}`;
  }
}

const bear = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
const maltese = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
const gator = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);

console.log(bear);
console.log(maltese);
console.log(gator);

//Add methods for adding scores, averaging scores and determining candidate status as described in 
// the studio activity.

bear.addScore(83);
console.log(bear.scores);
console.log(maltese.average());

console.log(bear.status());
console.log(maltese.status());
console.log(gator.status());



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will 
// it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

let numTest = 0;
while(gator.average() < 80){
  gator.addScore(100);
  numTest++;
}
// console.log(gator.status());
console.log(`${numTest} tests to do to reach Reserve status`);

while(gator.average() < 90){
  gator.addScore(100);
  numTest++;
}
console.log(`${numTest} tests to do to reach Accepted status`)
