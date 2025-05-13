import { useEffect } from 'react'

export function useClickOutsideClose(ref, onClose) {
  useEffect(() => {
    function handleClickOutside(ev) {
      if (ref.current && !ref.current.contains(ev.target)) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, onClose])
}
