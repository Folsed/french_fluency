import { authOptions } from '@/libs/auth'
import NextAuth from 'next-auth'

const handler = NextAuth(authOptions)

secret: process.env.AUTH_SECRET

export { handler as GET, handler as POST }
