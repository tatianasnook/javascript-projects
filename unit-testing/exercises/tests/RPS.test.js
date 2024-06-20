
const whoWon = require('../RPS.js');

describe("who won rock, paper, scissors", function(){
  test("return 'wrong enter' if player1 and player2 choose any other words than 'scissors','rock' or 'paper", function(){
    let output = whoWon('apple', 'salmon')
    expect(output).toBe('wrong enter')
  });

  test("return 'TIE!' if both players choose the same option", function(){
    let output = whoWon('rock', 'rock')
    expect(output).toBe('TIE!')
  });

  test("return 'Player 2 wins!' if player1 choose 'rock' and player2 choose 'paper", function(){
    let output = whoWon('rock', 'paper')
    expect(output).toBe('Player 2 wins!')
  });

  test("return 'Player 2 wins!' if player1 choose 'paper' and player2 choose 'scissors", function(){
    let output = whoWon('paper', 'scissors')
    expect(output).toBe('Player 2 wins!')
  });

  test("return 'Player 2 wins!' if player1 choose 'scissors' and player2 choose 'rock", function(){
    let output = whoWon('scissors', 'rock')
    expect(output).toBe('Player 2 wins!')
  });

  test("return 'Player 1 wins!' in any other situations", function(){
    let output = whoWon('paper', 'rock')
    expect(output).toBe('Player 1 wins!')
  });
})