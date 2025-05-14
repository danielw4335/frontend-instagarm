import { useState } from "react"

export function useOptimisticAction(initialValue, asyncAction) {
  const [value, setValue] = useState(initialValue)

  async function toggle() {
    const prevValue = value
    setValue(!value)

    try {
      await asyncAction(!value)
    } catch (err) {
      console.error('Action failed:', err)
      setValue(prevValue)
    }
  }

  return [value, toggle]
}
