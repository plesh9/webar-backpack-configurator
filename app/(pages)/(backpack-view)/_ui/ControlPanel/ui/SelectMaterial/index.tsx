import type { FC } from 'react'
import ConstructorBox from '@shared/ui/ConstructorBox'
import type { RadioType } from '@shared/ui/RadioButtons'
import RadioButtons from '@shared/ui/RadioButtons'
import type { MaterialType } from '@pages/(backpack-view)/_state/useConfiguratorStore'
import useConfiguratorStore from '@pages/(backpack-view)/_state/useConfiguratorStore'

const list: Array<RadioType<MaterialType>> = [
    {
        value: 'LEATHER',
        title: 'Leather'
    },
    {
        value: 'FABRIC',
        title: 'Fabric'
    },
    {
        value: 'DENIM',
        title: 'Denim'
    }
] as const

const SelectMaterial: FC = () => {
    const material = useConfiguratorStore((state) => state.material)
    const setMaterial = useConfiguratorStore((state) => state.setMaterial)

    return (
        <ConstructorBox title='MATERIAL'>
            <RadioButtons
                activeValue={material}
                setActiveValue={setMaterial}
                list={list}
            />
        </ConstructorBox>
    )
}

export default SelectMaterial
