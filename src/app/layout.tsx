import type { Metadata } from 'next'
import { Merriweather } from 'next/font/google'

import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const merriweather = Merriweather({
    weight: '300',
    subsets: ['vietnamese'],
    variable: '--font-merriweather',
})

export const metadata: Metadata = {
    title: '',
    description: '',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang='en' className={merriweather.variable}>
            <body className='h-full bg-background'>
                <div className='flex min-h-screen flex-col'>
                    <Header />
                    <div className='flex-grow-[1]'>{children}</div>
                    <Footer />
                </div>
            </body>
        </html>
    )
}

export default RootLayout
