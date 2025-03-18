import { useLayoutEffect } from 'react'
import * as THREE from 'three'
import type {
    ColorType,
    HardwareType
} from '@pages/(backpack-view)/_state/useConfiguratorStore'
import { getBodyColor, getHardwareColor } from '../../scene-utils'

const useBackpackColor = (
    scene: THREE.Group<THREE.Object3DEventMap>,
    color: ColorType,
    hardware: HardwareType
) => {
    useLayoutEffect(() => {
        scene.traverse((obj) => {
            const isValidObj =
                obj instanceof THREE.Mesh &&
                obj.material instanceof THREE.MeshStandardMaterial

            if (!isValidObj) return

            if (obj.name === 'Mesh_1') {
                obj.material.color = new THREE.Color(getHardwareColor(hardware))

                obj.material.metalness = 1
                obj.material.roughness = 0.3

                return
            } else {
                obj.material.color = new THREE.Color(getBodyColor(color))
            }

            obj.material.needsUpdate = true
        })
    }, [scene, color, hardware])
}

export default useBackpackColor
