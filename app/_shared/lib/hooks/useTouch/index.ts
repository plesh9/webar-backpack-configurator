import { useEffect, useState } from 'react'

const useTouch = () => {
    const [isTouch, setIsTouch] = useState(() =>
        typeof window === 'undefined'
            ? false
            : window.matchMedia('(pointer: coarse)').matches
    )

    useEffect(() => {
        const mediaQuery = window.matchMedia('(pointer: coarse)')
        const updateIsTouch = () => {
            const isTouchDevice = window.matchMedia('(pointer: coarse)').matches

            setIsTouch(isTouchDevice)
        }

        mediaQuery.addEventListener('change', updateIsTouch)
        updateIsTouch()

        return () => {
            mediaQuery.removeEventListener('change', updateIsTouch)
        }
    }, [])

    return isTouch
}

export default useTouch
