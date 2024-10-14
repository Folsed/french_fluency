import mongoose from 'mongoose'

const MONGODB_URI: string | undefined = process.env.MONGODB_URI
const NODE: string = process.env.NODE_ENV as string
const options: any = {}

if (!MONGODB_URI)
    throw new Error('You have missed Mongo URI please add one to .env file!')

export const connectDB = async () => {
    let clientPromise: Promise<typeof mongoose>

    try {
        if (NODE !== 'production') {
            if (!global._mongoClientPromise) {
                global._mongoClientPromise = mongoose.connect(
                    MONGODB_URI,
                    options
                )
            }
            return (clientPromise = global._mongoClientPromise)
        } else {
            return (clientPromise = mongoose.connect(MONGODB_URI, options))
        }
    } catch (error) {
        console.error('Error connecting to MongoDB:', error)
        throw new Error('MongoDB connection failed')
    }
}

export default connectDB
