import './globals.css'
import { Montserrat } from 'next/font/google'

const monse = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'E-commerce',
  description: 'Derlis Ruiz Diaz',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={monse.className}>{children}</body>
    </html>
  )
}
