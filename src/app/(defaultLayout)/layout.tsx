import Footer from './components/Footer'

interface LayoutProps {
    children: React.ReactNode
}

const DefaultLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <div className='scrollbar-settings relative flex min-h-screen flex-col'>
                <div className='flex-grow-[1]'>{children}</div>
                <Footer />
            </div>
        </div>
    )
}

export default DefaultLayout
