import Link from 'next/link'
import { IoLogoInstagram } from 'react-icons/io'

const Footer = () => {
    return (
        <section className='_footer mt-12 border-t border-gray-900 bg-black md:mt-24 shadow-custom'>
            <div className='my-20 flex flex-col gap-4'>
                <div className='mx-auto text-center text-sm text-gray-300'>
                    <div className='flex justify-center space-x-2'>
                        <Link
                            href='https://www.instagram.com/kateryna_teacher'
                            className='shadow-dark-3 hover:shadow-dark-1 focus:shadow-dark-1 active:shadow-1 rounded-full bg-[#FFD700] p-2 uppercase leading-normal text-black shadow-black/30 transition duration-150 ease-in-out focus:outline-none focus:ring-0 hover:md:scale-110'
                            target='_blank'
                        >
                            <span className='mx-auto [&>svg]:h-6 [&>svg]:w-6'>
                                <IoLogoInstagram />
                            </span>
                        </Link>
                    </div>
                </div>
                <div className='mx-auto text-center text-sm text-gray-300'>
                    2024 ©<span className='font-bold text-font-hover'> KaterynaTeacher</span>
                </div>
            </div>
        </section>
    )
}
export default Footer
