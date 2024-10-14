import connectDB from '@/config/database/mongodb'
import User from '@/models/User'
import type { NextAuthOptions } from 'next-auth'
import bcrypt from 'bcryptjs'
import Credentials from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
    providers: [
        Credentials({
            id: 'credentials',
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                name: { label: 'name', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                await connectDB()
                const user = await User.findOne({
                    email: credentials?.email,
                }).select('+password')
                if (!user) throw new Error('Wrong Email')
                const passwordMatch = await bcrypt.compare(
                    credentials!.password,
                    user.password
                )
                if (!passwordMatch) throw new Error('Wrong Password')
                return user
            },
        }),
    ],
    session: {
        strategy: 'jwt',
    },
}
