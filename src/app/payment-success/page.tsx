import Link from "next/link"
import React from "react"

const PaymentSuccessPage = () => {
    return (
        <React.Fragment>
            <div className='flex min-h-[100dvh] flex-col items-center justify-center px-4 py-12 md:px-6 md:py-24 lg:py-32'>
                <div className='max-w-md space-y-4 text-center'>
                    <div className='inline-flex rounded-full bg-green-100 p-4 dark:bg-green-900'>
                        {/* <CheckIcon className='h-8 w-8 text-green-500 dark:text-green-400' /> */}
                    </div>
                    <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                        Payment Successful
                    </h1>
                    <p className='text-gray-500 md:text-xl dark:text-gray-400'>
                        Your subscription has been activated. You can now access
                        all the features of our SaaS product.
                    </p>
                </div>
            </div>
            <div className='bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-gray-800'>
                <div className='container px-4 md:px-6'>
                    <div className='mx-auto max-w-md space-y-6'>
                        {/* <Card>
                            <CardHeader>
                                <CardTitle>Payment Details</CardTitle>
                            </CardHeader>
                            <CardContent className='grid gap-4'>
                                <div className='flex items-center justify-between'>
                                    <div className='text-gray-500 dark:text-gray-400'>
                                        Plan
                                    </div>
                                    <div className='font-medium'>Pro</div>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <div className='text-gray-500 dark:text-gray-400'>
                                        Amount Paid
                                    </div>
                                    <div className='font-medium'>$99.00</div>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <div className='text-gray-500 dark:text-gray-400'>
                                        Transaction ID
                                    </div>
                                    <div className='font-medium'>123456789</div>
                                </div>
                            </CardContent>
                        </Card> */}
                        <Link
                            href='#'
                            className='inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300'
                            prefetch={false}
                        >
                            Go to Dashboard
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default page
