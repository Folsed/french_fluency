import Image from 'next/image'
import { paragraphs } from './_paragraphs'

const AboutMe = () => {
    return (
        <section className='w-full overflow-hidden'>
            <div className='mx-auto w-full'>
                {/* User Cover IMAGE */}
                <div className='relative h-[12.5rem] w-full sm:h-[16rem] md:h-[19rem] lg:h-[22rem] xl:h-[25rem]'>
                    <Image
                        src='/about-cover.jpg'
                        alt='User Cover'
                        className='w-full object-cover'
                        fill
                        priority
                    />
                </div>
                {/* User Profile Image */}
                <div className='mx-auto flex w-full justify-center'>
                    <Image
                        src='/about2.jpg'
                        alt='User Profile'
                        width={500}
                        height={500}
                        priority
                        className='relative bottom-[5rem] h-[10rem] w-[10rem] rounded-full object-cover shadow-xl outline outline-2 outline-offset-2 outline-yellow-500 md:bottom-[6rem] md:h-[12rem] md:w-[12rem] lg:bottom-[8rem] lg:h-[16rem] lg:w-[16rem] xl:bottom-[7rem] xl:h-[16rem] xl:w-[16rem]'
                    />
                </div>

                <section className='relative flex flex-col justify-center overflow-hidden'>
                    <div className='mx-auto w-full max-w-7xl px-4 pb-48 md:px-6'>
                        <div className='flex flex-col justify-center'>
                            <div className='mx-auto w-full max-w-3xl'>
                                <div className='relative space-y-8 before:absolute before:inset-0 before:ml-12 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent md:before:mx-auto md:before:translate-x-0'>
                                    {paragraphs.map((item, _) => (
                                        <div
                                            key={item.id}
                                            className='relative flex items-center justify-center md:justify-normal md:odd:flex-row-reverse'
                                        >
                                            <div className='w-[calc(100%-4rem)] rounded border border-slate-200 bg-white p-4 shadow md:w-[calc(50%-2.5rem)]'>
                                                <div className=''>
                                                    {item.text}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}
export default AboutMe

{
    /* <div className='relative -top-[2.2rem] mx-auto flex w-[92%] flex-col items-center justify-center gap-4 sm:-top-[3rem] sm:w-[96%] md:-top-[4rem] md:w-[84%] lg:-top-[6rem] lg:w-[80%] xl:-top-[6rem] xl:w-[50%]'>
                    <h1 className='text-center font-serif text-4xl text-gray-800'>
                        Пламенный Bonjour!
                    </h1>
                    <ul className='text-md mt-6 flex w-full flex-col gap-6 text-pretty text-justify text-lg'>
                        <li>
                            Я — Катя, и преподаю французский язык даже
                            французам, сама до сих пор в шоке! 😨
                        </li>
                        <li>
                            100% моих студентов успешно сдают экзамены DELF и
                            TCF.
                        </li>
                        <li>
                            У меня нет «звезды во лбу» и «собственной методики»,
                            потому что существуют опытные методисты, которые
                            разрабатывают замечательные книги, которые я и
                            использую.
                        </li>
                        <li>
                            Мои уроки проходят на интерактивной
                            онлайн-платформе, где у каждого ученика есть
                            собственный кабинет с его достижениями, словарём и
                            сохранёнными уроками.
                        </li>
                        <li>
                            В преподавании я использую новейшие методики FLE,
                            видео блогеров для изучения настоящей речи, подкасты
                            и мини-выпуски телепрограмм.
                        </li>
                        <li>
                            Учёба со мной — это не только полезно, но и приятно.
                            Мы становимся друзьями и даже ездим друг к другу в
                            гости. Теперь в каждом уголочке Франции у меня есть
                            друзья.
                        </li>
                        <li>
                            Если хочешь кайфовать от изучения французского,
                            n’hésite pas, вэлкам ту Сан-Тропе, как говорится! ❤️
                        </li>
                    </ul>
                </div> */
}
