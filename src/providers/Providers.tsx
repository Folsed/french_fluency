'use client'
import React from 'react'
import { NavigationProvider } from './NavigationProvider'
import { ParallaxProvider } from 'react-scroll-parallax'
import { SessionProvider } from 'next-auth/react'

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <SessionProvider>
            <ParallaxProvider>
                <NavigationProvider>{children}</NavigationProvider>
            </ParallaxProvider>
        </SessionProvider>
    )
}

export default Providers
