'use client'
import Image from 'next/image'
import Link from 'next/link'

import { FormEvent, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { register } from '@/actions/register'

const RegisterPage = () => {
    const [error, setError] = useState<string>()
    const router = useRouter()
    const formRef = useRef<HTMLFormElement>(null)

    const handleSubmit = async (formData: FormData) => {
        const reg = await register({
            email: formData.get('email'),
            name: formData.get('name'),
            password: formData.get('password'),
        })
        formRef.current?.reset()
        if (reg?.error) {
            setError(reg.error)
            console.log(reg?.error)
        }
    }

    return (
        <div className='bg-gray-800 bg-opacity-50 px-20 py-16 shadow-lg backdrop-blur-md max-md:py-10 max-sm:px-8'>
            <div className='text-white'>
                <div className='mb-8 flex flex-col items-center'>
                    <h1 className='mb-2 text-2xl'>Регистрация</h1>
                </div>
                <form ref={formRef} action={handleSubmit}>
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
                            type='text'
                            name='name'
                            placeholder='Имя пользователя'
                        />
                    </div>

                    <div className='mb-4 text-lg'>
                        <input
                            className='w-full border-b-2 border-gray-400 bg-transparent px-6 py-2 text-center text-inherit placeholder-gray-500'
                            type='Password'
                            name='password'
                            placeholder='Пароль'
                        />
                    </div>

                    <button className='group relative mt-8 flex w-full justify-center overflow-hidden bg-gradient-to-br from-pink-500 to-orange-400 p-0.5 text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-pink-200 group-hover:from-pink-500 group-hover:to-orange-400 dark:text-white dark:focus:ring-pink-800'>
                        <span className='relative w-full bg-white px-5 py-2 text-center transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'>
                            Регистрация
                        </span>
                    </button>

                    <div className='my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500'>
                        <p className='mx-4 mb-0 text-center font-semibold dark:text-neutral-200'>
                            OR
                        </p>
                    </div>

                    <Link
                        className='flex justify-center text-lg text-black'
                        href='/login'
                    >
                        <button className='group relative inline-flex w-full items-center justify-center overflow-hidden bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 p-0.5 text-base font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-red-100 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 dark:focus:ring-red-400'>
                            <span className='relative w-full bg-white px-2 py-2 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'>
                                Войти
                            </span>
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    )
}
export default RegisterPage
