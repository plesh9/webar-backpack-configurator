import { useGLTF } from '@react-three/drei'
import type { FC } from 'react'
import type {
    ColorType,
    HardwareType,
    MaterialType
} from '@pages/(backpack-view)/_state/useConfiguratorStore'
import useBackpackColor from './lib/hooks/useBackpackColor'
import useBackpackMaterial from './lib/hooks/useBackpackMaterial'

interface Props {
    color: ColorType
    hardware: HardwareType
    material: MaterialType
}

const BackpackPrimitive: FC<Props> = ({ color, hardware, material }) => {
    const { scene } = useGLTF('/models/backpack/backpack.glb')

    useBackpackMaterial(scene, material)
    useBackpackColor(scene, color, hardware)

    return (
        <primitive
            object={scene}
            position={[0, -0.18, 0]}
            rotation={[0, -0.7, 0]}
        />
    )
}

export default BackpackPrimitive
