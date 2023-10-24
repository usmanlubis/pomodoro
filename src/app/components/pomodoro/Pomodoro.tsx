'use client';
import { useContext } from 'react';

import Timer from './Timer';
import InputForm from './InputForm';
import Buttons from './Buttons';
import PomodoroContext from '@/app/context/PomodoroContext';

import styles from './Pomodoro.module.css';

export default function Pomodoro() {
	const ctx = useContext(PomodoroContext);

	return (
		<section className={styles.pomodoro}>
			<p>{ctx.message}</p>
			<Timer />
			{ctx.isInitialized ? <Buttons /> : <InputForm />}
			<audio ref={ctx.audioRef} src="/audio/bell.mp3" />
		</section>
	);
}
