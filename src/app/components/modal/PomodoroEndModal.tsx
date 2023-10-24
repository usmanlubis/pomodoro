'use client';

import { useContext } from 'react';
import PomodoroContext from '@/app/context/PomodoroContext';

import styles from './Modal.module.css';

export default function SessionEndModal() {
  const ctx = useContext(PomodoroContext);
  
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <p>Selamat, semua sesi telah selesai!</p>
        <div>
          <button onClick={ctx.handleStop}>OK!</button>
        </div>
      </div>
    </div>
  )
}