import { create } from 'zustand'

export type MaterialType = 'DENIM' | 'FABRIC' | 'LEATHER'
export type ColorType = 'BROWN' | 'BLACK' | 'NAVY'
export type HardwareType = 'SILVER' | 'BLACK' | 'GOLD'

interface ConfiguratorState {
    material: MaterialType
    color: ColorType
    hardware: HardwareType
    setMaterial: (m: MaterialType) => void
    setColor: (c: ColorType) => void
    setHardware: (h: HardwareType) => void
}
const useConfiguratorStore = create<ConfiguratorState>((set) => ({
    material: 'LEATHER',
    color: 'BROWN',
    hardware: 'SILVER',
    setMaterial: (material) => set({ material }),
    setColor: (color) => set({ color }),
    setHardware: (hardware) => set({ hardware })
}))

export default useConfiguratorStore
