'use client'
import { QRCodeCanvas } from 'qrcode.react'
import type { FC } from 'react'
import { Dialog, DialogContent, DialogTitle } from '@shared/ui/Dialog'
import LineHorizontal from '@shared/ui/LineHorizontal'
import useArParams from '../../hooks/useArParams'

interface Props {
    isOpen: boolean
    close: () => void
}

const ArQrCodeModal: FC<Props> = ({ isOpen, close }) => {
    const arParams = useArParams()

    return (
        <Dialog open={isOpen} onOpenChange={close}>
            <DialogContent className='text-primary'>
                <div className='flex flex-col gap-2'>
                    <DialogTitle className='text-center'>
                        Scan the QR code with your phone. Within 1-3 seconds the
                        AR function opens on your phone.
                    </DialogTitle>
                    <LineHorizontal className='bg-primary' />
                </div>
                <div
                    className={`
                      mx-auto flex size-[190px] shrink-0 items-center
                      justify-center rounded-[30px] border border-primary
                    `}
                >
                    <QRCodeCanvas
                        fgColor='#4169E1'
                        value={`${globalThis?.location?.origin}/ar?${arParams}`}
                        size={130}
                    />
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default ArQrCodeModal
