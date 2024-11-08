import mongoose, { Document, Model, Schema } from 'mongoose'

export interface CourseDocument extends Document {
    _id: string
    title: string
    synopsis: string
    language: string
    price: number
    image: string
    alias: string
    video_support: string
    teaser: string
    for_level: string
    feedback: string
    additional_info: string
    access_time: string
}

const PostSchema = new Schema<CourseDocument>({
    title: { type: String, required: true },
    synopsis: { type: String, required: true },
    language: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    alias: { type: String, required: true },
    video_support: { type: String, required: true },
    teaser: { type: String, required: true },
    for_level: { type: String, required: true },
    feedback: { type: String, required: true },
    additional_info: { type: String, required: true },
    access_time: { type: String, required: true },
})

const Course: Model<CourseDocument> =
    mongoose.models.Course ||
    mongoose.model<CourseDocument>('Course', PostSchema)
export default Course
