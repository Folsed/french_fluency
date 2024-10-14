'use server'
import connectDB from '@/config/database/mongodb'
import User from '@/models/User'
import bcrypt from 'bcryptjs'

export const register = async (values: any) => {
    const { email, password, name } = values

    try {
        console.log(values)
        if (!email && !password && !name) throw new Error('Введите данные')
        await connectDB()
        const userFound = await User.findOne({ email })
        if (userFound) {
            return {
                error: 'Такая почта уже существует!',
            }
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = new User({
            name,
            email,
            password: hashedPassword,
        })
        const savedUser = await user.save()
    } catch (error) {
        console.log(error)
    }
}
