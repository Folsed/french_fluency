import connectDB from '@/config/database/mongodb'
import Course from '@/models/Course'
import SingleCard from './SingleCard'
import DataRecipient from './DataRecipient'

const ContentCards = async () => {
    await connectDB()

    const data = await Course.find({}).lean()

    const courses = data.map((item) => ({
        ...item,
        _id: item._id.toString(), // Convert ObjectId to string
    }))

    return (
        <div id='courses-grid'>
            <div className='py-12 text-center lg:py-16'>
                <h1 className='text-3xl font-bold text-[#FFD700] lg:text-4xl xl:text-5xl'>
                    Мои курсы
                </h1>
            </div>
            <div className='relative grid grid-flow-row auto-rows-[minmax(300px,auto)] grid-cols-1 md:grid-cols-2'>
                <DataRecipient courses={courses} />
            </div>
        </div>
    )
}

export default ContentCards
