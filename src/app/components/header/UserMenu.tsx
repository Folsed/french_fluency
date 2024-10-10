'use client'
import { WebNavigation } from '@/providers/NavigationProvider'
import { LuUser2 } from 'react-icons/lu'
import Link from 'next/link'

const UserMenu = () => {
    const { modalIs, setModalIs } = WebNavigation()

    const token: string = ''

    return (
        <div className='__auth col-start-3 flex items-center justify-end'>
            {token ? (
                <span
                    className='stroke-font p-2 duration-200 hover:stroke-font-hover text-white'
                >
                    Профиль
                </span>
            ) : (
                <Link
                    href={'/login'}
                    className='stroke-font p-2 duration-200 hover:stroke-font-hover'
                    title='Вход в профиль'
                >
                    <LuUser2 size={32} stroke='inherit' />
                </Link>
            )}
        </div>
    )
}
export default UserMenu
