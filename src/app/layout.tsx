import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer, Header } from '@/components'
import { Providers } from '@/store'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Movie Box',
  description: 'This is a MovieBox the best place to look up a movie',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers >
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

