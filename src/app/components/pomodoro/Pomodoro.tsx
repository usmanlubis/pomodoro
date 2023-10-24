'use client';

import { useContext } from 'react';

import Timer from './Timer';
import InputForm from './InputForm';
import Buttons from './Buttons';
import SessionEndModal from '../modal/SessionEndModal';
import RestEndModal from '../modal/RestEndModal';
import PomodoroEndModal from '../modal/PomodoroEndModal';
import PomodoroContext from '@/app/context/PomodoroContext';

import styles from './Pomodoro.module.css';

export default function Pomodoro() {
	const ctx = useContext(PomodoroContext);

	return (
		<section className={styles.pomodoro}>
			<p>{ctx.message}</p>
			{ctx.openSessionEndModal && <SessionEndModal />}
			{ctx.openRestEndModal && <RestEndModal />}
			{ctx.openPomodoroEndModal && <PomodoroEndModal />}
			<Timer />
			{ctx.isInitialized ? <Buttons /> : <InputForm />}
			<audio ref={ctx.audioRef} src="/audio/bell.mp3" />
		</section>
	);
}
