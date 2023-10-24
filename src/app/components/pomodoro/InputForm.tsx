'use client';

import { useState, useContext } from 'react';

import PomodoroContext from '@/app/context/PomodoroContext';

import styles from './InputForm.module.css';

export default function Form() {
  const [input, setInput] = useState('')
  const ctx = useContext(PomodoroContext);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (+input > 0) {
      ctx.handleInit(+input);
      setInput('');
    } else {
      return;
    }
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <input type="number" placeholder="Masukkan jumlah sesi" required value={input} onChange={(e) => setInput(e.target.value)} />
      <div>
        <button type="submit">Mulai</button>
      </div>
    </form>
  );
};