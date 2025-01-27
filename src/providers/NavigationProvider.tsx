'use client'
import { usePathname } from 'next/navigation'
import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react'

interface NavigationContextType {
    modalIs: string
    setModalIs: (state: string) => void
}

const NavigationContext = createContext<NavigationContextType>({
    modalIs: '',
    setModalIs: () => { },
})

interface NavigationProviderProps {
    children: ReactNode
}

export const NavigationProvider: React.FC<NavigationProviderProps> = ({
    children,
}) => {
    const [modalIs, _setModalIs] = useState<string>('')
    const pathname = usePathname()

    const setModalIs = (state: string) => {
        if (state === modalIs) {
            _setModalIs('')
        } else {
            _setModalIs(state)
        }
    }

    useEffect(() => {
        if (modalIs) {
            document.body.classList.add('scroll-blocked')
        } else {
            document.body.classList.remove('scroll-blocked')
        }
    }, [modalIs])

    useEffect(() => {
        _setModalIs('')
    }, [pathname])

    return (
        <NavigationContext.Provider value={{ modalIs, setModalIs }}>
            {children}
        </NavigationContext.Provider>
    )
}

export const WebNavigation = () => useContext(NavigationContext)
