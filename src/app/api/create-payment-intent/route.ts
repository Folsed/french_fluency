import { NextRequest, NextResponse } from 'next/server'
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export const POST = async (request: NextRequest) => {
    try {
        const { courseAmount, courseName, confirmationTokenId } =
            await request.json()

        const paymentIntent = await stripe.paymentIntents.create({
            confirm: true,
            amount: courseAmount,
            currency: 'eur',
            automatic_payment_methods: {
                enabled: true,
            },
            metadata: {
                COURSE_NAME: courseName,
            },
            description: courseName,
            confirmation_token: confirmationTokenId,
            return_url: `${process.env.NEXT_PUBLIC_SERVER}/payment-success?COURSE_NAME=${encodeURIComponent(courseName)}&COURSE_AMOUNT=${courseAmount}`,
        })

        return NextResponse.json({
            clientSecret: paymentIntent.client_secret,
            status: paymentIntent.status,
        })
    } catch (error) {
        console.error('Internal Error:', error)

        return NextResponse.json(
            { error: `Internal Server Error: ${error}` },
            { status: 500 }
        )
    }
}
