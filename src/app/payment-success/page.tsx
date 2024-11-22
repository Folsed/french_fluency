'use client'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { FaCheck } from 'react-icons/fa6'
import { MdOutlineEuro } from 'react-icons/md'

const PaymentSuccessPage = () => {
    const searchParams = useSearchParams()
    const router = useRouter()

    if (
        !searchParams.has('COURSE_NAME') &&
        !searchParams.has('COURSE_AMOUNT')
    ) {
        router.push('/')
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
                <div className='container px-4 md:px-6 mx-auto'>
                    <div className='mx-auto max-w-md space-y-6'>
                        <div className='flex flex-col gap-4 rounded border border-slate-700 bg-[#1b1f23] p-6'>
                            <h1 className='text-3xl text-font-hover'>
                                Payment Details
                            </h1>
                            <div className='flex items-center justify-between'>
                                <div className='text-font-hover'>Курс</div>
                                <div className='font-medium text-font-secondary'>
                                    {searchParams.get('COURSE_NAME')}
                                </div>
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className='text-font-hover'>Цена</div>
                                <div className='flex items-center font-medium text-font-secondary'>
                                    {searchParams.get('COURSE_AMOUNT')}
                                    <MdOutlineEuro />
                                </div>
                            </div>
                        </div>

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
        </React.Fragment>
    )
}
export default PaymentSuccessPage
