import type { FC, ReactNode } from 'react'
import LineHorizontal from '../LineHorizontal'

interface Props {
    title: ReactNode
    children?: ReactNode
}

const ConstructorBox: FC<Props> = ({ title, children }) => {
    return (
        <div className='flex grow flex-col gap-3'>
            <div className='flex flex-col gap-2'>
                <h3 className='text-sm font-semibold'>{title}</h3>
                <LineHorizontal />
            </div>
            {children}
        </div>
    )
}

export default ConstructorBox
