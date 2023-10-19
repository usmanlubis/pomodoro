import Timer from './Timer';
import InputForm from './InputForm';
// import Buttons from './Buttons';

import styles from './Pomodoro.module.css'

export default function Pomodoro() {
  return (
    <section className={styles.pomodoro}>
      <Timer />
      <InputForm />
      {/* <Buttons /> */}
    </section>
  )
}