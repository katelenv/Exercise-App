import React, { useState } from 'react';

// Functional component for tracking repetition exercises
const RepetitionExercise = ({ name, returnToMenu }) => {
  // State to track the number of repetitions
  const [repetitions, setRepetitions] = useState(0);
  
  // Function to increment repetitions
  const incrementRepetitions = () => {
    setRepetitions(repetitions + 1);
  };
  
  // Function to reset repetitions
  const resetRepetitions = () => {
    setRepetitions(0);
  };

  return (
    <div>
      {/* Display name of the exercise and current repetitions */}
      <h2>{name}</h2>
      <p>Repetitions: {repetitions}</p>
      {/* Buttons for incrementing repetitions, resetting, and returning to main menu */}
      <button onClick={incrementRepetitions}>Increase Repetitions</button>
      <button onClick={resetRepetitions}>Reset</button>
      <button onClick={returnToMenu}>Return to Main Menu</button>
    </div>
  );
};

export default RepetitionExercise;
