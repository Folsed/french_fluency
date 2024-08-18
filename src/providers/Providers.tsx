'use client'
import React from 'react'
import { NavigationProvider } from './NavigationProvider'

const Providers = ({ children }: { children: React.ReactNode }) => {
    return <NavigationProvider>{children}</NavigationProvider>
}

export default Providers
