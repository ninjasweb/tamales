import Image from 'next/image'
import CallToAction from './components/Buttons/CallToAction'
import styles from './page.module.css'
import TamalPng from '@/assets/img/tamal.png'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero */}
      <section className={styles.hero}>
        <Image src={TamalPng.src} width={120} height={120} alt="tamal tolimense"/>
        <h1>Tamales <br></br><span>TOLIMENSES</span></h1>
        <CallToAction>Pedir Ahora</CallToAction>
      </section>
      {/* Products */}
    </main>
  )
}
