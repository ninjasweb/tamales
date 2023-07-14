import Image from 'next/image'
import styles from './whatsapp.module.css'
import WhatsappIcon from '@/assets/img/whatsapp_bubble.svg'

const Whatsapp = () => {
  return ( 
    <div title='Contactar por Whatsapp' className={styles.whatsapp__bubble}>
      <Image className={styles.icon} src={WhatsappIcon} width={55} height={55} alt='Contactar por Whatsapp'/>
    </div>
   )
}
 
export default Whatsapp