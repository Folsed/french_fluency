import mongoose from 'mongoose'

const URI: string | undefined = process.env.MONGODB_URI
const NODE: string = process.env.NODE_ENV as string
const options: any = {}

if (!URI)
    throw new Error('You have missed Mongo URI please add one to .env file!')

let clientPromise: Promise<typeof mongoose>

if (NODE !== 'production') {
    if (!global._mongoClientPromise) {
        global._mongoClientPromise = mongoose.connect(URI, options)
    }
    clientPromise = global._mongoClientPromise
} else {
    clientPromise = mongoose.connect(URI, options)
}

export default clientPromise
