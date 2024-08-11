import type { Metadata } from 'next'
import { Merriweather } from 'next/font/google'

import './globals.css'
import Header from './components/Header'

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
            <body className='min-h-screen h-[2000px]'>
                <Header />
                {children}
            </body>
        </html>
    )
}

export default RootLayout
