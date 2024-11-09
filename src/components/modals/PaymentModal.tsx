'use client'
import { loadStripe } from '@stripe/stripe-js'
import {
    EmbeddedCheckoutProvider,
    EmbeddedCheckout,
} from '@stripe/react-stripe-js'
import { useCallback, useEffect, useRef, useState } from 'react'
import convertToSubcurrency from '@/libs/convertToSubcurrency'

export default function PaymentModal({ amount }: { amount: number }) {
    const stripePromise = loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
    )
    const [showCheckout, setShowCheckout] = useState(false)
    const modalRef = useRef<HTMLDialogElement>(null)

    useEffect(async () => {
        // Create a Checkout Session
        const res = await fetch('/api/embedded-checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
        })
        const data = await res.json()
        return data.client_secret
    }, [amount])

    const options = { fetchClientSecret }

    const handleCheckoutClick = () => {
        setShowCheckout(true)
        modalRef.current?.showModal()
    }

    const handleCloseModal = () => {
        setShowCheckout(false)
        modalRef.current?.close()
    }

    return (
        <div id='checkout' className='my-4'>
            <button className='btn' onClick={handleCheckoutClick}>
                Open Modal with Embedded Checkout
            </button>
            <dialog ref={modalRef} className='modal'>
                <div className='modal-box w-100 max-w-screen-2xl'>
                    <h3 className='text-lg font-bold'>Embedded Checkout</h3>
                    <div className='py-4'>
                        {showCheckout && (
                            <EmbeddedCheckoutProvider
                                stripe={stripePromise}
                                options={options}
                            >
                                <EmbeddedCheckout />
                            </EmbeddedCheckoutProvider>
                        )}
                    </div>
                    <div className='modal-action'>
                        <form method='dialog'>
                            <button className='btn' onClick={handleCloseModal}>
                                Close
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}
