import styles from './payments.module.css'
import Image from "next/image"
import NequiLogo from '@/assets/img/nequi.png'
import BancolombiaLogo from '@/assets/img/bancolombia.png'

const payments = () => {
  return ( 
    <>
      <div className={styles.logos}>
        <Image className={styles.logo} src={NequiLogo} width={200} height={80} alt="Nequi"/>
        <Image className={styles.logo} src={BancolombiaLogo} width={300} height={50} alt="Bancolombia"/>
      </div>
    </>
   )
}
 
export default payments