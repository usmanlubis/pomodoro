"use client";

import { useContext } from 'react';

import Timer from './Timer';
import InputForm from './InputForm';
import Buttons from './Buttons';
import PomodoroContext from '../../context/PomodoroContext';

import styles from './Pomodoro.module.css';

export default function Pomodoro() {
	const ctx = useContext(PomodoroContext);

	return (
		<section className={styles.pomodoro}>
			<Timer />
			{ctx.isInitialized ? <Buttons /> : <InputForm />}
		</section>
	);
}
