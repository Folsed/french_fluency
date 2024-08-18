import './globals.css'
import type { Metadata } from 'next'
import { Merriweather } from 'next/font/google'
import Providers from '@/providers/Providers'
import Header from './components/header/Header'
import Footer from './components/Footer'

interface LayoutProps {
    children: React.ReactNode
}

const merriweather = Merriweather({
    weight: '300',
    subsets: ['vietnamese'],
    variable: '--font-merriweather',
})

export const metadata: Metadata = {
    title: '',
    description: '',
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <html lang='en' className={merriweather.variable}>
            <body className='bg-background h-full'>
                <Providers>
                    <div className='relative flex min-h-screen flex-col'>
                        <Header />
                        <div className='flex-grow-[1]'>{children}</div>
                        <Footer />
                    </div>
                </Providers>
            </body>
        </html>
    )
}

export default RootLayout
