'use client';
import { useContext } from 'react';

import Timer from './Timer';
import InputForm from './InputForm';
import Buttons from './Buttons';
import PomodoroContext from '@/app/context/PomodoroContext';
import SessionEndModal from '../modal/SessionEndModal';
import RestEndModal from '../modal/RestEndModal';
import PomodoroEndModal from '../modal/PomodoroEndModal';
// import bell from '../../../../public/audio/bell.mp3';
// import bell from '/audio/bell.mp3';

import styles from './Pomodoro.module.css';

export default function Pomodoro() {
	const ctx = useContext(PomodoroContext);

	return (
		<section className={styles.pomodoro}>
			{ctx.openSessionEndModal && <SessionEndModal />}
			{ctx.openRestEndModal && <RestEndModal />}
			{ctx.openPomodoroEndModal && <PomodoroEndModal />}
			<p>{ctx.message}</p>
			<Timer />
			{ctx.isInitialized ? <Buttons /> : <InputForm />}
			<audio ref={ctx.audioRef} src="/audio/bell.mp3" controls />
			{/* <audio ref={ctx.audioRef} src={bell} controls /> */}
			{/* <audio ref={ctx.audioRef} src="../../../../public/audio/bell.mp3" controls /> */}
		</section>
	);
}
