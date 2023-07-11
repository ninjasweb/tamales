import Image from 'next/image'
import CallToAction from './components/Buttons/CallToAction'
import styles from './page.module.css'
import TamalPng from '@/assets/img/tamal.png'
import ProductGrid from './components/Products/ProductGrid'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero */}
      <section className={styles.hero}>
        <Image src={TamalPng.src} width={120} height={120} alt="tamal tolimense"/>
        <h1>Tamales <br></br><span>TOLIMENSES</span></h1>
        <CallToAction>PEDIR AHORA</CallToAction>
      </section>
      {/* Products */}
      <section className={styles.products}>
        <h2>Nuestros Tamales</h2>
        <p>Tenemos diferentes tamales para todos los gustos. Escoge el que prefieras.</p>
        <ProductGrid/>
      </section>
      {/* Horarios */}
      <section className={styles.times}>
        <h3>Horarios:</h3>
        <h4>SAB-DOM-FEST</h4>
        <h4>7:00 AM - 12:00 PM</h4>
      </section>
    </main>
  )
}
