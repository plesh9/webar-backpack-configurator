import type { ComponentProps, FC } from 'react'
import { cn } from '@shared/lib/utils'

const LineHorizontal: FC<ComponentProps<'div'>> = ({ className, ...rest }) => {
    return (
        <div
            className={cn('max-h-px min-h-px w-full bg-black', className)}
            {...rest}
        />
    )
}

export default LineHorizontal
