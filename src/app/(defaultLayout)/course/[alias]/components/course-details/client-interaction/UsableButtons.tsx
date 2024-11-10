'use client'

import PaymentModal from '@/components/modals/PaymentModal'
import convertToSubcurrency from '@/libs/convertToSubcurrency'
import { WebNavigation } from '@/providers/NavigationProvider'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
    throw new Error(
        'process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined'
    )
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

const UsableButtons = ({ amount }: { amount: number }) => {
    const { modalIs, setModalIs } = WebNavigation()

    const paymentModalHandler = () => {
        setModalIs('payment-modal')
    }
    return (
        <div className='flex flex-col gap-2 md:flex-row md:gap-2'>
            <button
                onClick={paymentModalHandler}
                className='group relative mb-2 me-2 inline-flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-300 to-lime-300 p-0.5 text-base font-medium text-gray-900 group-hover:from-teal-300 group-hover:to-lime-300 md:text-lg dark:text-white dark:hover:text-gray-900'
            >
                <span className='relative w-full bg-gray-900 px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 md:px-7 md:py-5'>
                    Купить курс
                </span>
            </button>
            <button className='group relative mb-2 me-2 inline-flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 text-base font-medium text-gray-900 hover:text-white group-hover:from-purple-500 group-hover:to-pink-500 md:text-lg dark:text-white'>
                <span className='relative w-full bg-gray-900 px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 md:px-7 md:py-5'>
                    Добавить в желаемое
                </span>
            </button>
            {/* {modalIs! === 'payment-modal' ? (
            ) : null} */}
            <Elements
                stripe={stripePromise}
                options={{
                    mode: 'payment',
                    amount: convertToSubcurrency(amount),
                    currency: 'eur',
                }}
            >
                {/* <PaymentModal amount={amount} /> */}
            </Elements>
        </div>
    )
}
export default UsableButtons
