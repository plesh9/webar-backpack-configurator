import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import type { ReactNode } from 'react'
import { cn } from '@shared/lib/utils'

export interface SelectColorType<TValue extends string> {
    title: ReactNode
    value: TValue
    preview: string | StaticImageData
}

interface Props<TValue extends string> {
    activeValue: TValue
    setActiveValue: (value: TValue) => void
    colors: Array<SelectColorType<TValue>>
}

const SelectColors = <TValue extends string>({
    activeValue,
    setActiveValue,
    colors
}: Props<TValue>) => {
    return (
        <div className='flex gap-5'>
            {colors.map((color) => {
                const isActive = activeValue === color.value

                return (
                    <button
                        onClick={() => setActiveValue(color.value)}
                        className={`
                          group flex cursor-pointer flex-col items-center gap-2
                          focus-visible:outline-none focus-visible:ring-1
                          focus-visible:ring-ring
                        `}
                        disabled={isActive}
                        type='button'
                        key={color.value}
                    >
                        <div
                            className={cn(
                                `
                                  flex size-12 shrink-0 items-center
                                  justify-center rounded-full border
                                  border-transparent transition
                                `,
                                isActive
                                    ? 'border-primary'
                                    : 'group-hover:border-black'
                            )}
                        >
                            {typeof color.preview === 'string' ? (
                                <div
                                    style={{ background: color.preview }}
                                    className={'size-10 rounded-full'}
                                />
                            ) : (
                                <Image
                                    width={40}
                                    height={40}
                                    src={color.preview}
                                    alt={color.value}
                                    className={`
                                      rounded-full object-cover object-center
                                    `}
                                />
                            )}
                        </div>
                        <h4
                            className={cn(
                                'text-[12px] font-medium leading-[100%]',
                                isActive && 'text-primary'
                            )}
                        >
                            {color.title}
                        </h4>
                    </button>
                )
            })}
        </div>
    )
}

export default SelectColors
