import type { FC, ReactNode } from 'react'

interface Props {
    title?: ReactNode
    description?: ReactNode
    children?: ReactNode
}

const NotFound: FC<Props> = ({ title, description, children }) => {
    return (
        <div
            className={`
              flex grow flex-col items-center justify-center gap-4 text-center
            `}
        >
            <div className='flex flex-col gap-2'>
                <h1 className='text-4xl font-bold'>{title ?? '404'}</h1>
                <p className='text-lg'>{description ?? 'Not found'}</p>
            </div>
            {children}
        </div>
    )
}

export default NotFound
