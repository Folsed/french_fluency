'use client'
import Link from 'next/link'
import { headerTabs } from './_tabs'
import { usePathname } from 'next/navigation'

const Links = () => {
    const pathname = usePathname()

    return (
        <div className='__menu hidden text-font lg:block'>
            <div className='hidden lg:flex lg:justify-center lg:gap-4 lg:text-xl'>
                {headerTabs.map((item, _) => (
                    <Link
                        key={item.name}
                        href={item.link}
                        className={`relative p-2 duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-white after:transition-[width_.2s_ease] hover:text-font-hover hover:after:w-full ${pathname === item.link ? 'text-font-hover after:w-full' : 'after:w-0'}`}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default Links
