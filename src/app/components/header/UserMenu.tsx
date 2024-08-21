'use client'
import { WebNavigation } from '@/providers/NavigationProvider'
import { LuUser2 } from 'react-icons/lu'
import AuthModal from '../auth/AuthModal'

const UserMenu = () => {
    const { modalIs, setModalIs } = WebNavigation()

    return (
        <div className='__auth col-start-3 flex items-center justify-end'>
            <div>
                <button
                    className='stroke-font p-2 duration-200 hover:stroke-font-hover'
                    title='Вход в профиль'
                    onClick={() => setModalIs('opened')}
                >
                    <LuUser2 size={32} stroke='inherit' />
                </button>
                <div className='absolute h-screen w-full inset-0'>
                    <AuthModal />
                </div>
            </div>
        </div>
    )
}
export default UserMenu
