import React, { useState } from 'react';


// Functional component for tracking distance-based exercises
const DistanceExercise = ({ name, returnToMenu }) => {
  // State to track the distance
  const [distance, setDistance] = useState(0);
  
  // Function to increment distance
  const incrementDistance = () => {
    setDistance(distance + 1); 
  };
  
  // Function to reset distance
  const resetDistance = () => {
    setDistance(0);
  };

  return (
    <div>
      {/* Display name of the exercise and current distance */}
      <h2>{name}</h2>
      <p>Distance: {distance} miles</p>
      
      {/* Buttons for incrementing distance, resetting, and returning to main menu */}
      <button onClick={incrementDistance}>Increase Distance</button>
      <button onClick={resetDistance}>Reset</button>
      <button onClick={returnToMenu}>Return to Main Menu</button>
    </div>
  );
};

export default DistanceExercise;
