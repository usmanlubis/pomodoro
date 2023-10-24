'use client';

import { useContext } from 'react';
import PomodoroContext from '@/app/context/PomodoroContext';

import styles from './Modal.module.css';

export default function SessionEndModal() {
  const ctx = useContext(PomodoroContext);
  
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <p>Istirahat selesai, selamat bekerja kembali!</p>
        <div>
          <button onClick={ctx.handleToNextSession}>OK!</button>
        </div>
      </div>
    </div>
  )
}