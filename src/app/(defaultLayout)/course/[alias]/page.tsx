import connectDB from '@/config/database/mongodb'
import Course, { CourseDocument } from '@/models/Course'
import CourseDetails from './components/course-details/CourseDetails'

const CoursePage = async ({
    params,
}: {
    params: Promise<{ alias: string }>
}) => {
    await connectDB()
    const alias = (await params).alias
    const data = await Course.findOne({ alias: alias })


    const serializedData = {
        ...data?.toObject(), // Convert the MongoDB document to a plain object
        _id: data?._id.toString(), // Convert the ObjectId to a string
    }

    return (
        <div className=''>
            <CourseDetails data={serializedData as CourseDocument} />
        </div>
    )
}

export default CoursePage
