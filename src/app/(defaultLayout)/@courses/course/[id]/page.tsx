export default function Page() {
    return (
        <div
            className='absolute top-1/2 right-1/2'
        >
            <div className='relative max-h-full w-full max-w-2xl p-4'>
                <div className='relative rounded-lg bg-white shadow dark:bg-gray-700'>
                    <div className='flex items-center justify-between rounded-t border-b p-4 md:p-5 dark:border-gray-600'>
                        <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                            Terms of Service
                        </h3>
                        <button
                            type='button'
                            className='ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white'
                            data-modal-hide='default-modal'
                        >
                            <span className='sr-only'>Close modal</span>
                        </button>
                    </div>
                    <div className='space-y-4 p-4 md:p-5'>
                        <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                            With less than a month to go before the European
                            Union enacts new consumer privacy laws for its
                            citizens, companies around the world are updating
                            their terms of service agreements to comply.
                        </p>
                        <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                            The European Union’s General Data Protection
                            Regulation (G.D.P.R.) goes into effect on May 25 and
                            is meant to ensure a common set of data rights in
                            the European Union. It requires organizations to
                            notify users as soon as possible of high-risk data
                            breaches that could personally affect them.
                        </p>
                    </div>
                    <div className='flex items-center rounded-b border-t border-gray-200 p-4 md:p-5 dark:border-gray-600'>
                        <button
                            data-modal-hide='default-modal'
                            type='button'
                            className='rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                        >
                            I accept
                        </button>
                        <button
                            data-modal-hide='default-modal'
                            type='button'
                            className='ms-3 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700'
                        >
                            Decline
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
