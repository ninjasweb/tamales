import styles from './page.module.css'
import OrderForm from "../components/Form/OrderForm"

const HacerPedido = () => {
  return ( 
    <>
      <div className={styles.form__page}>
        <div className={styles.form__container}>
          <h2>Haz tu pedido online.</h2>
          <h2>Paga cuando recibas tu pedido</h2>
          <OrderForm/>
          <p className={styles.info}>Recibirás una llamada o mensaje de confirmación de tu pedido.</p>
        </div>
      </div>
    </>
   )
}
 
export default HacerPedido