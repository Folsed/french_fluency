'use client'

import convertToSubcurrency from '@/libs/convertToSubcurrency'
import { WebNavigation } from '@/providers/NavigationProvider'
import {
    LinkAuthenticationElement,
    PaymentElement,
    useElements,
    useStripe,
} from '@stripe/react-stripe-js'
import Image from 'next/image'
import { Suspense, useEffect, useState } from 'react'
import { RxCross2 } from 'react-icons/rx'

interface ICheckout {
    amount: number
    name: string
    image: string
}

const PaymentModal: React.FC<ICheckout> = ({ amount, name, image }) => {
    const { modalIs, setModalIs } = WebNavigation()
    const stripe = useStripe()
    const elements = useElements()

    const [errorMessage, setErrorMessage] = useState<string>('')
    const [clientSecret, setClientSecret] = useState<string>('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch('/api/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret))
    }, [amount])

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setLoading(true)

        if (!stripe || !elements) {
            return
        }

        const { error: submitError } = await elements.submit()

        if (submitError) {
            setErrorMessage(submitError.message as string)
            setLoading(false)
            return
        }

        const { error } = await stripe.confirmPayment({
            elements,
            clientSecret,
            confirmParams: {
                return_url: 'http://www.localhost:3000/',
            },
        })

        if (error) {
            setErrorMessage(error.message as string)
        }

        setLoading(false)
    }

    return (
        <div
            className={`${modalIs === 'payment-modal' ? 'fixed' : 'fixed'} inset-0 flex items-center justify-center`}
        >
            <div
                className='absolute inset-0 z-[2] flex bg-[#000000d1]'
                onClick={() => setModalIs('')}
            />

            {/* <div className='relative z-[3] mx-4 w-full max-w-xl overflow-hidden rounded-xl bg-slate-200'>
                <button
                    onClick={() => setModalIs('')}
                    className='absolute right-0 top-0 m-2'
                >
                    <RxCross2 size={26} />
                </button>
                <div className='mx-auto max-w-md px-5 pb-14 pt-12 text-center'>
                    <h2 className='text-center text-3xl font-extrabold text-gray-800'>
                        Оплата курса
                    </h2>

                    <form
                        onSubmit={handleSubmit}
                        className='flex flex-col gap-6'
                    >
                        <div className='min-h-[230px]'>
                            {clientSecret && (
                                <Suspense fallback={<span>Processing...</span>}>
                                    <LinkAuthenticationElement/>
                                    <PaymentElement />
                                </Suspense>
                            )}
                            {errorMessage && <div>{errorMessage}</div>}
                        </div>
                        <button
                            disabled={!stripe || loading}
                            type='submit'
                            className='mb-2 me-2 inline-flex w-full items-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-800'
                        >
                            {loading ? 'Processing...' : `Pay ${amount}`}
                        </button>
                    </form>
                </div>
            </div> */}
            <div className='relative z-[3] mx-4 flex h-[654px] w-[80%] max-w-[1576px] overflow-hidden'>
                <div className='relative z-[4] flex-1'>
                    <Image
                        src={image}
                        alt={name}
                        className='h-full w-[640px] bg-cover bg-no-repeat object-cover'
                        fill
                    />
                </div>
                <div className='flex h-full w-full flex-1 items-center'>
                    <div className='z-[5] -ml-24 w-full max-w-xl min-w-[550px] h-[93%] bg-slate-200 shadow-custom flex items-center justify-center'>

                        <div className='w-[87.333%] text-center justify-center'>
                            <h2 className='text-center text-3xl font-extrabold text-gray-800'>
                                Оплата курса
                            </h2>

                            <form
                                onSubmit={handleSubmit}
                                className='flex flex-col gap-6'
                            >
                                <div className='min-h-[230px]'>
                                    {clientSecret && (
                                        <Suspense
                                            fallback={
                                                <span>Processing...</span>
                                            }
                                        >
                                            <LinkAuthenticationElement />
                                            <PaymentElement />
                                        </Suspense>
                                    )}
                                    {errorMessage && <div>{errorMessage}</div>}
                                </div>
                                <button
                                    disabled={!stripe || loading}
                                    type='submit'
                                    className='mb-2 me-2 inline-flex w-full items-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-800'
                                >
                                    {loading
                                        ? 'Processing...'
                                        : `Pay ${amount}`}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PaymentModal
