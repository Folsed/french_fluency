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
            <div className='relative grid grid-flow-row grid-cols-1 auto-rows-[minmax(300px,auto)] md:grid-cols-2'>
                {Array(5)
                    .fill(null)
                    .map((item, key) => (
                        <div
                            key={key}
                            className='h-full aspect-square lg:aspect-[16/10]'
                        >
                            <button className='h-full relative w-full transition duration-300 flex justify-center items-center px-12 bg-[#000000c5] hover:bg-[#0000009b]'>
                                <Image
                                    className='z-[-1]'
                                    src='/123.jpg'
                                    layout='fill'
                                    objectFit='cover'
                                    priority
                                    alt='Nature scene'
                                />
                                <div className='text-center z-[1] grid gap-6 '>
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
                            </button>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default ContentCard
