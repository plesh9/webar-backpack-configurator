import type { ReactNode } from 'react'
import { cn } from '@shared/lib/utils'

export interface RadioType<TValue extends string> {
    title: ReactNode
    value: TValue
}

interface Props<TValue extends string> {
    activeValue: TValue
    setActiveValue: (value: TValue) => void
    list: Array<RadioType<TValue>>
}

const RadioButtons = <TValue extends string>({
    activeValue,
    setActiveValue,
    list
}: Props<TValue>) => {
    return (
        <div className='flex gap-3'>
            {list.map((item) => {
                const isActive = activeValue === item.value

                return (
                    <button
                        onClick={() => setActiveValue(item.value)}
                        className={cn(
                            `
                              flex cursor-pointer flex-col items-center gap-2
                              rounded-[20px] border border-black px-4 py-3
                              text-[12px] font-medium leading-[100%] transition
                              focus-visible:outline-none focus-visible:ring-1
                              focus-visible:ring-ring
                            `,
                            isActive
                                ? 'border-primary text-primary'
                                : 'hover:opacity-80'
                        )}
                        disabled={isActive}
                        type='button'
                        key={item.value}
                    >
                        {item.title}
                    </button>
                )
            })}
        </div>
    )
}

export default RadioButtons
