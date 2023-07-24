'use client'
import { useState, useEffect } from 'react'
import styles from './header.module.css'
import CallToAction from '../Buttons/CallToAction'
import Image from 'next/image'
import TamalesLogo from '@/assets/img/logo.svg'
import TamalesLogoAlter from '@/assets/img/logo_alternate.svg'
import Link from 'next/link'

const Header = () => {
  const [isLogoAlter, setIsLogoAlter] = useState(false)
  const [logoSize, setLogoSize] = useState({ width: 385, height: 25 })

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth
      setIsLogoAlter(screenWidth < 750)
      setLogoSize(screenWidth < 750 ? { width: 130, height: 40 } : { width: 385, height: 25 })
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const logoSrc = isLogoAlter ? TamalesLogoAlter : TamalesLogo

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link href="/">
            <Image src={logoSrc} width={logoSize.width} height={logoSize.height} alt="TamalesTolimenses.co" />
          </Link>
          <nav className={styles.nav}>
            <ul>
              <Link href="hacer-pedido">
                <li>Pedir Online</li>
              </Link>
            </ul>
            <CallToAction icon>Pedir Ahora</CallToAction>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
