import ContentCards from './components/ContentCards'
import WelcomeCanvas from './components/WelcomeCanvas'

export default function Home() {
    return (
        <main className='__content'>
            <div className='grid grid-flow-row gap-12'>
                <WelcomeCanvas />
                <ContentCards/>
            </div>
        </main>
    )
}
