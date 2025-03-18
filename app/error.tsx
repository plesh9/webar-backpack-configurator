'use client'
import type { FC } from 'react'
import { Button } from '@shared/ui/Button'
import ErrorWidget from '@widgets/ErrorWidget'

interface Props {
    error: Error
    reset: () => void
}

const error: FC<Props> = ({ error, reset }) => {
    return (
        <ErrorWidget description={error.message}>
            <Button onClick={reset}>Reset</Button>
        </ErrorWidget>
    )
}

export default error
