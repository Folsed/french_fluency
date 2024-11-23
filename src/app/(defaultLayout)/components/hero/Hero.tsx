'use client'
import './hero.styles.css'
import Logo from '@/components/svgs/Logo'
import Image from 'next/image'

const Hero = () => {
    const handleClick = () => {
        const element = document.getElementById('courses-grid')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className='relative aspect-[2/3] h-screen w-full shadow-custom md:aspect-[16/9]'>
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
                        <Logo className='fill-[#FFD700] stroke-[#FFD700]' />
                        <p className='text-lg sm:text-xl lg:text-2xl xl:text-3xl'>
                            Преподаватель французского
                        </p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <button className='hero_button' onClick={handleClick}>
                            <div className='hero_button__line'></div>
                            <div className='hero_button__line'></div>
                            <span className='hero_button__text'>Мои курсы</span>
                            <div className='hero_button__drow1'></div>
                            <div className='hero_button__drow2'></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero
