'use client'
import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'
import { Inter, Open_Sans } from 'next/font/google'
import { GoogleAnalytics } from "nextjs-google-analytics"

const inter = Inter({ subsets: ['latin'] })
const open_sans = Open_Sans({ 
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
      <html lang="es">
        <head>
          <title>Tamales del Tolima | El verdadero tamal tolimense.</title>
        </head>
        <body className={`${inter.className} ${open_sans.className}`}>
          <GoogleAnalytics></GoogleAnalytics>
          {/* <Header/> */}
          {children}
          {/* <Footer/> */}
        </body>
      </html>
  )
}
