import Image from 'next/image'
import styles from './cta.module.css'
import WhatsappIcon from '@/assets/img/whatsapp.svg'

const CallToAction = ({children, icon, ...otherProps}) => {
  return ( 
    <>
      <button {...otherProps} className={styles.cta}>
        {icon ? 
          <Image priority={true} style={{marginRight: '10px'}} src={WhatsappIcon} width={30} height={30} alt='Whatsapp Icon'/> : 
          null 
        }
        {children}
      </button>
    </>
   )
}
 
export default CallToAction