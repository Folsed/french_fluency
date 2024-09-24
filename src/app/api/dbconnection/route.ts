import clientPromise from '@/config/database/mongodb'
import User from '@/models/User'
import { models, Mongoose } from 'mongoose'
import { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
    await clientPromise
    let users

    if (req.method === 'GET') {
        users = await User.find({})
    }
    return new NextResponse(users)
}
