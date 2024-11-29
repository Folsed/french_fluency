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
import { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { MdOutlineEuro } from 'react-icons/md'
import { useSession } from 'next-auth/react'
import { Spinner } from '../UI/Spinner'
import { ConfirmationToken as ConfirmationTokenTypes } from '@stripe/stripe-js'
import { useRouter } from 'next/navigation'

interface ICheckout {
    courseAmount: number
    courseName: string
    courseImage: string
}

const PaymentModal: React.FC<ICheckout> = ({
    courseAmount,
    courseName,
    courseImage,
}) => {
    const { modalIs, setModalIs } = WebNavigation()
    const stripe = useStripe()
    const elements = useElements()
    const router = useRouter()
    const { data } = useSession()

    const [errorMessage, setErrorMessage] = useState<string>('')
    const [loading, setLoading] = useState(false)

    const fetchPaymentIntent = async (
        confirmationToken: ConfirmationTokenTypes
    ) => {
        try {
            const response = await fetch(`/api/create-payment-intent`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    courseName: courseName,
                    courseAmount: convertToSubcurrency(courseAmount),
                    confirmationTokenId: confirmationToken.id,
                }),
            })

            const data = await response.json()
            if (data.status === 'succeeded') {
                router.push(
                    `${process.env.NEXT_PUBLIC_SERVER}/payment-success?COURSE_NAME=${encodeURIComponent(courseName)}&COURSE_AMOUNT=${courseAmount}`
                )
            }
        } catch (error) {
            console.error('Failed to fetch payment intent', error)
        }
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (!stripe || !elements) return

        setLoading(true)

        const { error: submitError } = await elements.submit()
        if (submitError) {
            setErrorMessage(submitError.message as string)
            setLoading(false)
            return
        }

        const { error, confirmationToken } =
            await stripe.createConfirmationToken({ elements })

        if (error) {
            setErrorMessage(error.message as string)
        }

        await fetchPaymentIntent(confirmationToken as ConfirmationTokenTypes)
        setLoading(false)
    }

    return (
        <div
            className={`${modalIs === 'payment-modal' ? 'fixed' : 'none'} inset-0 flex items-center justify-center`}
        >
            <Backdrop onClick={() => setModalIs('')} />

            <div className='relative z-[3] mx-4 flex h-[654px] w-[80%] max-w-[1576px]'>
                <CourseImage
                    courseName={courseName}
                    courseImage={courseImage}
                />

                <div className='relative flex h-full w-full flex-1 items-center max-lg:justify-center'>
                    <div className='relative z-[5] flex h-full w-full max-w-xl scroll-my-32 items-center justify-center overflow-y-auto bg-slate-200 shadow-custom lg:-ml-24 lg:h-[93%] lg:min-w-[550px]'>
                        <CloseButton onClick={() => setModalIs('')} />
                        <PaymentForm
                            courseName={courseName}
                            courseAmount={courseAmount}
                            loading={loading}
                            errorMessage={errorMessage}
                            stripe={stripe}
                            elements={elements}
                            data={data}
                            handleSubmit={handleSubmit}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

const PaymentForm = ({
    courseAmount,
    loading,
    errorMessage,
    stripe,
    elements,
    data,
    handleSubmit,
}: {
    courseName: string
    courseAmount: number
    loading: boolean
    errorMessage: string
    stripe: any
    elements: any
    data: any
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>
}) => (
    <div className='h-[87.333%] w-[87.333%]'>
        <h2 className='text-center text-3xl font-extrabold text-gray-800'>
            Оплата курса
        </h2>
        {!stripe || !elements ? (
            <div className='mt-6 flex w-full justify-center'>
                <Spinner />
            </div>
        ) : (
            <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
                <LinkAuthenticationElement
                    options={{
                        defaultValues: { email: data?.user?.email || '' },
                    }}
                    className='mb-4'
                />
                <PaymentElement />
                <button
                    disabled={!stripe || loading}
                    type='submit'
                    className='mb-14 me-2 flex w-full items-center justify-center rounded-lg bg-black px-5 py-2.5 text-center text-sm font-medium text-font-hover shadow-custom'
                >
                    {loading ? (
                        'Processing...'
                    ) : (
                        <div className='flex flex-row items-center'>
                            Pay {courseAmount}
                            <MdOutlineEuro />
                        </div>
                    )}
                </button>
            </form>
        )}
    </div>
)

const Backdrop = ({ onClick }: { onClick: () => void }) => (
    <div
        className='absolute inset-0 z-[2] flex bg-[#000000d1]'
        onClick={onClick}
    />
)

const CourseImage = ({
    courseName,
    courseImage,
}: {
    courseName: string
    courseImage: string
}) => (
    <div className='absolute z-[4] flex-1 select-none justify-center bg-black max-lg:-inset-4 lg:relative lg:flex'>
        <h1 className='relative z-[2] mt-24 max-w-sm pr-24 text-center text-2xl font-bold uppercase text-font-hover max-lg:hidden xl:pr-12 xl:text-3xl'>
            {courseName}
        </h1>
        <Image
            src={courseImage}
            alt={courseName}
            className='pointer-events-none z-[1] h-full w-[640px] select-none bg-cover bg-no-repeat object-cover opacity-50 lg:opacity-20'
            fill
        />
    </div>
)

const CloseButton = ({ onClick }: { onClick: () => void }) => (
    <button onClick={onClick} className='absolute right-4 top-4'>
        <RxCross2 size={24} />
    </button>
)

export default PaymentModal
