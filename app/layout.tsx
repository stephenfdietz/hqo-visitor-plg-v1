import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} font-['Source_Sans_3']`}>{children}</body>
    </html>
  )
}
