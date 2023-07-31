import Footer from '@/sections/footer'
import './globals.css'
import { Montserrat } from 'next/font/google'
import CartMenu from '@/components/menu/cartmenu'
import HeaderMenu from '@/components/menu/headermenu'

const monse = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'E-commerce',
  description: 'Derlis Ruiz Diaz',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={monse.className}>
      <CartMenu />
      <HeaderMenu />
        {children}
      <Footer />
      </body>
    </html>
  )
}
