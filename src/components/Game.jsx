import React, { useState } from 'react';

const choices = ['rock', 'paper', 'scissors'];

function getResult(user, computer) {
  if (user === computer) return '🤝 Draw';
  if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'scissors' && computer === 'paper') ||
    (user === 'paper' && computer === 'rock')
  ) return '🎉 You Win!';
  return '💀 You Lose!';
}

function Game() {
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const playGame = (userMove) => {
    const compMove = choices[Math.floor(Math.random() * choices.length)];
    const gameResult = getResult(userMove, compMove);

    setUserChoice(userMove);
    setComputerChoice(compMove);
    setResult(gameResult);
  };

  return (
    <div className="game">
      <h2>🕹️ Choose your move:</h2>
      <div className="buttons">
        {choices.map(choice => (
          <button key={choice} onClick={() => playGame(choice)}>
            {choice.charAt(0).toUpperCase() + choice.slice(1)}
          </button>
        ))}
      </div>

      <div className="result">
        {userChoice && (
          <>
            <p>🧑 You: <strong>{userChoice}</strong></p>
            <p>💻 Computer: <strong>{computerChoice}</strong></p>
            <h3>{result}</h3>
          </>
        )}
      </div>
    </div>
  );
}

export default Game;
