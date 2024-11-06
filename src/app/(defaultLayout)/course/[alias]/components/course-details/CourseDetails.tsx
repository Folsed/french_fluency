import { CourseDocument } from '@/models/Course'
import { MdOutlineEuro } from 'react-icons/md'
import UsableButtons from './client-interaction/UsableButtons'

const CourseDetails = ({ data }: { data: CourseDocument }) => {
    const paragraphs = data?.synopsis?.split(/\n\n|\n-/)

    return (
        <div className='mb-24 flex flex-col gap-8 px-4'>
            <div className='max-w-2xl space-y-4 px-2 md:mx-auto'>
                <h2 className='text-start text-4xl font-bold md:px-0'>
                    {data.title}
                </h2>
            </div>
            <section className='relative flex flex-col justify-center overflow-hidden'>
                <div className='mx-auto w-full max-w-7xl md:px-4'>
                    <div className='flex flex-col justify-center'>
                        <div className='mx-auto w-full max-w-3xl'>
                            <div className='relative space-y-8 before:absolute before:inset-0 before:ml-12 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent md:before:mx-auto md:before:translate-x-0'>
                                {paragraphs?.map((item, index) => (
                                    <div
                                        key={index}
                                        className='relative flex items-center justify-center md:justify-normal md:odd:flex-row-reverse'
                                    >
                                        <div className='w-[calc(100%-1rem)] rounded border border-slate-200 bg-white p-4 shadow md:w-[calc(50%-2.5rem)]'>
                                            <div className=''>{item}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='flex flex-col gap-4 px-2 md:mx-auto'>
                <div className='text-2xl'>
                    <h3>
                        Язык лекции:{' '}
                        <span className='font-bold'>{data.language}</span>
                    </h3>
                </div>
                <div className='flex gap-2 text-2xl'>
                    <h3>Цена:</h3>
                    <span className='flex items-center font-bold'>
                        {data.price}
                        <MdOutlineEuro />
                    </span>
                </div>
                <UsableButtons amount={data.price} />
            </div>
        </div>
    )
}
export default CourseDetails
