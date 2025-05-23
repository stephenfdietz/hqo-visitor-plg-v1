import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })

const sourceSans3 = localFont({
  src: [
    {
      path: '../public/fonts/SourceSans3-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/SourceSans3-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-source-sans-3',
})

export const metadata: Metadata = {
  title: 'HqO Visitor Management',
  description: "Try HqO's visitor management solution free. Streamline guest check-ins, print badges, and view visit history — all in one app.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${sourceSans3.variable}`}>{children}</body>
    </html>
  )
}
