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
          <meta name="description" content="Disfruta del auténtico sabor colombiano con nuestros deliciosos Tamales Tolimenses. Prueba los mejores tamales tolimenses en una variedad de sabores deliciosos. ¡Haz tu pedido ahora y saborea la tradición en cada bocado!" />
          <meta name="keywords" content="Tamal Tolimense, tamales tolimenses, receta tamales tolimenses, tamales domicilio, tamales a domicilio, tamales ibague, tamales bogota" />
          <meta name="robots" content="index, follow" />
          <meta name="language" content="Spanish" />
          <meta name="author" content="tamalestolimenses.co" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          <meta property="og:title" content="Tamales Tolimenses - El auténtico sabor colombiano | TamalesTolimenses.co" />
          <meta name="description" content="Disfruta del auténtico sabor colombiano con nuestros deliciosos Tamales Tolimenses. Prueba los mejores tamales tolimenses en una variedad de sabores deliciosos. ¡Haz tu pedido ahora y saborea la tradición en cada bocado!" />
          <meta property="og:image" content="/tamalestolimenses.jpg" />
          <meta property="og:url" content="https://tamalestolimenses.co" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="es_ES" />
          <meta property="og:site_name" content="TamalesTolimenses.co" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Tamales Tolimenses - El auténtico sabor colombiano | TamalesTolimenses.co" />
          <meta name="description" content="Disfruta del auténtico sabor colombiano con nuestros deliciosos Tamales Tolimenses. Prueba los mejores tamales tolimenses en una variedad de sabores deliciosos. ¡Haz tu pedido ahora y saborea la tradición en cada bocado!" />
          <meta name="twitter:image" content="/tamalestolimenses.jpg" />
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
