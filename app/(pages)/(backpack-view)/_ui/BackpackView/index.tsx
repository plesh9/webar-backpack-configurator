'use client'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import BackpackPrimitive from '@features/BackpackPrimitive'
import BackpackAmbientLight from './ui/BackpackAmbientLight'

const BackpackView = () => {
    return (
        <div className='mx-auto h-[365px] w-[300px]'>
            <Canvas camera={{ position: [0, 0, 1], fov: 45 }}>
                <directionalLight position={[5, 5, 5]} intensity={2.5} />
                <BackpackAmbientLight />
                <BackpackPrimitive />
                <OrbitControls enableZoom={false} />
            </Canvas>
        </div>
    )
}

export default BackpackView
