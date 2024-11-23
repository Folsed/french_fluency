'use client'
import { Suspense } from 'react'
import PaymentScreen from './components/PaymentScreen'

const PaymentSuccessPage = () => {
    return (
        <Suspense>
            <PaymentScreen />
        </Suspense>
    )
}
export default PaymentSuccessPage
