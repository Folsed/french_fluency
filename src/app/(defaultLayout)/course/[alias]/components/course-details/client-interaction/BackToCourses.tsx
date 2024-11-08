'use client'
import { useRouter } from 'next/navigation'
import { FaArrowLeftLong } from 'react-icons/fa6'

const BackToCourses = () => {
    const router = useRouter()

    const handleClick = () => {
        router.back()
    }
    return (
        <button
            onClick={handleClick}
            type='button'
            className='relative mb-2 me-2 flex items-center justify-center gap-2 px-5 py-2.5 text-center text-base font-medium text-font duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-[width_.2s_ease] hover:text-font-hover hover:after:w-full'
        >
            <FaArrowLeftLong />К другим курсам
        </button>
    )
}
export default BackToCourses
