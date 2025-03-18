'use client'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { XR, createXRStore } from '@react-three/xr'
import { useSearchParams } from 'next/navigation'
import { Suspense, useState } from 'react'
import type * as THREE from 'three'
import BackpackPrimitive from '@features/BackpackPrimitive'
import type {
    ColorType,
    HardwareType,
    MaterialType
} from '@pages/(backpack-view)/_state/useConfiguratorStore'
import StartArButton from './_ui/Start'

const Page = () => {
    const [gl, setGl] = useState<THREE.WebGLRenderer | null>(null)
    const params = useSearchParams()
    const color = params.get('color') as ColorType
    const hardware = params.get('hardware') as HardwareType
    const material = params.get('material') as MaterialType
    const xrStore = createXRStore()

    return (
        <div className='flex h-dvh grow flex-col overflow-auto p-8'>
            <div className='flex grow flex-col'>
                <Suspense>
                    <Canvas
                        camera={{ position: [0, 0, 1], fov: 75 }}
                        onCreated={({ gl }) => setGl(gl)}
                    >
                        <XR store={xrStore}>
                            <ambientLight intensity={1} />
                            <directionalLight
                                position={[5, 5, 5]}
                                intensity={2.5}
                            />
                            <BackpackPrimitive
                                color={color}
                                hardware={hardware}
                                material={material}
                            />
                            <OrbitControls enableZoom={false} />
                        </XR>
                    </Canvas>
                </Suspense>
            </div>
            <StartArButton gl={gl} />
        </div>
    )
}

export default Page
