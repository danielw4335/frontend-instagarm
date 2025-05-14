import { useRef } from 'react'

export function useHeartbeatOnHover(enabled = true, className = 'animate-heartbeat') {
  const ref = useRef(null)

  function onMouseLeave() {
    if (!enabled) return

    const el = ref.current
    if (!el) return

    el.classList.remove(className)
    void el.offsetWidth
    el.classList.add(className)

    const handleAnimationEnd = () => {
      el.classList.remove(className)
      el.removeEventListener('animationend', handleAnimationEnd)
    }

    el.addEventListener('animationend', handleAnimationEnd)
  }

  return { ref, onMouseLeave }
}
