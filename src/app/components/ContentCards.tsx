import Image from 'next/image'

const ContentCard = () => {
    return (
        <div className='grid grid-flow-row grid-cols-3 px-12'>
            {Array(6)
                .fill(null)
                .map((item, key) => (
                    <article key={key} className='relative isolate flex max-w-sm flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40'>
                        <Image
                            src='/123.jpg'
                            width={500}
                            height={500}
                            alt='University of Southern California'
                            className='absolute inset-0 h-full w-full object-cover'
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40'></div>
                        <h3 className='z-10 mt-3 text-3xl font-bold text-white'>
                            Paris
                        </h3>
                        <div className='z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300'>
                            City of love
                        </div>
                    </article>
                ))}
        </div>
    )
}
export default ContentCard
