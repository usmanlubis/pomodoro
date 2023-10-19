import styles from './InputForm.module.css';

export default function Form() {
  return (
    <form className={styles.form}>
      <input type="number" placeholder="Masukkan jumlah sesi" required />
      <div>
        <button type="submit">Ok</button>
      </div>
    </form>
  );
};