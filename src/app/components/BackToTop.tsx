'use client'
import { useEffect, useRef } from 'react'

const BackToTop = () => {
    // Use useRef to get a reference to the button element
    const buttonRef = useRef<HTMLButtonElement>(null)

    // Scroll function to show/hide the button based on scroll position and scroll-blocked class
    const scrollFunction = () => {
        const body = document.body

        // Check if the body has the 'scroll-blocked' class
        if (body.classList.contains('scroll-blocked')) {
            buttonRef.current?.classList.add('hidden')
        } else {
            if (
                body.scrollTop > 20 ||
                document.documentElement.scrollTop > 20
            ) {
                buttonRef.current?.classList.remove('hidden')
            } else {
                buttonRef.current?.classList.add('hidden')
            }
        }
    }

    // Function to scroll back to the top
    const backToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        // Attach the scroll event listener
        window.addEventListener('scroll', scrollFunction)
        window.addEventListener('click', scrollFunction)

        // Attach the click event listener to the button
        const button = buttonRef.current
        button?.addEventListener('click', backToTop)

        // Cleanup event listeners on component unmount
        return () => {
            window.removeEventListener('scroll', scrollFunction)
            button?.removeEventListener('click', backToTop)
        }
    }, [])

    return (
        <button
            ref={buttonRef}
            type='button'
            className='!fixed bottom-5 end-5 z-50 hidden rounded-full bg-[#FFD700] p-3 text-xs font-medium uppercase leading-tight text-black shadow-custom transition duration-150 ease-in-out hover:bg-red-700 focus:bg-red-700 focus:outline-none focus:ring-0 active:bg-red-800'
        >
            <span className='[&>svg]:w-4'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='3'
                    stroke='currentColor'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18'
                    />
                </svg>
            </span>
        </button>
    )
}

export default BackToTop
