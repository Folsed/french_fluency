import Image from 'next/image'
import Link from 'next/link'

const ContentCard = () => {
    return (
        <div>
            <div className='py-10 text-center'>
                <h1 className='font-bold text-3xl lg:text-4xl xl:text-5xl'>Мои курсы</h1>
            </div>
            <div className='relative mx-auto grid grid-flow-row grid-cols-1 items-end md:grid-cols-2'>
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
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}
export default ContentCard
