import { ReactNode } from 'react'

interface AuthLayoutProps {
    children: ReactNode
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
    return (
        <div className='n'>

            {children}
        </div>
    )
}

export default AuthLayout
