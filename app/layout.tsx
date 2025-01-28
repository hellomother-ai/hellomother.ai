import type { Metadata } from 'next'
import { concrete, bomiro } from '@/styles/fonts'
import { Navbar } from '@/components/navigation/nav-bar'
import { Footer } from '@/components/footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mother',
  description: 'Accelerate growth. Simplify grants.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${concrete.variable} ${bomiro.variable}`}>
      <body className="flex flex-col min-h-screen bg-black">
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}