"use client";
import { useContext } from 'react';

import { VscDebugRestart } from 'react-icons/vsc';
import { BsFillPlayFill, BsFillStopFill } from 'react-icons/bs';
import PomodoroContext from '@/app/context/PomodoroContext';

import styles from './Buttons.module.css';

export default function Buttons() {
  const ctx = useContext(PomodoroContext);

  return (
    <section className={styles.buttons}>
      { ctx.isFirstTime
        ? <button className={styles['action-button']}><BsFillPlayFill onClick={ctx.handleStart} /></button>
        : <>
            <button className={styles['action-button']}><VscDebugRestart /></button>
            <button className={styles['action-button']}><BsFillPlayFill onClick={ctx.handleStart} /></button>
            <button className={styles['action-button']}><BsFillStopFill /></button>
          </>
      }
      
    </section>
  );
};