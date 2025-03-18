'use client'
import type { FC } from 'react'
import Container from '@shared/ui/Container'
import ArButton from './_ui/ArButton'
import BackpackView from './_ui/BackpackView'
import ControlPanel from './_ui/ControlPanel'

const page: FC = () => {
    return (
        <div className='flex grow flex-col'>
            <Container className='items-center justify-center py-8'>
                <ArButton />
                <div
                    className={`
                      flex w-full flex-col items-center justify-center
                      gap-[68px]
                    `}
                >
                    <BackpackView />
                    <ControlPanel />
                </div>
            </Container>
        </div>
    )
}

export default page
