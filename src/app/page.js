import Image from 'next/image'
import CallToAction from './components/Buttons/CallToAction'
import styles from './page.module.css'
import TamalPng from '@/assets/img/tamal.png'
import ProductGrid from './components/Products/ProductGrid'
import Tape from './components/Tape'
import LocationIcon from '@/assets/img/location.svg'

export default function Home() {
  return (
      <main className={styles.main}>
        {/* Hero */}
        {/* <section className={styles.hero}>
          <Image src={TamalPng.src} width={120} height={120} alt="tamal tolimense"/>
          <h1>Tamales <br></br><span>TOLIMENSES</span></h1>
          <CallToAction>PEDIR AHORA</CallToAction>
        </section> */}
        {/* Products */}
        {/* <section className={styles.products}>
          <h2>Nuestros Tamales</h2>
          <p>Tenemos diferentes tamales para todos los gustos. <br></br> Escoge el que prefieras.</p>
          <ProductGrid/>
        </section> */}
        {/* Aviso */}
        <Tape/>
        {/* Horarios */}
        {/* <section className={styles.times}>
          <h3>Horarios:</h3>
          <h4>SAB-DOM-FEST</h4>
          <h4>7:00 AM - 12:00 PM</h4>
          <p style={{display: 'flex', margin: '0 auto', alignItems: 'center'}}><Image src={LocationIcon} width={30} height={30} alt='Ibagué'/> Ibagué, Tolima</p>
        </section> */}
        {/* Call to Action */}
        {/* <section className={styles.cta}>
          <h3 style={{color: 'var(--white)'}}>El verdadero</h3>
          <h3 style={{color: 'var(--yellow)', marginBottom: '1rem'}}>Tamal Tolimense</h3>
          <CallToAction>PEDIR AHORA</CallToAction>
        </section> */}
        {/* Aviso */}
        <Tape/>
      </main>
  )
}
