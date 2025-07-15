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
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const handlePlay = (choice) => {
    const compChoice = choices[Math.floor(Math.random() * choices.length)];
    const outcome = getResult(choice, compChoice);

    setUserChoice(choice);
    setComputerChoice(compChoice);
    setResult(outcome);

    if (outcome === 'You Win!') setUserScore((prev) => prev + 1);
    else if (outcome === 'You Lose!') setComputerScore((prev) => prev + 1);
  };

  const handleReset = () => {
    setUserChoice('');
    setComputerChoice('');
    setResult('');
    setUserScore(0);
    setComputerScore(0);
  };

  return (
    <div className={darkMode ? 'game dark' : 'game'}>
      <h2>✊ Rock ✋ Paper ✌️ Scissors</h2>

      <div className="scoreboard">
        <p>🧑 You: {userScore}</p>
        <p>💻 Computer: {computerScore}</p>
      </div>

      <div className="buttons">
        {choices.map((choice) => (
          <button key={choice} onClick={() => handlePlay(choice)}>
            {choice}
          </button>
        ))}
      </div>

      <div className="result">
        {result && (
          <>
            <p>You chose: <strong>{userChoice}</strong></p>
            <p>Computer chose: <strong>{computerChoice}</strong></p>
            <h3>{result}</h3>
          </>
        )}
      </div>

      <div className="actions">
        <button onClick={handleReset} className="reset">🔁 Reset</button>
        <button onClick={() => setDarkMode(!darkMode)} className="toggle-mode">
          {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
    </div>
  );
}

export default Game;
