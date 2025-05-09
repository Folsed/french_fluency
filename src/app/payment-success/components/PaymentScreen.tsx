'use client'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { FaCheck } from 'react-icons/fa6'
import { MdOutlineEuro } from 'react-icons/md'

const PaymentScreen = () => {
    const searchParams = useSearchParams()
    const router = useRouter()

    const courseName = searchParams.get('COURSE_NAME')
    const courseAmount = searchParams.get('COURSE_AMOUNT')

    if (!courseName || !courseAmount) {
        router.push('/')
        return null
    }
    return (
        <React.Fragment>
            <div className='flex min-h-[100dvh] flex-col items-center justify-center px-4 py-12 md:px-6 md:py-24 lg:py-32'>
                <div className='max-w-md space-y-4 text-center'>
                    <div className='inline-flex rounded-full bg-green-400 p-2'>
                        <FaCheck size={36} />
                    </div>
                    <h1 className='text-3xl font-bold tracking-tighter text-font-hover sm:text-4xl md:text-5xl'>
                        Payment Successful
                    </h1>
                    <p className='text-gray-400 md:text-xl'>
                        Оплата курса прошла успешно. Проскрольте страничку вниз
                        для более подробной информации и перехода на главную.
                    </p>
                </div>
            </div>
            <div className='border-t border-gray-900 bg-black py-24 shadow-custom'>
                <div className='container mx-auto px-4 md:px-6'>
                    <div className='mx-auto max-w-2xl space-y-6'>
                        <div className='flex flex-col gap-4 rounded border border-slate-700 bg-[#1b1f23] p-6'>
                            <h1 className='text-3xl text-font-hover'>
                                Payment Details
                            </h1>
                            <div className='flex items-center justify-between'>
                                <div className='text-font-hover'>Курс</div>
                                <div className='text-end font-medium text-font-secondary'>
                                    {courseName}
                                </div>
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className='text-font-hover'>Цена</div>
                                <div className='flex items-center font-medium text-font-secondary'>
                                    {courseAmount}
                                    <MdOutlineEuro />
                                </div>
                            </div>
                            <div className='w-full text-font-secondary'>
                                <p>
                                    Спасибо за приобретение моего курса! Я
                                    искренне рада, что вы решили присоединиться
                                    к обучению. В ближайшее время я отправлю всю
                                    необходимую информацию на вашу{' '}
                                    <span className='font-bold text-font-hover'>
                                        электронную почту
                                    </span>
                                    .
                                </p>
                                <br />
                                <p>
                                    Если у вас есть какие-либо вопросы, не
                                    стесняйтесь обращаться ко мне!
                                </p>
                                <p>
                                    Мой телеграм:{' '}
                                    <Link
                                        className='font-bold text-font-hover underline underline-offset-4'
                                        href='https://t.me/tbr_kateryna'
                                    >
                                        @tbr_kateryna
                                    </Link>
                                </p>
                            </div>
                        </div>

                        <div className='text-end'>
                            <Link
                                href='/'
                                className='inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300'
                                prefetch={false}
                            >
                                На главную
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default PaymentScreen
