import clientPromise from '@/config/database/mongodb'
import Course from '@/models/Course'
import Image from 'next/image'
import Link from 'next/link'
import SingleCard from './SingleCard'

const ContentCards = async () => {
    await clientPromise

    const data = await Course.find({}).lean()

    return (
        <div id='courses-grid'>
            <div className='py-12 text-center lg:py-16'>
                <h1 className='text-3xl font-bold lg:text-4xl xl:text-5xl'>
                    Мои курсы
                </h1>
            </div>
            <div className='relative grid grid-flow-row auto-rows-[minmax(300px,auto)] grid-cols-1 md:grid-cols-2'>
                {data.map((item, key) => (
                    <SingleCard data={item} key={key} />
                ))}
            </div>
        </div>
    )
}

export default ContentCards
