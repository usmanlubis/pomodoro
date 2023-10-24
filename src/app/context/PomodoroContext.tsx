"use client";

import { createContext, ReactNode, useState, useEffect } from "react";

interface PomodoroContextType {
  isInitialized: boolean;
  isFirstTime: boolean;
  minute: number;
  second: number;
};

const initialPomodoroContext: PomodoroContextType = {
  isInitialized: false,
  isFirstTime: false,
  minute: 0,
  second: 0,
};

const PomodoroContext = createContext<PomodoroContextType>(initialPomodoroContext);


interface PomodoroContextProviderProps {
  children: ReactNode;
};

export const PomodoroContextProvider: React.FC<PomodoroContextProviderProps> = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    let intervalId : NodeJS.Timeout;

    if (isRunning) {
      intervalId = setInterval(() => {
        if (second === 0 && minute === 0) {
          clearInterval(intervalId);
        } else if (second === 0) {
          setSecond(59);
          setMinute(minute - 1);
        } else {
          setSecond(second - 1);
        }
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [second, minute, isRunning]);

  return (
    <PomodoroContext.Provider value={{ isInitialized, isFirstTime, minute, second }}>
      {children}
    </PomodoroContext.Provider>
  );
};

export default PomodoroContext;