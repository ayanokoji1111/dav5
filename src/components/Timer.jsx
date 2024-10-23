import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    
    return () => {
      clearInterval(timer); 
    };
  }, [isRunning]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouseCoords({ x: event.clientX, y: event.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove); 
    };
  }, []);

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div>
      <h1>Timer: {time}s</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
      <h2>Mouse Coordinates: X: {mouseCoords.x}, Y: {mouseCoords.y}</h2>
    </div>
  );
};

export default Timer;
