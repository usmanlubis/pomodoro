'use client';
import { createContext, ReactNode, useState, useEffect, useRef } from "react";

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
  handlePause: () => void;
  handleContinue: () => void;
  isRunning: boolean;
  message: string;
  audioRef: React.RefObject<HTMLAudioElement> | null;
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
  handlePause: () => {},
  handleContinue: () => {},
  isRunning: false,
  message: '',
  audioRef: null,
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
  const [message, setMessage] = useState('Selamat datang, silahkan masukkan jumlah sesi yang kamu inginkan')
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    let intervalId : NodeJS.Timeout;

    const playSound = () => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    }

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
      playSound();
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
    setMessage('Klik tombol mulai')
  }

  const handleStart = () => {
    if (isFirstTime) {
      setIsFirstTime(false);
    }
    setIsRunning(true);
    setIsSession(true);
    setCurrentSession((prevState) => {
      setMessage(`Sesi ${prevState + 1}`)
      return ++prevState
    });
    setMinute(25);
    setSecond(0);
  }

  const handleRest = () => {
    setIsSession(false);
    setIsRest(true);
    setOpenSessionEndModal(false);

    if (currentSession % 4 === 0) {
      setMinute(30);
      setSecond(0);
      setMessage('Istirahat panjang')
      return;
    }

    setMinute(5);
    setSecond(0);
    setMessage('Istirahat singkat')
  }

  const handleToNextSession = () => {
    setIsSession(true);
    setIsRest(false);
    setOpenRestEndModal(false);
    setMinute(25);
    setSecond(0);
    setCurrentSession((prevState) => {
      setMessage(`Sesi ${prevState + 1}`)
      return ++prevState
    });
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
    setMessage('Selamat datang, silahkan masukkan jumlah sesi yang kamu inginkan');
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

  const handlePause = () => {
    setIsRunning(false);
  }

  const handleContinue = () => {
    setIsRunning(true);
  }

  return (
    <PomodoroContext.Provider value={{ isInitialized, isFirstTime, minute, second, handleInit, handleStart, openSessionEndModal, handleRest, openRestEndModal, handleToNextSession, openPomodoroEndModal, handleStop, handleRestart, handlePause, handleContinue, isRunning, message, audioRef }}>
      {children}
    </PomodoroContext.Provider>
  );
};

export default PomodoroContext;