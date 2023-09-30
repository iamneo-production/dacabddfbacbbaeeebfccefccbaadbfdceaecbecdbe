import React, { useState } from 'react';

const RPSGame = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const handlePlayerChoice = (choice) => {
    setPlayerChoice(choice);

    // Generate a random choice for the computer
    const choices = ['Rock', 'Paper', 'Scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Determine the result
    if (choice === computerChoice) {
      setResult('It\'s a tie!');
    } else if (
      (choice === 'Rock' && computerChoice === 'Scissors') ||
      (choice === 'Paper' && computerChoice === 'Rock') ||
      (choice === 'Scissors' && computerChoice === 'Paper')
    ) {
      setResult(`You chose ${choice} and won!`);
    } else {
      setResult(`You chose ${choice} and lost. Computer chose ${computerChoice}.`);
    }
  };

  const resetGame = () => {
    setPlayerChoice(null);
    setResult(null);
  };

  return (
    <div>
      <h1>Rock-Paper-Scissors Game</h1>
      {!playerChoice ? (
        <p>Choose your move:</p>
      ) : (
        <>
          <p>You chose {playerChoice}</p>
          <p>{result}</p>
          <button onClick={resetGame}>Play Again</button>
        </>
      )}
      <div>
        <button data-testid="rock-button" onClick={() => handlePlayerChoice('Rock')}>Rock</button>
        <button data-testid="paper-button" onClick={() => handlePlayerChoice('Paper')}>Paper</button>
        <button data-testid="scissors-button" onClick={() => handlePlayerChoice('Scissors')}>Scissors</button>
      </div>
    </div>
  );
};

export default RPSGame;
