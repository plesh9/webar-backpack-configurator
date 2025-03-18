import useConfiguratorStore from '@pages/(backpack-view)/_state/useConfiguratorStore'

const useArParams = () => {
    const color = useConfiguratorStore((state) => state.color)
    const hardware = useConfiguratorStore((state) => state.hardware)
    const material = useConfiguratorStore((state) => state.material)

    return `color=${color}&hardware=${hardware}&material=${material}` as const
}

export default useArParams
