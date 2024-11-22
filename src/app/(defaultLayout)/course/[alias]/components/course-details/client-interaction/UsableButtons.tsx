'use client'
import PaymentModal from '@/components/modals/PaymentModal'
import convertToSubcurrency from '@/libs/convertToSubcurrency'
import { WebNavigation } from '@/providers/NavigationProvider'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { FaRegCreditCard } from 'react-icons/fa6'

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
    throw new Error(
        'process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined'
    )
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

interface ICheckout {
    courseAmount: number
    courseName: string
    courseImage: string
}

const UsableButtons: React.FC<ICheckout> = ({ courseAmount, courseName, courseImage }) => {
    const { modalIs, setModalIs } = WebNavigation()

    const paymentModalHandler = () => {
        setModalIs('payment-modal')
    }
    return (
        <div className='flex flex-col gap-2 md:flex-row md:gap-2'>
            <button
                className='group relative flex h-[60px] w-full items-center justify-center gap-2 overflow-hidden bg-black text-xl text-white shadow-custom duration-300'
                onClick={paymentModalHandler}
            >
                <div className='absolute left-[-100%] top-0 h-[150px] w-full rounded-[50%] bg-white mix-blend-difference duration-300 group-hover:translate-x-[100%] group-hover:translate-y-[-50%] group-hover:rounded-none' />
                Pay
                <FaRegCreditCard size={20} />
            </button>
            {/* <button className='group relative mb-2 me-2 inline-flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 text-base font-medium text-gray-900 hover:text-white group-hover:from-purple-500 group-hover:to-pink-500 md:text-lg dark:text-white'>
                <span className='relative w-full bg-gray-900 px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 md:px-7 md:py-5'>
                    Добавить в желаемое
                </span>
            </button> */}
            {modalIs === 'payment-modal' ? (
                <Elements
                    stripe={stripePromise}
                    options={{
                        mode: 'payment',
                        amount: convertToSubcurrency(courseAmount),
                        currency: 'eur',
                        appearance: { theme: 'stripe' },
                    }}
                >
                    <PaymentModal courseAmount={courseAmount} courseName={courseName} courseImage={courseImage} />
                </Elements>
            ) : null}
        </div>
    )
}
export default UsableButtons
