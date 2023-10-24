"use client";

import { createContext, ReactNode, useState, useEffect } from "react";

interface PomodoroContextType {
  isInitialized: boolean;
  isFirstTime: boolean;
  minute: number;
  second: number;
  handleInit: (session: number) => void;
  handleStart: () => void;
  openSessionEndModal: boolean;
  handleRest: () => void;
  openRestEndModal: boolean;
  handleToNextSession: () => void;
  openPomodoroEndModal: boolean;
  handleStop: () => void;
  handleRestart: () => void;
};

const initialPomodoroContext: PomodoroContextType = {
  isInitialized: false,
  isFirstTime: false,
  minute: 0,
  second: 0,
  handleInit: () => {},
  handleStart: () => {},
  openSessionEndModal: false,
  handleRest: () => {},
  openRestEndModal: false,
  handleToNextSession: () => {},
  openPomodoroEndModal: false,
  handleStop: () => {},
  handleRestart: () => {},
};

const PomodoroContext = createContext<PomodoroContextType>(initialPomodoroContext);


interface PomodoroContextProviderProps {
  children: ReactNode;
};

export const PomodoroContextProvider: React.FC<PomodoroContextProviderProps> = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [session, setSession] = useState(0);
  const [currentSession, setCurrentSession] = useState(0);
  const [isSession, setIsSession] = useState(false);
  const [isRest, setIsRest] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [openSessionEndModal, setOpenSessionEndModal] = useState(false);
  const [openRestEndModal, setOpenRestEndModal] = useState(false);
  const [openPomodoroEndModal, setOpenPomodoroEndModal] = useState(false);

  useEffect(() => {
    let intervalId : NodeJS.Timeout;
    const handleModal = () => {
      if (session === currentSession) {
        setOpenPomodoroEndModal(true);
      } else if (isSession) {
        setOpenSessionEndModal(true);
      } else if (isRest) {
        setOpenRestEndModal(true);
      }
    }

    if (currentSession && !second && !minute) {
      handleModal();
    } else if (isRunning) {
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
  }, [second, minute, isRunning, currentSession, isSession, isRest, session]);

  const handleInit = (session: number) => {
    setSession(session);
    setIsInitialized(true);
    setIsFirstTime(true);
  }

  const handleStart = () => {
    if (isFirstTime) {
      setIsFirstTime(false);
    }
    setIsRunning(true);
    setIsSession(true);
    setCurrentSession((prevState) => ++prevState);
    setMinute(0);
    setSecond(10);
  }

  const handleRest = () => {
    setIsSession(false);
    setIsRest(true);
    setOpenSessionEndModal(false);

    if (currentSession % 4 === 0) {
      setMinute(0);
      setSecond(15);
      return;
    }

    setMinute(0);
    setSecond(5);
  }

  const handleToNextSession = () => {
    setIsSession(true);
    setIsRest(false);
    setOpenRestEndModal(false);
    setMinute(0);
    setSecond(10);
    setCurrentSession((prevState) => ++prevState)
  }

  const handleStop = () => {
    setIsInitialized(false);
    setSession(0);
    setCurrentSession(0);
    setIsSession(false);
    setIsRest(false);
    setIsFirstTime(false);
    setIsRunning(false);
    setMinute(0);
    setSecond(0);
    setOpenSessionEndModal(false);
    setOpenRestEndModal(false);
    setOpenPomodoroEndModal(false);
  }

  const handleRestart = () => {
    if (isRest) {
      if (currentSession % 4 === 0) {
        setMinute(30);
        setSecond(0);
      } else {
        setMinute(5);
        setSecond(0);
      }
    } else if (isSession) {
      setMinute(25);
      setSecond(0);
    }
  }

  return (
    <PomodoroContext.Provider value={{ isInitialized, isFirstTime, minute, second, handleInit, handleStart, openSessionEndModal, handleRest, openRestEndModal, handleToNextSession, openPomodoroEndModal, handleStop, handleRestart }}>
      {children}
    </PomodoroContext.Provider>
  );
};

export default PomodoroContext;