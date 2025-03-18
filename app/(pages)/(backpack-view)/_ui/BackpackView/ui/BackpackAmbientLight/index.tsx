import type { FC } from 'react'
import useConfiguratorStore from '@pages/(backpack-view)/_state/useConfiguratorStore'

const BackpackAmbientLight: FC = () => {
    const isBlack = useConfiguratorStore((state) => state.color === 'BLACK')

    return <ambientLight intensity={isBlack ? 5 : 1} />
}

export default BackpackAmbientLight
