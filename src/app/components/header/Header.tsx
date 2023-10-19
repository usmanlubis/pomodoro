import Link from 'next/link';

import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <Link href="/" className={styles['header-brand']}>Pomodoro</Link>
      </h1>
    </header>
  )
}