//import statements
import React, { useState } from 'react';
import RepetitionExercise from './components/RepetitionExercise';
import DurationExercise from './components/DurationExercise';
import DistanceExercise from './components/DistanceExercise';
//import css
import './App.css';

function App() {
  //state to track the selected exercise
  const [selectedExercise, setSelectedExercise] = useState(null);
  //function to handle exercise selection
  const handleExerciseSelection = (exerciseType) => {
    setSelectedExercise(exerciseType);
  };
  //function to return to the exercise option menu
  const returnToMenu = () => {
    setSelectedExercise(null);
  };

  return (
    //main container for the app
    <div className="App">
      {/*header for app*/}
      <header className="App-header">
        <h1>Exercise Tracker</h1>
      </header>
      <div className="App-content">
        {selectedExercise ? (
          <div className="exercise-component">
            {/* Render both RepetitionExercise and DurationExercise components */}
            <RepetitionExercise name={selectedExercise} returnToMenu={returnToMenu} />
            <DurationExercise name={selectedExercise} returnToMenu={returnToMenu} />
            <DistanceExercise name={selectedExercise} returnToMenu={returnToMenu} />
          </div>
        ) : (
          <div className="exercise-menu">
            {/* Render buttons for exercise selection */}
            <h2>Select an Exercise:</h2>
            <button onClick={() => handleExerciseSelection("Biking")}>Biking</button>
            <button onClick={() => handleExerciseSelection("Running")}>Running</button>
            <button onClick={() => handleExerciseSelection("Push-ups")}>Push-ups</button>
            <button onClick={() => handleExerciseSelection("Planks")}>Planks</button>
            <button onClick={() => handleExerciseSelection("Lateral Raises")}>Lateral Raises</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;