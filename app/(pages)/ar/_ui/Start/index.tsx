import type { FC } from 'react'
import type * as THREE from 'three'
import { Button } from '@shared/ui/Button'

interface Props {
    gl: THREE.WebGLRenderer | null
}

const StartArButton: FC<Props> = ({ gl }) => {
    const startAR = async () => {
        if (!gl) {
            return
        }

        if (!navigator.xr) {
            return alert('WebXR не підтримується 😢')
        }

        const supported = await navigator.xr.isSessionSupported('immersive-ar')

        if (!supported) {
            return alert('AR сесії не підтримуються 😢')
        }

        const session = await navigator.xr.requestSession('immersive-ar', {
            requiredFeatures: ['hit-test'],
            optionalFeatures: ['local-floor', 'bounded-floor']
        })

        gl.xr.setSession(session)
    }

    return (
        <Button className='w-fit shrink-0 self-center' onClick={startAR}>
            See In Real Life
        </Button>
    )
}

export default StartArButton
