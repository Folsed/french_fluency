import { SiMaildotru } from 'react-icons/si'
import { RiLockLine } from 'react-icons/ri'
import Image from 'next/image'

const page = () => {
    return (
        <div className='flex h-screen w-full items-center justify-center bg-black bg-cover bg-no-repeat'>
            <div className='absolute inset-0'>
                <Image
                    src={'/auth-bg.webp'}
                    className='opacity-50'
                    alt=''
                    layout='fill'
                    objectFit='cover'
                    priority
                />
            </div>
            <div className='bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8'>
                <div className='text-white'>
                    <div className='mb-8 flex flex-col items-center'>
                        <h1 className='mb-2 text-2xl'>Instagram</h1>
                        <span className='text-gray-300'>
                            Enter Login Details
                        </span>
                    </div>
                    <form action='#'>
                        <div className='mb-4 text-lg'>
                            <input
                                className='border-b-2 border-gray-400 bg-transparent px-6 py-2 text-center text-inherit  placeholder-gray-500'
                                type='text'
                                name='name'
                                placeholder='Login'
                            />
                        </div>

                        <div className='mb-4 text-lg'>
                            <input
                                className='border-b-2 border-gray-400 bg-transparent px-6 py-2 text-center text-inherit  placeholder-gray-500'
                                type='Password'
                                name='name'
                                placeholder='Password'
                            />
                        </div>
                        <div className='mt-8 flex justify-center text-lg text-black'>
                            <button
                                type='submit'
                                className='bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600'
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default page
