'use client'
import { WebNavigation } from '@/providers/NavigationProvider'
import { usePathname } from 'next/navigation'
import { HiMenu } from 'react-icons/hi'
import { headerTabs } from './_tabs'
import Link from 'next/link'

const NavigationMenu = () => {
    const pathname = usePathname()
    const { modalIs, setModalIs } = WebNavigation()

    return (
        <div className='__navigation_menu lg:hidden'>
            <button
                className='flex items-center p-2'
                onClick={() => setModalIs('opened')}
            >
                <HiMenu size={32} fill='white' />
            </button>
            <div
                className={`absolute bottom-0 left-0 right-0 top-12 z-20 h-screen bg-[#000000] ${modalIs === 'opened' ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}
            >
                <div className='h-full w-full text-font flex flex-col justify-center items-center'>
                    {headerTabs.map((item, _) => (
                        <Link
                            key={item.name}
                            href={item.link}
                            className={`relative p-2 duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-white after:transition-[width_.2s_ease] hover:text-font-hover hover:after:w-full ${pathname === item.link ? 'text-font-hover after:w-full' : 'after:w-0'}`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default NavigationMenu
