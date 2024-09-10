import Image from 'next/image'
import Link from 'next/link'

const ContentCard = () => {
    return (
        <div>
            <div className='py-10 text-center'>
                <h1 className='text-3xl font-bold lg:text-4xl xl:text-5xl'>
                    Мои курсы
                </h1>
            </div>
            <div className='relative grid grid-flow-row grid-cols-1 md:grid-cols-2'>
                {Array(6)
                    .fill(null)
                    .map((item, key) => (
                        <div
                            key={key}
                            className='flex items-center justify-center'
                        >
                            <div className='relative w-full transition duration-300 flex justify-center items-center px-12 py-48 lg:py-72 xl:py-96 bg-black'>
                                <Image
                                    className='z-[0] opacity-20'
                                    src='/123.jpg'
                                    layout='fill'
                                    objectFit='cover'
                                    priority
                                    alt='Nature scene'
                                />
                                <div className='text-center z-[1] grid gap-6'>
                                    <h2 className='text-2xl font-bold text-font-hover truncate'>
                                        ЭКСКЛЮЗИВНЫЙ мастеркласс от
                                        сертифицированного экзаменатора
                                        DELF-DALF
                                    </h2>
                                    <p className='text-font-hover'>
                                        Лекция в записи, где экзаменатор Надежда
                                        Опашнюк раскрывает ВСЮ ПОДНАГОТНУЮ
                                        языкового экзамена DELF и DALF.
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default ContentCard

{
    /* <div className='p-6'>
                                    <h2 className='mb-2 text-2xl font-bold text-gray-800'>
                                        ЭКСКЛЮЗИВНЫЙ мастеркласс от
                                        сертифицированного экзаменатора
                                        DELF-DALF, Надежды Опашнюк
                                    </h2>
                                    <p className='mb-4 text-gray-600'>
                                        Лекция в записи, где экзаменатор Надежда
                                        Опашнюк раскрывает ВСЮ ПОДНАГОТНУЮ
                                        языкового экзамена DELF и DALF.
                                    </p>
                                    <div className='flex items-center justify-between'>
                                        <span className='text-2xl font-bold text-gray-800'>
                                            $9
                                        </span>
                                        <button className='rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white shadow-md transition duration-300 ease-in-out hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75'>
                                            Подробнее
                                        </button>
                                    </div>
                                </div> */
}
