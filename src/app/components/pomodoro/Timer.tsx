import { useContext } from 'react';

import PomodoroContext from '../../context/PomodoroContext';

import styles from './Timer.module.css';

export default function Timer() {
  const ctx = useContext(PomodoroContext);

  return (
    <h1 className={styles.timer}>
      {!ctx.isInitialized ? '00:00' : `${String(ctx.minute).padStart(2, '0')}:${String(ctx.second).padStart(2, '0')}`}
    </h1>
  );
};