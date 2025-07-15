import React, { useState } from 'react';

const choices = ['rock', 'paper', 'scissors'];

const getResult = (user, computer) => {
  if (user === computer) return 'Draw';
  if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'scissors' && computer === 'paper') ||
    (user === 'paper' && computer === 'rock')
  ) return 'You Win!';
  return 'You Lose!';
};

function Game() {
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (choice) => {
    const compChoice = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(choice);
    setComputerChoice(compChoice);
    setResult(getResult(choice, compChoice));
  };

  return (
    <div className="game">
      <div className="buttons">
        {choices.map((choice) => (
          <button key={choice} onClick={() => handleClick(choice)}>
            {choice.charAt(0).toUpperCase() + choice.slice(1)}
          </button>
        ))}
      </div>
      <div className="result">
        <p>You chose: {userChoice}</p>
        <p>Computer chose: {computerChoice}</p>
        <h2>{result}</h2>
      </div>
    </div>
  );
}

export default Game;
