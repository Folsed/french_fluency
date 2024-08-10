'use client'
import Logo from '@/components/svgs/Logo'
import Link from 'next/link'
import { LuUser2 } from 'react-icons/lu'
import { HiMenu } from 'react-icons/hi'
import { usePathname } from 'next/navigation'
import { headerTabs } from './_tabs'

const Header = () => {
    const pathname = usePathname()

    return (
        <section className='header'>
            <div className='lg:gap-22 fixed z-10 grid w-full grid-flow-col grid-cols-[1fr_auto_1fr] bg-[#000000b3] lg:px-12 lg:py-2'>
                <div className='col-start-2 flex items-center lg:col-start-1'>
                    <Logo className='h-10 fill-[#FFD700] stroke-[#FFD700] pt-2' />
                </div>
                <button className='flex items-center p-2 lg:hidden'>
                    <HiMenu size={32} fill='white' />
                </button>

                <div className='__menu text-font hidden lg:block'>
                    <div className='hidden lg:flex lg:justify-center lg:gap-4 lg:text-xl'>
                        {headerTabs.map((item, _) => (
                            <Link
                                key={item.name}
                                href={item.link}
                                className={`hover:text-font-hover relative p-2 duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-white after:transition-[width_.2s_ease] hover:after:w-full ${pathname === item.link ? 'text-font-hover after:w-full' : 'after:w-0'}`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className='__auth col-start-3 flex items-center justify-end'>
                    <button
                        className='stroke-font hover:stroke-font-hover p-2 duration-200'
                        title='Вход в профиль'
                    >
                        <LuUser2 size={32} stroke='inherit' />
                    </button>
                </div>
            </div>
        </section>
    )
}
export default Header
