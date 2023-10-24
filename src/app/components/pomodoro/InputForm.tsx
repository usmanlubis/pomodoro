"use client";

import { useRef, useContext } from 'react';

import PomodoroContext from '../../context/PomodoroContext';

import styles from './InputForm.module.css';

export default function Form() {
  const input = useRef();
  const ctx = useContext(PomodoroContext);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(input);
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <input type="number" placeholder="Masukkan jumlah sesi" required />
      <div>
        <button type="submit">Ok</button>
      </div>
    </form>
  );
};