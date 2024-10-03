import ContentCards from './components/content-card/ContentCards'
import Reviews from './components/reviews/Reviews'
import WelcomeCanvas from './components/WelcomeCanvas'

export default function Home() {
    return (
        <main className='__content'>
            <div className='flex flex-col'>
                <WelcomeCanvas />
                <ContentCards />
                <Reviews />
            </div>
        </main>
    )
}
