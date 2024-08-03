import Logo from '@/components/svgs/Logo'
import Link from 'next/link'
import { LuUser2 } from 'react-icons/lu'
import { HiMenu } from 'react-icons/hi'

const Header = () => {
    return (
        <section className='header'>
            <div className='grid grid-flow-col grid-cols-[1fr_auto_1fr] lg:gap-24 lg:px-12 lg:py-2'>
                <div className='col-start-2 items-center flex lg:col-start-1'>
                    <Logo className='h-10 fill-black stroke-black pt-2' />
                </div>
                <button className='flex items-center p-2 lg:hidden'>
                    <HiMenu size={32} />
                </button>

                <div className='__menu hidden lg:block'>
                    <div className='hidden lg:flex lg:justify-center lg:gap-4 lg:text-xl'>
                        <Link href={'/about'} className='p-2'>
                            Мой блог
                        </Link>
                        <Link href={'/'} className='p-2'>
                            Курсы и марафоны
                        </Link>
                        <Link href={'/onlinelessons'} className='p-2'>
                            Обучение онлайн
                        </Link>
                    </div>
                </div>

                <div className='__auth col-start-3 flex items-center justify-end'>
                    <button className='p-2'>
                        <LuUser2 size={32} />
                    </button>
                </div>
            </div>
        </section>
    )
}
export default Header
