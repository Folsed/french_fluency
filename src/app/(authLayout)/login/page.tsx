'use client'
import { FaGoogle } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { signIn } from 'next-auth/react'
import { toast } from 'sonner'

const LoginPage = () => {
    const [error, setError] = useState('')
    const router = useRouter()

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const res = await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false,
        })
        if (res?.error) {
            setError(res.error as string)
            toast(res.error)
        }
        if (res?.ok) {
            return router.push('/')
        }
    }

    return (
        <div className='bg-gray-800 bg-opacity-50 px-20 py-16 shadow-lg backdrop-blur-md max-md:py-10 max-sm:px-8'>
            <div className='text-white'>
                <div className='mb-8 flex flex-col items-center'>
                    <h1 className='mb-2 text-2xl'>Вход в аккаунт</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='mb-4 text-lg'>
                        <input
                            className='w-full border-b-2 border-gray-400 bg-transparent px-6 py-2 text-center text-inherit placeholder-gray-500'
                            type='email'
                            name='email'
                            placeholder='Gmail'
                        />
                    </div>

                    <div className='mb-4 text-lg'>
                        <input
                            className='w-full border-b-2 border-gray-400 bg-transparent px-6 py-2 text-center text-inherit placeholder-gray-500'
                            type='password'
                            name='password'
                            placeholder='Пароль'
                        />
                    </div>
                    <div className='mb-6 flex items-center justify-between gap-4'>
                        <div className='me-4 flex items-center'>
                            <input
                                // checked
                                type='checkbox'
                                value=''
                                className='h-4 w-4 border-gray-300 bg-gray-100 text-yellow-400 focus:ring-2 focus:ring-yellow-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-yellow-600'
                            />
                            <label className='ms-2 text-gray-300'>
                                Запомнить меня
                            </label>
                        </div>

                        <Link
                            href='#!'
                            className='text-gray-300 focus:outline-none'
                        >
                            Забыли пароль?
                        </Link>
                    </div>

                    <div className='mt-8 flex justify-center text-lg text-black'>
                        <button className='group relative inline-flex w-full items-center justify-center overflow-hidden bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 p-0.5 text-base font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-red-100 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 dark:focus:ring-red-400'>
                            <span className='relative w-full bg-white px-2 py-2 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'>
                                Войти
                            </span>
                        </button>
                    </div>

                    <div className='my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500'>
                        <p className='mx-4 mb-0 text-center font-semibold dark:text-neutral-200'>
                            OR
                        </p>
                    </div>

                    <Link
                        className='group relative mb-2 flex w-full justify-center overflow-hidden bg-gradient-to-br from-pink-500 to-orange-400 p-0.5 text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-pink-200 group-hover:from-pink-500 group-hover:to-orange-400 dark:text-white dark:focus:ring-pink-800'
                        href='/register'
                    >
                        <span className='relative w-full bg-white px-5 py-2 text-center transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'>
                            Регистрация
                        </span>
                    </Link>

                    <button
                        type='button'
                        className='mb-2 inline-flex w-full items-center justify-center gap-1 bg-[#4285F4] px-5 py-2.5 text-center text-white transition-colors duration-75 hover:bg-[#4285F4]/90 focus:outline-none focus:ring-4 focus:ring-[#4285F4]/50 dark:focus:ring-[#4285F4]/55'
                    >
                        <FaGoogle />
                        Sign in with Google
                    </button>
                </form>
            </div>
        </div>
    )
}
export default LoginPage
