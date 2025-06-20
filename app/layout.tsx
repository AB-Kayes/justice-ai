import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
   title: 'Justice AI',
  description: 'Powered by Aaladin AI',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
