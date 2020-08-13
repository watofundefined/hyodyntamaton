import { useRef, useEffect } from 'react'

export default function usePreviousNonNull<T>(val: T): T {
  const ref = useRef(val)

  useEffect(() => {
    if (val != null) ref.current = val
  })

  return ref.current
}
