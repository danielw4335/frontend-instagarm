import { useState } from "react"

export function useOptimisticAction(initialValue, asyncAction) {
  const [value, setValue] = useState(initialValue)

  async function toggle() {
    const prevValue = value
    const newValue = !value
    setValue(newValue)

    try {
      await asyncAction(newValue)
    } catch (err) {
      console.error('Action failed:', err)
      setValue(prevValue)
    }
  }

  return [value, toggle, setValue]
}

