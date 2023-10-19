import { VscDebugRestart } from 'react-icons/vsc';
import { BsFillPlayFill, BsFillStopFill } from 'react-icons/bs';

import styles from './Buttons.module.css';

export default function Buttons() {
  return (
    <section className={styles.buttons}>
      <button className={styles['action-button']}><VscDebugRestart /></button>
      <button className={styles['action-button']}><BsFillPlayFill /></button>
      <button className={styles['action-button']}><BsFillStopFill /></button>
    </section>
  );
};