import './(app)/_styles/globals.scss'
import type { FC, PropsWithChildren } from 'react'
import { cn } from '@shared/lib/utils'
import { fontVariables } from '@app/_fonts'

const layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <html lang='en' className={cn(...fontVariables)}>
            <body className='antialiased'>{children}</body>
        </html>
    )
}

export default layout
