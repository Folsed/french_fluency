import Image from 'next/image'

const AboutMe = () => {
    return (
        <div className='relative mt-12 flex flex-col mb-12'>
            <div className='mx-auto max-w-7xl order-2'>
                <div className='relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32'>
                    <svg
                        className='absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block'
                        fill='currentColor'
                        viewBox='0 0 100 100'
                        preserveAspectRatio='none'
                        aria-hidden='true'
                    >
                        <polygon points='50,0 100,0 50,100 0,100'></polygon>
                    </svg>
                    <div className='mx-auto mt-10 max-w-7xl px-8 text-xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
                        <div className='sm:text-center lg:text-left'>
                            <h2 className='my-6 text-3xl font-extrabold text-gray-900 sm:text-3xl md:text-4xl'>
                                Пламенный bonjour
                            </h2>

                            <ul className='flex flex-col gap-8 list-disc'>
                                <li>Я — Катя, и преподаю французский язык даже французам, сама до сих пор в шоке! 😨</li>
                                <li>100% моих студентов успешно сдают экзамены DELF и TCF.</li>
                                <li>У меня нет «звезды во лбу» и «собственной методики», потому что существуют опытные методисты, которые разрабатывают замечательные книги, которые я и использую.</li>
                                <li>Мои уроки проходят на интерактивной онлайн-платформе, где у каждого ученика есть собственный кабинет с его достижениями, словарём и сохранёнными уроками.</li>
                                <li>В преподавании я использую новейшие методики FLE, видео блогеров для изучения настоящей речи, подкасты и мини-выпуски телепрограмм.</li>
                                <li>Учёба со мной — это не только полезно, но и приятно. Мы становимся друзьями и даже ездим друг к другу в гости. Теперь в каждом уголочке Франции у меня есть друзья.</li>
                                <li>Если хочешь кайфовать от изучения французского, n’hésite pas, вэлкам ту Сан-Тропе, как говорится! ❤️</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative w-full lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 order-1'>
                <Image
                    className='object-center w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full'
                    src='/about2.jpg'
                    alt=''
                    width={1080}
                    height={1184}
                    priority
                />
            </div>
        </div>
    )
}
export default AboutMe
