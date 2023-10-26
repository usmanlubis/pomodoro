'use client';
import { useContext } from 'react';

import Header from './components/header/Header';
import Pomodoro from './components/pomodoro/Pomodoro';
import Footer from './components/footer/Footer';
import { PomodoroContextProvider } from './context/PomodoroContext';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <PomodoroContextProvider>
          <Pomodoro />
        </PomodoroContextProvider>
      </main>
      <Footer />
    </>
  )
}
