import React, { useState, useEffect } from 'react';

const DurationExercise = ({ name, returnToMenu }) => {
    //state to track the timer value and running status
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  //effect to update the timer every second when its running
  useEffect(() => {
    // If the timer is running, set up an interval to update the timer every second
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000); // Update every second
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);
 //funtion to start timer
  const startTimer = () => {
    setIsRunning(true);
  };
 //function to stop timer 
  const stopTimer = () => {
    setIsRunning(false);
  };
 //function to reset the timer 
  const resetTimer = () => {
    setTimer(0);
    setIsRunning(false);
  };
  //function to format timer value
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>Timer: {formatTime(timer)}</p>
        {/*buttons for start, stop, reset timer and return to menu*/}
      {!isRunning ? (
        <button onClick={startTimer}>Start Timer</button>
      ) : (
        <button onClick={stopTimer}>Stop Timer</button>
      )}
      <button onClick={resetTimer}>Reset</button>
      <button onClick={returnToMenu}>Return to Main Menu</button>
    </div>
  );
};

export default DurationExercise;