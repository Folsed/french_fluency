'use client'
import Logo from '@/components/svgs/Logo'
import Link from 'next/link'
import { LuUser2 } from 'react-icons/lu'
import { HiMenu } from 'react-icons/hi'
import { usePathname } from 'next/navigation'

const Header = () => {
    const pathname = usePathname()

    return (
        <section className='header'>
            <div className='lg:gap-22 fixed z-10 grid w-full grid-flow-col grid-cols-[1fr_auto_1fr] lg:px-12 lg:py-2 bg-[#000000b3]'>
                <div className='col-start-2 flex items-center lg:col-start-1'>
                    <Logo className='h-10 fill-[#FFD700] stroke-[#FFD700] pt-2' />
                </div>
                <button className='flex items-center p-2 lg:hidden'>
                    <HiMenu size={32} />
                </button>

                <div className='__menu hidden lg:block text-white'>
                    <div className='hidden lg:flex lg:justify-center lg:gap-4 lg:text-xl'>
                        <Link
                            href={'/about'}
                            className={`relative p-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-white after:transition-[width_.2s_ease] hover:after:w-full ${pathname === '/about' ? 'after:w-full' : 'after:w-0'}`}
                        >
                            Мой блог
                        </Link>
                        <Link
                            href={'/'}
                            className={`relative p-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-white after:transition-[width_.2s_ease] hover:after:w-full ${pathname === '/' ? 'after:w-full' : 'after:w-0'}`}
                        >
                            Курсы и марафоны
                        </Link>
                        <Link
                            href={'/onlinelessons'}
                            className={`relative p-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-white after:transition-[width_.2s_ease] hover:after:w-full ${pathname === '/onlinelessons' ? 'after:w-full' : 'after:w-0'}`}
                        >
                            Обучение онлайн
                        </Link>
                    </div>
                </div>

                <div className='__auth col-start-3 flex items-center justify-end'>
                    <button className='p-2'>
                        <LuUser2 size={32} stroke='white' />
                    </button>
                </div>
            </div>
        </section>
    )
}
export default Header
