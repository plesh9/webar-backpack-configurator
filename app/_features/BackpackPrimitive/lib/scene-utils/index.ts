import type {
    ColorType,
    HardwareType,
    MaterialType
} from '@pages/(backpack-view)/_state/useConfiguratorStore'

export const getMaterialTextures = (material: MaterialType) => ({
    map: `/models/backpack/${material.toLowerCase()}_baseColor.jpg`,
    normalMap: `/models/backpack/${material.toLowerCase()}_normal.jpg`,
    roughnessMap: `/models/backpack/${material.toLowerCase()}_occlusionRoughnessMetallic.jpg`
})

export const getBodyColor = (color: ColorType): string => {
    switch (color) {
        case 'BLACK': {
            return '#1a1a1a'
        }
        case 'BROWN': {
            return '#8B4512'
        }
        case 'NAVY': {
            return '#104D97'
        }
    }
}

export const getHardwareColor = (hardware: HardwareType): string => {
    switch (hardware) {
        case 'BLACK': {
            return '#252525'
        }
        case 'SILVER': {
            return '#e6e6e6'
        }
        case 'GOLD': {
            return '#f4cf33'
        }
    }
}
