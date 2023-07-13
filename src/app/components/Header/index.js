'use client'
import styles from './header.module.css'
import CallToAction from "../Buttons/CallToAction"
import Image from 'next/image'
import TamalesLogo from '@/assets/img/logo.svg'
import Link from 'next/link'

const Header = () => {
  return ( 
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link href="/">
            <Image src={TamalesLogo} width={385} height={25} alt='TamalesTolimenses.co'/>
          </Link>
          <nav className={styles.nav}>
            <ul>
              <Link href="hacer-pedido">
                <li>Pedir Online</li>
              </Link>
            </ul>
            <CallToAction>Pedir Ahora</CallToAction>
          </nav>
        </div>
      </header>
    </>
   )
}
 
export default Header