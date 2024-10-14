'use client'
import { WebNavigation } from '@/providers/NavigationProvider'
import { LuUser2 } from 'react-icons/lu'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'

const UserMenu = () => {
    const { modalIs, setModalIs } = WebNavigation()
    const { status, data } = useSession()

    return (
        <div className='__auth col-start-3 flex items-center justify-end'>
            {data?.user ? (
                <button
                    className='stroke-font p-2 text-white duration-200 hover:stroke-font-hover'
                    onClick={() => signOut()}
                >
                    {data.user.name}
                </button>
            ) : (
                <Link
                    href={'/login'}
                    className='stroke-font p-2 duration-200 hover:stroke-font-hover'
                    title='Вход в профиль'
                >
                    <LuUser2 size={28} stroke='inherit' />
                </Link>
            )}
        </div>
    )
}
export default UserMenu
