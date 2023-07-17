import Image from 'next/image'
import styles from './whatsapp.module.css'
import WhatsappIcon from '@/assets/img/whatsapp_bubble.svg'
import Link from 'next/link'

const Whatsapp = () => {
  return (
    <Link href="https://wa.me/573142729497" target='_blank'>
        <div title='Contactar por Whatsapp' className={styles.whatsapp__bubble}>
        <Image className={styles.icon} src={WhatsappIcon} width={55} height={55} alt='Contactar por Whatsapp'/>
        </div>
    </Link>
   )
}
 
export default Whatsapp