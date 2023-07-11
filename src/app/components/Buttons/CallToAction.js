import Image from 'next/image'
import styles from './cta.module.css'
import WhatsappIcon from '@/assets/img/whatsapp.svg'

const CallToAction = ({children}) => {
  return ( 
    <>
      <button className={styles.cta}>
        <Image style={{marginRight: '10px'}} src={WhatsappIcon} width={30} height={30} alt='Whatsapp Icon'/>
        {children}
      </button>
    </>
   )
}
 
export default CallToAction