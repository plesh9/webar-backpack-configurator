import { useGLTF } from '@react-three/drei'
import type { FC } from 'react'
import useBackpackColor from './lib/hooks/useBackpackColor'
import useBackpackMaterial from './lib/hooks/useBackpackMaterial'

const BackpackPrimitive: FC = () => {
    const { scene } = useGLTF('/models/backpack/backpack.glb')

    useBackpackMaterial(scene)
    useBackpackColor(scene)

    return (
        <primitive
            object={scene}
            position={[0, -0.18, 0]}
            rotation={[0, -0.7, 0]}
        />
    )
}

export default BackpackPrimitive
