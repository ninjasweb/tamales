'use client'
import Footer from './components/Footer'
import Header from './components/Header'
import Whatsapp from './components/Whatsapp'
import './globals.css'
import { Open_Sans, Paytone_One } from 'next/font/google'
import { GoogleAnalytics } from "nextjs-google-analytics"

const open_sans = Open_Sans({ 
  subsets: ['latin'],
})
const paytone = Paytone_One({
  subsets: ['latin'],
  weight: '400'
})

export default function RootLayout({ children }) {
  return (
      <html lang="es">
        <head>
          <title>Tamales del Tolima | El verdadero tamal tolimense.</title>
        </head>
        <body className={`${open_sans.className} ${paytone.className}`}>
          <GoogleAnalytics></GoogleAnalytics>
          <Header/>
          {children}
          <Whatsapp/>
          <Footer/>
        </body>
      </html>
  )
}
