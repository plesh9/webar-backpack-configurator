import { useTexture } from '@react-three/drei'
import { useLayoutEffect } from 'react'
import * as THREE from 'three'
import type { MaterialType } from '@pages/(backpack-view)/_state/useConfiguratorStore'
import { getMaterialTextures } from '../../scene-utils'

const useBackpackMaterial = (
    scene: THREE.Group<THREE.Object3DEventMap>,
    material: MaterialType
) => {
    const textures = useTexture(getMaterialTextures(material))

    useLayoutEffect(() => {
        scene.traverse((obj) => {
            const isValidObj =
                obj instanceof THREE.Mesh &&
                obj.material instanceof THREE.MeshStandardMaterial

            if (!isValidObj) return
            obj.material = obj.material.clone()

            obj.material.map = textures.map
            obj.material.normalMap = textures.normalMap
            obj.material.roughnessMap = textures.roughnessMap

            obj.material.needsUpdate = true
        })
    }, [scene, textures])
}

export default useBackpackMaterial
