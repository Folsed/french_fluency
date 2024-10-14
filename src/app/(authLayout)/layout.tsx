import Image from 'next/image'
import { ReactNode } from 'react'

interface AuthLayoutProps {
    children: ReactNode
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
    return (
        <div className='n'>
            <div className='flex h-screen w-full items-center justify-center bg-black'>
                <div className='absolute inset-0'>
                    <Image
                        src={'/auth-pick.webp'}
                        className='opacity-50 object-cover'
                        alt=''
                        fill
                        priority
                    />
                </div>
                {children}
            </div>
        </div>
    )
}

export default AuthLayout
