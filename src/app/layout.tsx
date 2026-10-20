import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'WaitCash — Earn While AI Thinks',
  description:
    'WaitCash monetizes AI wait time with non-intrusive ads, turning every second of model thinking into revenue for users and developers.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#020617] font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
