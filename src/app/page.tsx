import Header from './components/header/Header';
import Pomodoro from './components/pomodoro/Pomodoro';
import Footer from './components/footer/Footer';
// import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Pomodoro />
      </main>
      <Footer />
    </>
  )
}
