'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import useTouch from '@shared/lib/hooks/useTouch'
import { Button } from '@shared/ui/Button'
import ArQrCodeModal from './ui/ArQrCodeModal'
import ViewInArIcon from './ui/ViewInArIcon'

const ArButton = () => {
    const isTouch = useTouch()
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()

    return (
        <div>
            <Button
                onClick={() => (isTouch ? router.push('/ar') : setIsOpen(true))}
            >
                <ViewInArIcon />
                See In Real Life
            </Button>
            <ArQrCodeModal isOpen={isOpen} close={() => setIsOpen(false)} />
        </div>
    )
}

export default ArButton
