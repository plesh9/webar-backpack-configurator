import type { ComponentProps, FC } from 'react'
import { cn } from '@shared/lib/utils'

const Container: FC<ComponentProps<'div'>> = ({ className, ...rest }) => {
    return (
        <div
            className={cn(
                `
                  mx-auto flex w-full max-w-[860px] grow flex-col gap-[126px]
                  px-6
                `,
                className
            )}
            {...rest}
        />
    )
}

export default Container
