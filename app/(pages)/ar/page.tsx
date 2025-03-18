'use client'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { createXRStore, XR } from '@react-three/xr'
import BackpackPrimitive from '@features/BackpackPrimitive'

const page = () => {
    const xrStore = createXRStore()

    return (
        <div className='flex h-screen grow flex-col overflow-auto p-8'>
            <Canvas camera={{ position: [0, 1, 1], fov: 45 }}>
                <XR store={xrStore}>
                    <ambientLight intensity={1} />
                    <directionalLight position={[5, 5, 5]} intensity={1.5} />
                    <BackpackPrimitive />
                    <OrbitControls enableZoom={false} />
                </XR>
            </Canvas>
        </div>
    )
}

export default page
