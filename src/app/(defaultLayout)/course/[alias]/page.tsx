import connectDB from "@/config/database/mongodb"
import Course, { CourseDocument } from "@/models/Course"
import CourseDetails from "./components/course-details/CourseDetails"

const CoursePage = async ({
    params,
}: {
    params: Promise<{ alias: string }>
}) => {
    await connectDB()
    const alias = (await params).alias
    const data = await Course.findOne({alias: alias})


    return <div className='mt-36'>
        <CourseDetails data={data as CourseDocument}/>
    </div>
}

export default CoursePage