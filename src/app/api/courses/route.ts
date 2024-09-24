import clientPromise from '@/config/database/mongodb'
import Course from '@/models/Course'
import type { NextApiRequest, NextApiResponse } from 'next'

export const dynamic = 'force-static'

export const GET = async () => {
    const data = await Course.find({})

    return Response.json({data})
}
