import mongoose, { Document, Model, Schema } from 'mongoose'

interface UserDocument extends Document {
    _id: string
    email: string
    name: string
    password: string
    createdAt: Date
    updatedAt: Date
}

const UserSchema: Schema = new Schema(
    {
        email: {
            type: String,
            required: [true, 'Name is required'],
            unique: true,
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                'Email is invalid',
            ],
        },
        name: {
            type: String,
            required: [true, 'Name is required'],
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

const User =
    mongoose.models?.User || mongoose.model<UserDocument>('User', UserSchema)
export default User
