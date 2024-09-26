import clientPromise from '@/config/database/mongodb'
import Course from '@/models/Course'
import Image from 'next/image'
import Link from 'next/link'

const ContentCard = async () => {
    await clientPromise

    const data = await Course.find({})

    return (
        <div id='courses-grid'>
            <div className='py-12 text-center lg:py-16'>
                <h1 className='text-3xl font-bold lg:text-4xl xl:text-5xl'>
                    Мои курсы
                </h1>
            </div>
            <div className='relative grid grid-flow-row auto-rows-[minmax(300px,auto)] grid-cols-1 md:grid-cols-2'>
                {data.map((item, key) => (
                    <div
                        key={key}
                        className='aspect-square h-full lg:aspect-[16/10]'
                    >
                        <button className='relative flex h-full w-full items-center justify-center bg-[#000000c5] px-12 transition duration-300 hover:bg-[#0000009b]'>
                            <Image
                                className='z-[-1] bg-gray-900'
                                src={item.image}
                                layout='fill'
                                objectFit='cover'
                                priority
                                alt='Nature scene'
                            />
                            <div className='z-[1] grid gap-6 text-center lg:w-2/3'>
                                <h2 className='truncate text-2xl font-bold text-font-hover'>
                                    {item.title}
                                </h2>
                                <p className='text-font-hover line-clamp-3'>
                                    {item.synopsis}
                                </p>
                            </div>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ContentCard
