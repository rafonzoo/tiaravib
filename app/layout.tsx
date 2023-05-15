import type { iLayout } from '@/types/core'
import { Jost } from 'next/font/google'
import { site } from '@/config'
import Navigation from '@/components/Navbar'
import './globals.css'

const jost = Jost({ subsets: ['latin'] })

const Layout = ({ children }: iLayout) => {
  return (
    <html lang='en'>
      <body className={jost.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}

export const metadata = {
  title: site.name,
  description: site.description,
}

export default Layout
