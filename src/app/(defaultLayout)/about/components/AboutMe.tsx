import Image from 'next/image'
import { paragraphs } from './_paragraphs'

const AboutMe = () => {
    return (
        <section className='w-full overflow-hidden'>
            <div className='mx-auto w-full'>
                {/* User Cover IMAGE */}
                <div className='shadow-custom relative h-[12.5rem] w-full bg-gray-900 sm:h-[16rem] md:h-[19rem] lg:h-[22rem] xl:h-[25rem]'>
                    <Image
                        src='/about-cover.jpg'
                        alt='User Cover'
                        className='w-full object-cover'
                        fill
                        priority
                    />
                </div>
                {/* User Profile Image */}
                <div className='mx-auto flex w-full justify-center'>
                    <Image
                        src='/about2.jpg'
                        alt='User Profile'
                        width={500}
                        height={500}
                        priority
                        className='shadow-custom relative bottom-[5rem] h-[10rem] w-[10rem] rounded-full bg-gray-900 object-cover outline outline-2 outline-offset-2 outline-yellow-500 md:bottom-[6rem] md:h-[12rem] md:w-[12rem] lg:bottom-[8rem] lg:h-[16rem] lg:w-[16rem] xl:bottom-[7rem] xl:h-[16rem] xl:w-[16rem]'
                    />
                </div>

                <section className='relative flex flex-col justify-center overflow-hidden'>
                    <div className='mx-auto w-full max-w-7xl px-4 pb-48 md:px-6'>
                        <div className='flex flex-col justify-center'>
                            <div className='mx-auto w-full max-w-3xl'>
                                <div className='relative space-y-8 before:absolute before:inset-0 before:ml-12 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-slate-500 before:to-transparent md:before:mx-auto md:before:translate-x-0'>
                                    {paragraphs.map((item, _) => (
                                        <div
                                            key={item.id}
                                            className='relative flex items-center justify-center text-font-hover md:justify-normal md:odd:flex-row-reverse'
                                        >
                                            <div className='shadow-custom w-[calc(100%-4rem)] rounded border border-slate-700 bg-[#1b1f23] p-4 md:w-[calc(50%-2.5rem)]'>
                                                <div className=''>
                                                    {item.text}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}
export default AboutMe
