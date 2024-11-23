import Link from 'next/link'
import { IoLogoInstagram } from 'react-icons/io'

const Footer = () => {
    return (
        <section className='_footer mt-12 border-t border-gray-900 bg-black shadow-custom md:mt-24'>
            <div className='my-20 flex flex-col gap-4'>
                <div className='flex items-center justify-center'>
                    <Link
                        href='https://www.instagram.com/kateryna_teacher'
                        target='_blank'
                        className='group h-[50px] overflow-hidden text-white shadow-[0_0px_40px_#ff7a00]'
                    >
                        {[0, 1].map((_, index) => (
                            <div
                                key={index}
                                className='flex h-[50px] w-[50px] items-center justify-center transition-transform duration-300 [background:linear-gradient(72.44deg,#ff7a00_11.92%,#ff0169_51.56%,#d300c5_85.69%)] group-hover:-translate-y-[50px]'
                            >
                                <IoLogoInstagram size={40} />
                            </div>
                        ))}
                    </Link>
                </div>
                <div className='mx-auto text-center text-sm text-gray-300'>
                    2024 ©
                    <span className='font-bold text-font-hover'>
                        {' '}
                        KaterynaTeacher
                    </span>
                </div>
            </div>
        </section>
    )
}
export default Footer
