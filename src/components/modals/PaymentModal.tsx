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
import { MdOutlineEuro } from 'react-icons/md'

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
            className={`${modalIs === 'payment-modal' ? 'fixed' : 'none'} inset-0 flex items-center justify-center`}
        >
            <div
                className='absolute inset-0 z-[2] flex bg-[#000000d1]'
                onClick={() => setModalIs('')}
            />

            <div className='relative z-[3] mx-4 flex h-[654px] w-[80%] max-w-[1576px]'>
                <div className='absolute z-[4] flex-1 select-none justify-center bg-black max-lg:-inset-4 lg:relative lg:flex'>
                    <h1 className='relative z-[2] mt-24 max-w-sm pr-24 text-center text-2xl font-bold uppercase text-font-hover max-lg:hidden xl:pr-12 xl:text-3xl'>
                        {name}
                    </h1>
                    <Image
                        src={image}
                        alt={name}
                        className='pointer-events-none z-[1] h-full w-[640px] select-none bg-cover bg-no-repeat object-cover opacity-50 lg:opacity-20'
                        fill
                    />
                </div>
                <div className='relative flex h-full w-full flex-1 items-center max-lg:justify-center'>
                    <div className='relative z-[5] flex h-full w-full max-w-xl scroll-my-32 items-center justify-center overflow-y-auto bg-slate-200 shadow-custom lg:-ml-24 lg:h-[93%] lg:min-w-[550px]'>
                        {/* <button
                            onClick={() => setModalIs('')}
                            className='fixed right-4 top-4'
                        >
                            <RxCross2 size={24} />
                        </button> */}
                        <div className='h-[87.333%] w-[87.333%]'>
                            <h2 className='text-center text-3xl font-extrabold text-gray-800'>
                                Оплата курса
                            </h2>

                            {clientSecret && (
                                <Suspense fallback={<span>Processing...</span>}>
                                    <form
                                        onSubmit={handleSubmit}
                                        className='flex flex-col gap-6'
                                    >
                                        <div className='min-h-[230px]'>
                                            <LinkAuthenticationElement className='mb-4' />
                                            <PaymentElement />
                                        </div>
                                        <button
                                            disabled={!stripe || loading}
                                            type='submit'
                                            className='mb-14 me-2 flex w-full items-center justify-center rounded-lg bg-black px-5 py-2.5 text-center text-sm font-medium text-font-hover shadow-custom'
                                        >
                                            {loading
                                                ? 'Processing...'
                                                : `Pay ${amount}`}
                                            {
                                                <i>
                                                    <MdOutlineEuro />
                                                </i>
                                            }
                                        </button>
                                    </form>
                                </Suspense>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PaymentModal
