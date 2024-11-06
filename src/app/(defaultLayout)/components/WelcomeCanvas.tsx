'use client'
import Image from 'next/image'

const WelcomeCanvas = () => {
    const handleClick = () => {
        const element = document.getElementById('courses-grid')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className='relative aspect-[2/3] h-screen w-full md:aspect-[16/9]'>
            <div className='absolute -z-10 h-full w-full bg-gray-900 [clip-path:inset(0_0_0_0)]'>
                <div className='fixed left-0 top-0 h-full w-full'>
                    <Image
                        src={'/main.webp'}
                        fill
                        sizes='100vw'
                        className='object-cover'
                        priority
                        alt=''
                    />
                </div>
                <div className='absolute inset-0 z-[1] bg-[#00000082]'></div>
            </div>

            <div className='relative z-[2] m-auto flex h-full max-w-6xl select-none items-center justify-center text-white'>
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col items-center gap-6'>
                        <h1 className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl'>
                            Екатерина Безрукова
                        </h1>
                        <p className='text-lg sm:text-xl lg:text-2xl xl:text-3xl'>
                            Преподаватель французского
                        </p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <button
                            className='group relative rounded-lg px-6 py-3 font-bold text-white xl:px-8 xl:py-4'
                            onClick={handleClick}
                        >
                            <span className='ease absolute inset-0 h-full w-full -translate-x-1 -translate-y-1 transform bg-purple-800 opacity-80 transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0'></span>
                            <span className='ease absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-pink-800 opacity-80 mix-blend-screen transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0'></span>
                            <span className='relative'>Мои курсы</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WelcomeCanvas
