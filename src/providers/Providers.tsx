'use client'
import React from 'react'
import { NavigationProvider } from './NavigationProvider'
import { ParallaxProvider } from 'react-scroll-parallax'

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ParallaxProvider>
            <NavigationProvider>{children}</NavigationProvider>
        </ParallaxProvider>
    )
}

export default Providers
