import ContentCards from './components/content-card/ContentCards'
import Hero from './components/hero/Hero'
import Reviews from './components/reviews/Reviews'

export default function HomePage() {
    return (
        <main className='__content'>
            <div className='flex flex-col'>
                <Hero />
                <ContentCards />
                <Reviews />
            </div>
        </main>
    )
}
