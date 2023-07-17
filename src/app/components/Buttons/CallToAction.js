import Image from 'next/image'
import styles from './cta.module.css'
import WhatsappIcon from '@/assets/img/whatsapp.svg'
import Link from 'next/link'

const CallToAction = ({children, icon, ...otherProps}) => {
  return ( 
    <>
      <Link href="https://wa.me/573142729497" target='_blank'>
        <button {...otherProps} className={styles.cta}>
          {icon ? 
            <Image priority={true} style={{marginRight: '10px'}} src={WhatsappIcon} width={30} height={30} alt='Whatsapp Icon'/> : 
            null 
          }
          {children}
        </button>
      </Link>
    </>
   )
}
 
export default CallToAction