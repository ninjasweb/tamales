import Image from 'next/image'
import styles from './page.module.css'
import TamalPng from '@/assets/img/tamal.png'

const OrdenEnviada = () => {
  return ( 
    <div className={styles.sendOrder}>
      <Image src={TamalPng} width={120} height={120} alt="Tamales Tolimenses"/>
      <h2>¡Gracias, tu pedido ha sido enviado!</h2>
      <p>Recibirás un mensaje o una llamada de confirmación de tu pedido.</p>
    </div>
   )
}
 
export default OrdenEnviada