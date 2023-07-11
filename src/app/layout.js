import Header from './components/Header'
import './globals.css'
import { Inter, Open_Sans } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const open_sans = Open_Sans({ 
  subsets: ['latin'],
})

export const metadata = {
  title: 'Tamales Tolimenses | Prueba el verdadero tamal tolimense',
  description: 'Tamales del Tolima | Domicilios',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${open_sans.className}`}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
