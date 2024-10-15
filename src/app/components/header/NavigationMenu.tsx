'use client'
import { WebNavigation } from '@/providers/NavigationProvider'
import { usePathname } from 'next/navigation'
import { HiMenu } from 'react-icons/hi'
import { headerTabs } from './_tabs'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'

const NavigationMenu = () => {
    const pathname = usePathname()
    const { modalIs, setModalIs } = WebNavigation()
    const { data, status } = useSession()

    const handleLogOut = () => {
        signOut()
    }
    

    return (
        <div className='__navigation_menu lg:hidden'>
            <button
                className='flex items-center p-2'
                onClick={() => setModalIs('nav-menu')}
            >
                <HiMenu
                    size={32}
                    className='fill-font transition-colors duration-200 hover:fill-font-hover'
                />
            </button>
            <div
                className={`absolute bottom-0 left-0 right-0 top-12 z-20 h-screen bg-[#000000] ${modalIs === 'nav-menu' ? 'opacity-100' : 'pointer-events-none opacity-0'} transition-opacity duration-200`}
            >
                <div className='mt-56 flex flex-col items-center justify-center text-font'>
                    {status === 'authenticated' && (
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='text-xl'>{data?.user?.name}</h1>
                            <h1 className='text-sm'>{data?.user?.email}</h1>
                            <Link
                                className={`relative p-2 duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-white after:transition-[width_.2s_ease] hover:text-font-hover hover:after:w-full ${pathname === '/profile' ? 'text-font-hover after:w-full' : 'after:w-0'} mt-12`}
                                href={'/profile'}
                            >
                                Ваш профиль
                            </Link>
                        </div>
                    )}
                    {headerTabs.map((item, _) => (
                        <Link
                            key={item.name}
                            href={item.link}
                            className={`relative p-2 duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-white after:transition-[width_.2s_ease] hover:text-font-hover hover:after:w-full ${pathname === item.link ? 'text-font-hover after:w-full' : 'after:w-0'}`}
                        >
                            {item.name}
                        </Link>
                    ))}
                    {status === 'authenticated' && (
                        <button
                            className='relative p-2 duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-[width_.2s_ease] hover:text-font-hover hover:after:w-full'
                            onClick={handleLogOut}
                        >
                            Выход
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}
export default NavigationMenu
