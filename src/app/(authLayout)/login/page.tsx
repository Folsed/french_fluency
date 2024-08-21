const page = () => {
    return (
        <div className='flex h-screen'>
            <div className='hidden w-1/2 items-center justify-around Sbg-gradient-to-tr Sfrom-blue-800 Sto-purple-700 lg:flex'>
                <div
                    className={`absolute inset-0 -z-10 w-full bg-[url('/login.webp')] bg-cover bg-fixed bg-center`}
                >
                    <div className="absolute inset-0 bg-[#000000b9]"></div>
                </div>
                <div>
                    <h1 className='font-sans text-4xl font-bold text-white'>
                        GoFinance
                    </h1>
                    <p className='mt-1 text-white'>
                        The most popular peer to peer lending at SEA
                    </p>
                    <button
                        type='submit'
                        className='mb-2 mt-4 block w-28 rounded-2xl bg-white py-2 font-bold text-indigo-800'
                    >
                        Read More
                    </button>
                </div>
            </div>
            <div className='flex w-full items-center justify-center bg-background lg:w-1/2'>
                <form className=''>
                    <h1 className='mb-1 text-2xl font-bold text-gray-800'>
                        Hello Again!
                    </h1>
                    <p className='mb-7 text-sm font-normal text-gray-600'>
                        Welcome Back
                    </p>
                    <div className='mb-4 flex items-center rounded-2xl border-2 px-3 py-2'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-5 w-5 text-gray-400'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                                d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                            />
                        </svg>
                        <input
                            className='border-none pl-2 outline-none'
                            type='text'
                            name=''
                            id=''
                            placeholder='Email Address'
                        />
                    </div>
                    <div className='flex items-center rounded-2xl border-2 px-3 py-2'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-5 w-5 text-gray-400'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                        >
                            <path
                                fill-rule='evenodd'
                                d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
                                clip-rule='evenodd'
                            />
                        </svg>
                        <input
                            className='border-none pl-2 outline-none'
                            type='text'
                            name=''
                            id=''
                            placeholder='Password'
                        />
                    </div>
                    <button
                        type='submit'
                        className='mb-2 mt-4 block w-full rounded-2xl bg-indigo-600 py-2 font-semibold text-white'
                    >
                        Login
                    </button>
                    <span className='ml-2 cursor-pointer text-sm hover:text-blue-500'>
                        Forgot Password ?
                    </span>
                </form>
            </div>
        </div>
    )
}
export default page
