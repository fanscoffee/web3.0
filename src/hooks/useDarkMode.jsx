import { useEffect, useState } from 'react'

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : initialValue
  })

  const setValue = (value) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value

    setStoredValue(valueToStore)

    window.localStorage.setItem(key, JSON.stringify(valueToStore))
  }
  return [storedValue, setValue]
}

const useDarkMode = () => {
  const [enabled, setEnabled] = useLocalStorage('dark-theme')
  const isEnabled = typeof enabledState === 'undefined' && enabled

  useEffect(() => {
    const className = 'dark'
    const bodyClass = window.document.body.classList

    if (isEnabled) {
      bodyClass.add(className)
    } else {
      bodyClass.remove(className)
    }
  }, [enabled, isEnabled])

  return [enabled, setEnabled]
}

export default useDarkMode
