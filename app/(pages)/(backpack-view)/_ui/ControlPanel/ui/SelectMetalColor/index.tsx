import type { FC } from 'react'
import ConstructorBox from '@shared/ui/ConstructorBox'
import type { SelectColorType } from '@shared/ui/SelectColors'
import SelectColors from '@shared/ui/SelectColors'
import type { HardwareType } from '@pages/(backpack-view)/_state/useConfiguratorStore'
import useConfiguratorStore from '@pages/(backpack-view)/_state/useConfiguratorStore'
import BLACKSILVER from './assets//black.png'
import GOLD from './assets/gold.png'
import SILVER from './assets/silver.png'

const colors: Array<SelectColorType<HardwareType>> = [
    {
        preview: SILVER,
        value: 'SILVER',
        title: 'Silver'
    },
    {
        preview: GOLD,
        value: 'GOLD',
        title: 'Gold'
    },
    {
        preview: BLACKSILVER,
        value: 'BLACK',
        title: 'Black'
    }
] as const

const SelectMetalColor: FC = () => {
    const hardware = useConfiguratorStore((state) => state.hardware)
    const setHardware = useConfiguratorStore((state) => state.setHardware)

    return (
        <ConstructorBox title='METAL COLOR'>
            <SelectColors
                activeValue={hardware}
                setActiveValue={setHardware}
                colors={colors}
            />
        </ConstructorBox>
    )
}

export default SelectMetalColor
