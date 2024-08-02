import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'

const rubik = Rubik({
    subsets: ['latin'],
    variable: '--font-rubik',
})

export const metadata: Metadata = {
    title: '',
    description: '',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang='en' className={rubik.variable}>
            <body className='bg-background bold min-h-screen'>{children}</body>
        </html>
    )
}

export default RootLayout
