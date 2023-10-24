"use client";

import { useContext } from 'react';

import Timer from './Timer';
import InputForm from './InputForm';
import Buttons from './Buttons';
import SessionEndModal from '../modal/SessionEndModal';
import RestEndModal from '../modal/RestEndModal';
import PomodoroContext from '../../context/PomodoroContext';

import styles from './Pomodoro.module.css';

export default function Pomodoro() {
	const ctx = useContext(PomodoroContext);

	return (
		<section className={styles.pomodoro}>
			{ctx.openSessionEndModal && <SessionEndModal />}
			{ctx.openRestEndModal && <RestEndModal />}
			<Timer />
			{ctx.isInitialized ? <Buttons /> : <InputForm />}
		</section>
	);
}
