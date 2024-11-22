import { NextRequest, NextResponse } from 'next/server'
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export const POST = async (request: NextRequest) => {
    const url = new URL(request.url)
    const courseName = url.searchParams.get('COURSE_NAME') || 'plug'

    try {
        const { courseAmount } = await request.json()

        const paymentIntent = await stripe.paymentIntents.create({
            amount: courseAmount,
            currency: 'eur',
            automatic_payment_methods: { enabled: true },
            metadata: {
                COURSE_NAME: courseName,
            },
            description: courseName,
        })

        return NextResponse.json({ clientSecret: paymentIntent.client_secret })
    } catch (error) {
        console.error('Internal Error:', error)

        return NextResponse.json(
            { error: `Internal Server Error: ${error}` },
            { status: 500 }
        )
    }
}
