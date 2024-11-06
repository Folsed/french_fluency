import mongoose, { Document, Model, Schema } from 'mongoose'

export interface CourseDocument extends Document {
    _id: string
    title: string
    synopsis: string
    language: string
    price: number
    image: string
    alias: string
}

const PostSchema = new Schema<CourseDocument>({
    title: { type: String, required: true },
    synopsis: { type: String, required: true },
    language: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    alias: { type: String, required: true },
})

const Course: Model<CourseDocument> =
    mongoose.models.Course ||
    mongoose.model<CourseDocument>('Course', PostSchema)
export default Course
