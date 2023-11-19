import { useEffect, useState } from 'react'

export const useBeforeRender = (callback: () => void, deps: Array<any>) => {
  const [isRun, setIsRun] = useState(false)

  if (!isRun) {
    callback()
    setIsRun(true)
  }

  useEffect(() => () => setIsRun(false), deps)
}
