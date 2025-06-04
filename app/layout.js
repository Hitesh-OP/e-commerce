import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'ShopHub - Your Premium Shopping Destination',
    template: '%s | ShopHub'
  },
  description: 'Discover amazing products at unbeatable prices. Shop electronics, fashion, home & garden, and more with fast shipping and excellent customer service.',
  keywords: ['ecommerce', 'online shopping', 'electronics', 'fashion', 'home decor', 'deals'],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="flex-1 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}