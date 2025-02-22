'use client'
import { CourseDocument } from '@/models/Course'
import UsableButtons from './client-interaction/UsableButtons'
import Image from 'next/image'
import BackToCourses from './client-interaction/BackToCourses'
import { Suspense } from 'react'
import Details from './details/Details'

const CourseDetails = ({ data }: { data: CourseDocument }) => {
    const paragraphs = data?.synopsis?.split(/\n\n|\n-/)

    return (
        <section className='w-full overflow-hidden'>
            <div className='mx-auto w-full'>
                <div className='mb-24 flex flex-col gap-8 lg:gap-16'>
                    <div className='relative flex h-[15rem] w-full items-center justify-center bg-gray-900 shadow-custom sm:h-[19rem] md:h-[22rem] lg:h-[25rem] xl:h-[27rem]'>
                        <Image
                            src={data.image}
                            alt='User Cover'
                            className='z-0 w-full object-cover'
                            fill
                            priority
                        />
                        <div className='absolute inset-0 z-[1] bg-[#000000aa]'></div>

                        <div className='z-[2] flex max-w-2xl flex-col items-center gap-0 px-2 md:mx-auto lg:gap-4'>
                            <h2 className='text-center text-2xl font-bold text-font-hover md:px-0 lg:text-4xl'>
                                {data.title}
                            </h2>
                            <div className='flex'>
                                <BackToCourses />
                            </div>
                        </div>
                    </div>
                    <section className='relative flex flex-col items-center justify-center gap-8 lg:gap-16'>
                        <div className='z-[3] mx-auto -mt-16 h-60 w-full max-w-xl px-3 sm:h-72 lg:-m-24 lg:h-80 lg:px-0'>
                            <div className='h-full w-full overflow-hidden rounded-xl shadow-custom'>
                                <Suspense fallback={<p>Loading...</p>}>
                                    <iframe
                                        src={data.teaser}
                                        className='h-full w-full'
                                    />
                                </Suspense>
                            </div>
                        </div>
                        <div className='mx-auto w-full max-w-7xl md:px-4 lg:mt-24'>
                            <div className='flex flex-col justify-center'>
                                <div className='mx-auto w-full max-w-5xl'>
                                    <div className='relative space-y-8 before:absolute before:inset-0 before:ml-12 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-slate-500 before:to-transparent md:before:mx-auto md:before:translate-x-0'>
                                        {paragraphs?.map((item, index) => (
                                            <div
                                                key={index}
                                                className='relative flex items-center justify-center text-lg text-font-hover md:justify-normal md:odd:flex-row-reverse'
                                            >
                                                <div className='w-[calc(100%-1rem)] rounded border border-slate-700 bg-[#1b1f23] p-4 shadow-custom md:w-[calc(50%-2.5rem)]'>
                                                    <div className=''>
                                                        {item}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className='flex max-w-5xl flex-col gap-4 px-2 md:mx-auto'>
                        <Details data={data} />
                        <UsableButtons
                            courseAmount={data.price}
                            courseName={data.title}
                            courseImage={data.image}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CourseDetails
