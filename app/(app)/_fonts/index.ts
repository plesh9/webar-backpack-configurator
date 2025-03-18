import { Inter } from 'next/font/google'

const interSans = Inter({
    variable: '--font-inter-sans',
    subsets: ['latin']
})

export const fontVariables = [interSans.variable]
