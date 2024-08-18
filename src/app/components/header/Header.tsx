import Logo from '@/components/svgs/Logo'
import { LuUser2 } from 'react-icons/lu'
import NavigationMenu from './NavigationMenu'
import Links from './Links'

const Header = () => {
    return (
        <section className='header'>
            <div className='lg:gap-22 fixed z-10 grid w-full grid-flow-col grid-cols-[1fr_auto_1fr] bg-[#000000b3] lg:px-12 lg:py-2'>
                <div className='col-start-2 flex items-center lg:col-start-1'>
                    <Logo className='h-10 fill-[#FFD700] stroke-[#FFD700] pt-2' />
                </div>
                <NavigationMenu />
                <Links />

                <div className='__auth col-start-3 flex items-center justify-end'>
                    <button
                        className='stroke-font p-2 duration-200 hover:stroke-font-hover'
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
