'use client'

import convertToSubcurrency from '@/libs/convertToSubcurrency'
import { WebNavigation } from '@/providers/NavigationProvider'
import {
    Elements,
    PaymentElement,
    useElements,
    useStripe,
} from '@stripe/react-stripe-js'
import { useEffect, useState } from 'react'
import Visa from '../svgs/Visa'

const PaymentModal = ({ amount }: { amount: number }) => {
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

        const {error} = await stripe.confirmPayment({
            elements,
            clientSecret,
            confirmParams: {
                return_url: 'http://www.localhost:3000/'
            }
        })

        if(error) {
            setErrorMessage(error.message as string)
        }

        setLoading(false)
    }

    return (
        <div
            className={`${modalIs === 'payment-modal' ? 'fixed' : 'hidden'} bottom-0 left-0 right-0 top-12 z-10 lg:top-[60px]`}
            // onClick={() => setModalIs('')}
        >
            <div className='fixed top-12 flex h-full w-full items-center justify-center overflow-y-auto bg-[#000000e1] lg:top-[60px]'>
                <div className='mx-6 flex w-full max-w-xl flex-col relative gap-12 rounded-md bg-purple-100 p-8'>
                    <span className='abosolute right-0 top-0' onClick={() => setModalIs('')}>X</span>
                    <h2 className='text-center text-3xl font-extrabold text-gray-800'>
                        Оплата курса
                    </h2>

                    <form
                        onSubmit={handleSubmit}
                        className='flex flex-col gap-6'
                    >
                        {clientSecret && <PaymentElement />}
                        {errorMessage && <div>{errorMessage}</div>}

                        <button
                            disabled={!stripe || loading}
                            type='submit'
                            className='mb-2 me-2 inline-flex w-full items-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-800'
                        >
                            {loading ? 'Processing...' : `Pay ${amount}`}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default PaymentModal
