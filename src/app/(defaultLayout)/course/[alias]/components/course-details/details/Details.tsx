import { CourseDocument } from '@/models/Course'
import { SiOpslevel } from 'react-icons/si'
import { MdOutlineFeedback } from 'react-icons/md'
import { MdOutlineContactSupport } from 'react-icons/md'
import { TbLockAccess } from 'react-icons/tb'
import { MdOutlineEuro } from 'react-icons/md'

const Details = ({ data }: { data: CourseDocument }) => {
    return (
        <div className='flex max-w-3xl flex-col gap-8 lg:gap-16 text-font'>
            <div className='items-top flex gap-2 text-2xl '>
                <span className='text-slate-400'>
                    <SiOpslevel size={36} />
                </span>
                <h3>{data.for_level}</h3>
            </div>
            <div className='items-top flex gap-2 text-2xl'>
                <span className='text-slate-400'>
                    <MdOutlineFeedback size={36} />
                </span>
                <h3>{data.feedback}</h3>
            </div>
            <div className='items-top flex gap-2 text-2xl'>
                <span className='text-slate-400'>
                    <MdOutlineContactSupport size={36} />
                </span>
                <h3>{data.video_support}</h3>
            </div>
            <div className='items-top flex gap-2 text-2xl'>
                <span className='text-slate-400'>
                    <TbLockAccess size={36} />
                </span>

                <h3>{data.access_time}</h3>
            </div>
            <div className='flex items-center gap-2 text-2xl'>
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
        </div>
    )
}
export default Details
