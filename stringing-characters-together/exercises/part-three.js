//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
console.log(language.slice(0,1) + language.slice(4,5));

//2. Without using slice(), use method chaining to accomplish the same thing.
console.log(language.replace('JavaScript', "JS"));

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
let initials = language.slice(0,1) + language.slice(4,5);
console.log(`The abbreviation for ${language} is ${initials}`);

//4. Just for fun, try chaining 3 or more methods together, and then print the result.
console.log(`The abbreviation for ${language} is ${language.slice(language.indexOf('J'), language.indexOf('J')+ 1)}${language.slice(language.indexOf('S'), language.indexOf('S')+1)}`);

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
console.log(notTitleCase.replace('t', 'T').replace('c', 'C'));

console.log(notTitleCase.slice(0,1).toUpperCase() + notTitleCase.slice(1, notTitleCase.indexOf(' ')) + " " + notTitleCase.slice((notTitleCase.indexOf(' ')) + 1, (notTitleCase.indexOf(' ')) + 2).toUpperCase() + notTitleCase.slice(notTitleCase.indexOf(' ') + 2));
