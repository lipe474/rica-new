import { ReactNode } from 'react'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SideBar } from '@/components/SideBar'
import '@/styles/global.css'
import Footer from '@/components/Footer'
import FloatingButton from '@/components/FloatingButton'
import { ThemeProvider } from '@mui/material'
import { LightTheme } from '@/shared/themes'


const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Rica',
  description: 'Revista Interdisciplinar Ciêntifica Aimoré',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">

      <body className={inter.className}>
        <ThemeProvider theme={LightTheme}>
          <SideBar />
          {children}
          <FloatingButton />
          <Footer />
        </ThemeProvider>

      </body>
    </html>
  )
}
