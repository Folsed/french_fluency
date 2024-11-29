'use client'
import { Suspense, useEffect } from 'react'
import PaymentScreen from './components/PaymentScreen'
import { Spinner } from '@/components/UI/Spinner'

const PaymentSuccessPage = () => {
    return (
        <Suspense fallback={<Spinner />}>
            <PaymentScreen />
        </Suspense>
    )
}
export default PaymentSuccessPage
