import { useState, useEffect } from "react";

export const useTimer = (
  initialHours: number,
  initialMinutes: number,
  initialSeconds: number
) => {
  const [time, setTime] = useState({
    hr: initialHours,
    min: initialMinutes,
    sec: initialSeconds,
  });

  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTime((prevTime) => {
        const { hr, min, sec } = prevTime;

        if (hr === 0 && min === 0 && sec === 0) {
          clearInterval(interval);
          setIsRunning(false); // Stop the timer
          return prevTime;
        }

        if (sec === 0) {
          if (min === 0) {
            return { hr: hr - 1, min: 59, sec: 59 };
          }
          return { hr, min: min - 1, sec: 59 };
        }

        return { hr, min, sec: sec - 1 };
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [isRunning]);

  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setTime({ hr: initialHours, min: initialMinutes, sec: initialSeconds });
  };

  return { time, startTimer, stopTimer, resetTimer, isRunning };
};