import { useEffect, useState } from 'react'

export function useScreenBreakpoint() {
    const [breakpoint, setBreakpoint] = useState(getBreakpoint())

    useEffect(() => {
        const onResize = () => setBreakpoint(getBreakpoint())
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])

    function getBreakpoint() {
        const width = window.innerWidth
        if (width < 800) return 'mobile'
        if (width < 1260) return 'medium'
        if (width > 1260) return 'large'
    }
    return breakpoint
}