'use client';
import { useContext } from 'react';

import Header from './components/header/Header';
import Pomodoro from './components/pomodoro/Pomodoro';
import Footer from './components/footer/Footer';
import { PomodoroContextProvider } from './context/PomodoroContext';
import SessionEndModal from './components/modal/SessionEndModal';
import RestEndModal from './components/modal/RestEndModal';
import PomodoroEndModal from './components/modal/PomodoroEndModal';
import PomodoroContext from '@/app/context/PomodoroContext';

export default function Home() {
  const ctx = useContext(PomodoroContext);

  return (
    <>
      <PomodoroContextProvider>
        {ctx.openSessionEndModal && <SessionEndModal />}
        {ctx.openRestEndModal && <RestEndModal />}
        {ctx.openPomodoroEndModal && <PomodoroEndModal />}
        <Header />
        <main>
          <Pomodoro />
        </main>
        <Footer />
      </PomodoroContextProvider>
    </>
  )
}
