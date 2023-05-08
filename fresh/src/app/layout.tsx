import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <div className="navbar">
        <Link href="/">home</Link>
        <Link href="/list">list페이지</Link>
      </div>
        {children}
      </body>
    </html>
  )
}
