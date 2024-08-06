import Image from 'next/image'

export default function Home() {
    return (
        <main className='__content'>
            <div className='pointer-events-none absolute bottom-0 left-0 top-0 -z-10 aspect-[2/3] h-screen w-full min-w-full overflow-hidden lg:aspect-[16/9]'>
                <div className='h-full w-full'>
                    <picture>
                        <source
                            media='(max-width: 1024px)'
                            srcSet={'/welcome_mobile.webp'}
                        />
                        <Image
                            src={'/welcome_desktop.webp'}
                            width={1920}
                            height={1080}
                            className=''
                            alt='France'
                            priority
                        />
                    </picture>
                    {/* <div className='absolute inset-0 block aspect-[inherit] bg-gradient-to-b from-transparent to-white md:bg-hero-carousel'></div> */}
                </div>
            </div>
        </main>
    )
}
