import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Providers from '@/providers/Providers'
import Header from './components/header/Header'
import BackToTop from './components/BackToTop'

interface LayoutProps {
    children: React.ReactNode
}

const roboto = Roboto({
    weight: '400',
    subsets: ['vietnamese'],
    variable: '--font-roboto',
})

export const metadata: Metadata = {
    title: '',
    description: '',
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <html lang='en' className={roboto.variable}>
            <body className='h-full bg-background'>
                <Providers>
                    <Header/>
                    {children}
                </Providers>
                <BackToTop/>
            </body>
        </html>
    )
}

export default RootLayout
