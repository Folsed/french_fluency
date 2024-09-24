// models/Post.ts
import mongoose, { Document, Model, Schema } from 'mongoose'

interface IPost extends Document {
    name: string
    email: string
}

const PostSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
})

const User: Model<IPost> =
    mongoose.models.User || mongoose.model<IPost>('User', PostSchema)
export default User
