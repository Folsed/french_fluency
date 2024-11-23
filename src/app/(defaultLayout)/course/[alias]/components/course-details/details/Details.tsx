import { CourseDocument } from '@/models/Course'
import { SiOpslevel } from 'react-icons/si'
import { MdOutlineFeedback } from 'react-icons/md'
import { MdOutlineContactSupport } from 'react-icons/md'
import { TbLockAccess } from 'react-icons/tb'
import { MdOutlineEuro } from 'react-icons/md'
import { MdLanguage } from 'react-icons/md'
import { IoPricetagsOutline } from 'react-icons/io5'

const Details = ({ data }: { data: CourseDocument }) => {
    const formatText = (text: string) => {
        const [before, after] = text.split('?')
        return (
            <>
                <span className='text-font-secondary'>{before}?</span>
                {after && after}
            </>
        )
    }

    return (
        <div className='flex max-w-3xl flex-col gap-8 text-font lg:gap-16'>
            <div className='items-top flex gap-2 text-2xl'>
                <span className='text-font-secondary'>
                    <SiOpslevel size={30} />
                </span>
                <h3>{formatText(data.for_level)}</h3>
            </div>
            <div className='items-top flex gap-2 text-2xl'>
                <span className='text-font-secondary'>
                    <MdOutlineFeedback size={32} />
                </span>
                <h3>{formatText(data.feedback)}</h3>
            </div>
            <div className='items-top flex gap-2 text-2xl'>
                <span className='text-font-secondary'>
                    <MdOutlineContactSupport size={32} />
                </span>
                <h3>{formatText(data.video_support)}</h3>
            </div>
            <div className='items-top flex gap-2 text-2xl'>
                <span className='text-font-secondary'>
                    <TbLockAccess size={36} />
                </span>

                <h3>{formatText(data.access_time)}</h3>
            </div>
            <div className='flex items-center gap-2 text-2xl'>
                <h3 className='flex items-center gap-2 text-font-secondary'>
                    <MdLanguage size={36} />
                    Язык лекции:{' '}
                    <span className='font-bold text-font-hover'>
                        {data.language}
                    </span>
                </h3>
            </div>
            <div className='flex items-center gap-2 text-2xl'>
                <h3 className='flex items-center gap-2 text-font-secondary'>
                    <IoPricetagsOutline size={36} />
                    Цена:{' '}
                    <span className='flex items-center font-bold text-font-hover'>
                        {data.price}
                        <MdOutlineEuro />
                    </span>{' '}
                </h3>
            </div>
        </div>
    )
}
export default Details
