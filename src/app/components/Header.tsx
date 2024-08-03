import Logo from '@/components/svgs/Logo'
import Link from 'next/link'
import { LuUser2 } from 'react-icons/lu'

const Header = () => {
    return (
        <section className='header'>
            <div className='grid grid-flow-col grid-cols-3 px-12 py-2'>
                <div className='flex'>
                    <Logo className='w-44 fill-black stroke-black' />
                </div>
                <div className='__menu'>
                    <div className='flex justify-center gap-4 text-xl'>
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

                <div className='__auth flex items-center justify-end'>
                    <button className='p-2'>
                        <LuUser2 size={28} />
                    </button>
                </div>
            </div>
        </section>
    )
}
export default Header
