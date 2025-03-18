'use client'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import BackpackPrimitive from '@features/BackpackPrimitive'
import useConfiguratorStore from '@pages/(backpack-view)/_state/useConfiguratorStore'

const BackpackView = () => {
    const color = useConfiguratorStore((state) => state.color)
    const hardware = useConfiguratorStore((state) => state.hardware)
    const material = useConfiguratorStore((state) => state.material)

    return (
        <div className='mx-auto h-[365px] w-[300px]'>
            <Canvas camera={{ position: [0, 0, 1], fov: 45 }}>
                <directionalLight position={[5, 5, 5]} intensity={2.5} />
                <ambientLight intensity={1} />
                <BackpackPrimitive
                    color={color}
                    hardware={hardware}
                    material={material}
                />
                <OrbitControls enableZoom={false} />
            </Canvas>
        </div>
    )
}

export default BackpackView
