// Define your Book class here:
class Book {
  constructor(title, author, copyrightDate, isbn, numOfPages, numCheckOut, discarded){
    this.title = title;
    this.author = author;
    this.copyrightDate = copyrightDate;
    this.isbn = isbn;
    this.numOfPages = numOfPages;
    this.numCheckOut = numCheckOut;
    this.discarded = discarded;
  }
  checkout(uses = 1){
    this.numCheckOut += uses;
  }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
  constructor(title, author, copyrightDate, isbn, numOfPages, numCheckOut, discarded){
    super(title, author, copyrightDate, isbn, numOfPages, numCheckOut, discarded);
  }
  discardBook(currentYear){
    if (currentYear - this.copyrightDate > 5){
      this.discarded = 'Yes';
    }
  }
}

class Novel extends Book {
  constructor(title, author, copyrightDate, isbn, numOfPages, numCheckOut, discarded){
    super(title, author, copyrightDate, isbn, numOfPages, numCheckOut, discarded);
  }
  discardBook(){
    if (this.numCheckOut > 100){
      this.discardBook = 'Yes'
    }
  }
}

// Declare the objects for exercises 2 and 3 here:
let prideAndPrejudice = new Novel('Pride and Prejudice', 'Jane Austen', 1813, '1111111111111', 432, 32, "No");
let topSecretShuttleBuildingManual = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, "No"); 
console.log(prideAndPrejudice);
console.log(topSecretShuttleBuildingManual);

// Code exercises 4 & 5 here:
topSecretShuttleBuildingManual.discardBook(2024);
console.log(topSecretShuttleBuildingManual);

prideAndPrejudice.checkout(5);
console.log(prideAndPrejudice);