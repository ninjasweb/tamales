import Image from 'next/image'
import CallToAction from './components/Buttons/CallToAction'
import styles from './page.module.css'
import TamalPng from '@/assets/img/tamal.png'
import ProductGrid from './components/Products/ProductGrid'
import Tape from './components/Tape'
import LocationIcon from '@/assets/img/location.svg'
import Payments from './components/Payments'


export default function Home() {
  return (
      <main className={styles.main}>
        {/* Hero */}
        <section className={styles.hero}>
          <Image priority={true} src={TamalPng.src} width={120} height={120} alt="tamal tolimense"/>
          <h1>Tamales <br></br><span>TOLIMENSES</span></h1>
          <CallToAction icon={true}>PEDIR AHORA</CallToAction>
        </section>
        {/* Productos */}
        <section className={styles.products}>
          <h2>Nuestros Tamales</h2>
          <p>Tenemos diferentes tamales para todos los gustos. <br></br> Escoge el que prefieras.</p>
          <ProductGrid/>
        </section>
        {/* Aviso */}
        <Tape textToDisplay={'PICANTE-TRADICIONAL-VEGETARIANO'}/>
        {/* Horarios */}
        <section className={styles.times}>
          <h3>Horarios Domicilios:</h3>
          <h4>VIE-SÁB-DOM</h4>
          <h4>8:00 AM - 01:00 PM</h4>
          <p style={{display: 'flex', margin: '0 auto', alignItems: 'center'}}><Image src={LocationIcon} width={30} height={30} alt='Ibagué'/> Ibagué, Tolima</p>
        </section>
        {/* Call to Action */}
        <section className={styles.cta}>
          <h3 style={{color: 'var(--white)'}}>El verdadero</h3>
          <h3 style={{color: 'var(--yellow)', marginBottom: '1rem'}}>Tamal Tolimense</h3>
          <CallToAction icon>PEDIR AHORA</CallToAction>
        </section>
        {/* Métodos de Pago */}
        <section className={styles.payments}>
          <p>Puedes pagar con:</p>
          <Payments/>
        </section>
        {/* Aviso */}
        <Tape textToDisplay={'Pedidos: +57 314 272 9497 |'}/>
      </main>
  )
}
