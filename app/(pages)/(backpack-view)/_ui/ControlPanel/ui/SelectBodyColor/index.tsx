import type { FC } from 'react'
import ConstructorBox from '@shared/ui/ConstructorBox'
import type { SelectColorType } from '@shared/ui/SelectColors'
import SelectColors from '@shared/ui/SelectColors'
import type { ColorType } from '@pages/(backpack-view)/_state/useConfiguratorStore'
import useConfiguratorStore from '@pages/(backpack-view)/_state/useConfiguratorStore'

const colors: Array<SelectColorType<ColorType>> = [
    {
        preview: '#8B4512',
        value: 'BROWN',
        title: 'Brown'
    },
    {
        preview: '#1A1A1A',
        value: 'BLACK',
        title: 'Black'
    },
    {
        preview: '#104D97',
        value: 'NAVY',
        title: 'Blue'
    }
] as const

const SelectBodyColor: FC = () => {
    const color = useConfiguratorStore((state) => state.color)
    const setColor = useConfiguratorStore((state) => state.setColor)

    return (
        <ConstructorBox title='BODY COLOR'>
            <SelectColors
                activeValue={color}
                setActiveValue={setColor}
                colors={colors}
            />
        </ConstructorBox>
    )
}

export default SelectBodyColor
