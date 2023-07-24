import './../styles/globals.css'
import Link from 'next/link'

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body className='bg-slate-300'>
          {children}
          </body>
      </html>
    )
  }