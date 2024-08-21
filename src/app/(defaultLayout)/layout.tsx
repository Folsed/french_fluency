import Footer from './components/Footer'
import Header from '../components/header/Header'

interface LayoutProps {
    children: React.ReactNode
}

const defaultLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <div className='relative flex min-h-screen flex-col'>
                <div className='flex-grow-[1]'>{children}</div>
                <Footer />
            </div>
        </div>
    )
}

export default defaultLayout
