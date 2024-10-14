'use client'
import { CourseDocument } from '@/models/Course'
import Image from 'next/image'
import React, { useState } from 'react'
import AnimateModal from './AnimateModal'
import CardDetails from './CardDetails'

interface IData {
    data: CourseDocument
}

const SingleCard: React.FC<IData> = ({ data }) => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
        document.body.classList.add('scroll-blocked')
    }

    return (
        <div
            className={`aspect-square h-full transition-colors duration-500 lg:aspect-[16/10]`}
        >
            <button
                onClick={handleOpen}
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
                    <h2 className='truncate text-2xl font-bold text-font-hover'>
                        {data.title}
                    </h2>
                    <p className='line-clamp-3 text-font-hover'>
                        {data.synopsis}
                    </p>
                </div>
            </button>
            <AnimateModal open={open} setOpen={setOpen}>
                <CardDetails data={data} />
            </AnimateModal>
        </div>
    )
}
export default SingleCard
