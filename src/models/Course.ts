import { ObjectId } from 'mongodb'
import mongoose, { Document, Model, Schema } from 'mongoose'

export interface ICourse extends Document {
    _id: ObjectId
    title: string
    synopsis: string
    language: string
    price: number
    image: string
    url: string
}

const PostSchema: Schema = new Schema({
    _id: { type: ObjectId, required: true },
    title: { type: String, required: true },
    synopsis: { type: String, required: true },
    language: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    url: { type: String, required: true },
})

const Course: Model<ICourse> =
    mongoose.models.Course || mongoose.model<ICourse>('Course', PostSchema)
export default Course
