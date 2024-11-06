'use client'

import convertToSubcurrency from '@/libs/convertToSubcurrency'
import { WebNavigation } from '@/providers/NavigationProvider'
import { Elements, PaymentElement } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
    throw new Error(
        'process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined'
    )
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

const PaymentModal = ({ amount }: { amount: number }) => {
    const { modalIs, setModalIs } = WebNavigation()
    return (
        <div
            className={`${modalIs === 'payment-modal' ? 'fixed' : 'hidden'} bottom-0 left-0 right-0 top-12 z-10 lg:top-[60px]`}
        >
            <div className='fixed top-12 flex h-full w-full items-center overflow-y-auto bg-[#000000e1] lg:top-[60px]'>
                <div className='mx-auto flex w-full max-w-3xl flex-col gap-12 rounded-md bg-purple-100 p-8 max-lg:max-w-xl'>
                    <h2 className='text-center text-3xl font-extrabold text-gray-800'>
                        Оплата курса
                    </h2>

                    <Elements
                        stripe={stripePromise}
                        options={{
                            mode: 'payment',
                            amount: convertToSubcurrency(amount),
                            currency: 'eur',
                        }}
                    >
                        <PaymentElement />
                    </Elements>
                </div>
            </div>
        </div>
    )
}
export default PaymentModal
