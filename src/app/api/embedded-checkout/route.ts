import { NextRequest, NextResponse } from "next/server"
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export const POST = async (request: NextRequest) => {
    console.log('hghiogsdjflszjkhbfljhasbdf');
    
    // try {
    //     const { amount } = await request.json()

    //     const session = await stripe.checkout.sessions.create({
    //         ui_mode: 'embedded',
    //         amount: amount,
    //         mode: 'payment',
    //         return_url: `/`,
    //     })

    //     return NextResponse.json({
    //         id: session.id,
    //         client_secret: session.client_secret,
    //     })
    // } catch (error: any) {
    //     console.error(error)
    //     return NextResponse.json({ message: error.message }, { status: 500 })
    // }
}
