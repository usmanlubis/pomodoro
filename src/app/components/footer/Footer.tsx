import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles['footer-content']}>
        &copy; {new Date().getFullYear()}
          <a href="https://github.com/usmanlubis" target="_blank" className={styles['footer-content__link']}> Usman Lubis </a>
        All right reserved.
      </p>
    </footer>
  )
}