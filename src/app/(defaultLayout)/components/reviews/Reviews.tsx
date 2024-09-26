import ReviewsCarousel from './ReviewsCarousel'

const Reviews = () => {
    return (
        <div>
            <div className='py-12 text-center lg:py-16'>
                <h1 className='text-3xl font-bold lg:text-4xl xl:text-5xl'>
                    Отзывы
                </h1>
            </div>
            <ReviewsCarousel />
        </div>
    )
}
export default Reviews
