'use client'
import SelectBodyColor from './ui/SelectBodyColor'
import SelectMaterial from './ui/SelectMaterial'
import SelectMetalColor from './ui/SelectMetalColor'

const ControlPanel = () => {
    return (
        <div
            className={`
              flex flex-wrap gap-5
              sm:gap-20
            `}
        >
            <SelectBodyColor />
            <SelectMetalColor />
            <SelectMaterial />
        </div>
    )
}

export default ControlPanel
