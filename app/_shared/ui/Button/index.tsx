import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import { cn } from '@shared/lib/utils'

const buttonVariants = cva(
    `
      inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md
      text-sm font-medium transition
      focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
      disabled:pointer-events-none disabled:opacity-50
      [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0
    `,
    {
        variants: {
            variant: {
                default: `
                  bg-primary text-primary-foreground shadow rounded-[30px]
                  hover:opacity-90
                `
            },
            size: {
                default: 'h-10 px-[14px] py-3'
            }
        },
        defaultVariants: {
            variant: 'default',
            size: 'default'
        }
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button'

        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)

Button.displayName = 'Button'

export { Button, buttonVariants }
