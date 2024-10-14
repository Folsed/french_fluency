import { authOptions } from '@/libs/auth'
import NextAuth from 'next-auth'

const handler = NextAuth(authOptions)

secret: process.env.NEXT_PUBLIC_SECRET

export { handler as GET, handler as POST }
