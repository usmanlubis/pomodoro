'use client';

import { useContext } from 'react';
import PomodoroContext from '@/app/context/PomodoroContext';

import styles from './Modal.module.css';

export default function SessionEndModal() {
  const ctx = useContext(PomodoroContext);
  
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <p>Sesi berakhir</p>
        <div>
          <button onClick={ctx.handleRest}>Istirahat</button>
        </div>
      </div>
    </div>
  )
}