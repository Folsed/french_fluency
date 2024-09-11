import { IoLogoInstagram } from 'react-icons/io'

const Footer = () => {
    return (
        <section className='footer'>
            <div className='mt-48 flex flex-col items-center bg-gradient-to-t from-purple-200  text-center'>
                <div className='px-6 pt-6'>
                    <div className='mb-6 flex justify-center space-x-2'>
                        <a
                            href='#!'
                            type='button'
                            className='shadow-dark-3 hover:shadow-dark-1 focus:shadow-dark-1 active:shadow-1 rounded-full bg-[#ac2bac] p-2 uppercase leading-normal text-white shadow-black/30 transition duration-150 ease-in-out focus:outline-none focus:ring-0 hover:md:scale-110 dark:text-white'
                            data-twe-ripple-init
                            data-twe-ripple-color='light'
                        >
                            <span className='mx-auto [&>svg]:h-6 [&>svg]:w-6'>
                                <IoLogoInstagram />
                            </span>
                        </a>
                    </div>
                </div>

                <div className='w-full bg-black/5 p-4 text-center'>
                    © 2024 Copyright:
                    <span> KaterynaTeacher</span>
                </div>
            </div>
        </section>
    )
}
export default Footer
