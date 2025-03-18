'use client'
import Link from 'next/link'
import type { FC } from 'react'
import { Button } from '@shared/ui/Button'
import NotFound from '@widgets/NotFound'

export const page: FC = () => {
    return (
        <NotFound title='404' description='Page not found'>
            <Button asChild>
                <Link href='/'>Go Home</Link>
            </Button>
        </NotFound>
    )
}

export default page
