import ContentCards from './components/ContentCards'
import WelcomeCanvas from './components/WelcomeCanvas'

export default function Home() {
    return (
        <main className='__content'>
            <div className='flex flex-col'>
                <WelcomeCanvas />
                <ContentCards/>
            </div>
        </main>
    )
}
