'use client'
import styles from './header.module.css'
import CallToAction from "../Buttons/CallToAction"

const Header = () => {
  return ( 
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <CallToAction>Pedir Ahora</CallToAction>
        </div>
      </header>
    </>
   )
}
 
export default Header