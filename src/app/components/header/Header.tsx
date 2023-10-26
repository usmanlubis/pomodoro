import Link from 'next/link';

import { HiOutlineCode } from 'react-icons/hi'
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <section>
        <h1>
          <Link href="/" className={styles['header-brand']}>Pomodoro</Link>
        </h1>
      </section>
      <nav>
        <ul className={styles['nav-links']}>
          <li>
            <a href="https://github.com/usmanlubis/pomodoro" target="_blank" rel="follow" className={styles['nav-link']} title="View code">
              <HiOutlineCode />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}