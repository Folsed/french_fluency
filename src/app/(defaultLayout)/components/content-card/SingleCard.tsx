'use client'
import { CourseDocument } from '@/models/Course'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

interface IData {
    data: CourseDocument
}

const SingleCard: React.FC<IData> = ({ data }) => {
    return (
        <div
            className={`aspect-square h-full transition-colors duration-500 lg:aspect-[16/10]`}
        >
            <Link
                href={`/course/${data.alias}`}
                className='relative flex h-full w-full items-center justify-center bg-[#000000c5] px-12 transition duration-300 hover:bg-[#0000009b]'
            >
                <Image
                    className='z-[-1] bg-gray-900 object-cover'
                    src={data.image}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    priority
                    alt='Nature scene'
                />
                <div className='z-[1] grid gap-6 text-center lg:w-2/3'>
                    <h2 className='truncate text-2xl font-bold text-font-hover lg:text-4xl'>
                        {data.title}
                    </h2>
                    <p className='text-md line-clamp-3 text-font md:text-lg lg:text-xl'>
                        {data.synopsis}
                    </p>
                </div>
            </Link>
        </div>
    )
}
export default SingleCard
