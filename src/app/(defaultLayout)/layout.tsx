import Footer from './components/Footer'

interface LayoutProps {
    children: React.ReactNode
    courses: React.ReactNode
}

const defaultLayout: React.FC<LayoutProps> = ({ children, courses }) => {
    return (
        <div>
            <div className='scrollbar-settings relative flex min-h-screen flex-col'>
                <div className='flex-grow-[1]'>{children}</div>
                <Footer />
            </div>
            {courses}
        </div>
    )
}

export default defaultLayout
