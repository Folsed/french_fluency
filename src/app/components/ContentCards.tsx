import Image from 'next/image'
import Link from 'next/link'

const ContentCard = () => {
    return (
        <div className='relative mx-auto grid grid-flow-row grid-cols-1 gap-4 px-2 md:grid-cols-2 md:px-12 2xl:grid-cols-3 items-end'>
            {Array(6)
                .fill(null)
                .map((item, key) => (
                    <div
                        key={key}
                        className='flex items-center justify-center p-4'
                    >
                        <div className='w-full max-w-[720px] transform overflow-hidden rounded-xl bg-white shadow-2xl transition duration-300 hover:md:scale-105'>
                            <div className='relative'>
                                <Image
                                    className='h-96 w-full object-cover'
                                    src='/card.jpg'
                                    priority
                                    height={700}
                                    width={900}
                                    alt='Nature scene'
                                />
                            </div>
                            <div className='p-6'>
                                <h2 className='mb-2 text-2xl font-bold text-gray-800'>
                                    ЭКСКЛЮЗИВНЫЙ мастеркласс от
                                    сертифицированного экзаменатора DELF-DALF,
                                    Надежды Опашнюк
                                </h2>
                                <p className='mb-4 text-gray-600'>
                                    Лекция в записи, где экзаменатор Надежда
                                    Опашнюк раскрывает ВСЮ ПОДНАГОТНУЮ языкового
                                    экзамена DELF и DALF.
                                </p>
                                {/* <div className='mb-4 flex items-center'>
                                    <svg
                                        className='mr-1 h-5 w-5 text-yellow-500'
                                        fill='currentColor'
                                        viewBox='0 0 20 20'
                                    >
                                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                                    </svg>
                                    <span className='ml-1 text-gray-600'>
                                        4.9 (128 reviews)
                                    </span>
                                </div> */}
                                <div className='flex items-center justify-between'>
                                    <span className='text-2xl font-bold text-gray-800'>
                                        $9
                                    </span>
                                    <button className='rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white shadow-md transition duration-300 ease-in-out hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75'>
                                        Подробнее
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}
export default ContentCard
