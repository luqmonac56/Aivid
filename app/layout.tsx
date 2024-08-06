import type { Metadata } from 'next'
import { Manrope as FontSans } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

import { cn } from '@/lib/utils'
import AdminNavbar from '@/app/components/adminNavbar'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Convey',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen w-full bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        {/* <Toaster />
        <AdminNavbar /> */}
        {children}
      </body>
    </html>
  )
}
