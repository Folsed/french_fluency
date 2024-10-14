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
                if (!credentials?.email && !credentials?.password)
                    throw new Error('Пожалуйста введите данные пользователя!')
                await connectDB()
                const user = await User.findOne({
                    email: credentials?.email,
                }).select('+password')
                if (!user) throw new Error('Такой почты не существует!')
                const passwordMatch = await bcrypt.compare(
                    credentials!.password,
                    user.password
                )
                if (!passwordMatch)
                    throw new Error('Пожалуйста проверьте пароль!')
                return user
            },
        }),
    ],
    secret: process.env.AUTH_SECRET,
    session: {
        strategy: 'jwt',
    },
}
