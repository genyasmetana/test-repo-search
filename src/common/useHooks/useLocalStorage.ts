import { useState, useEffect } from 'react'

export const useLocalStorage = (key: string, initialValue: any = []) => {
  const [localStorageItems, setLocalStorageItems] = useState(() => {
    const storedItems = localStorage.getItem(key)
    return storedItems ? JSON.parse(storedItems) : initialValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(localStorageItems))
  }, [key, localStorageItems])

  const addLocalStorageItem = (item: any) => {
    setLocalStorageItems((prevItems: any) => [...prevItems, { ...item, isFavorite: true }])
  }

  const removeLocalStorageItem = (item: any) => {
    setLocalStorageItems((prevItems: any) =>
      prevItems.filter((prevItem: any) => prevItem.id !== item.id)
    )
  }

  return [localStorageItems, addLocalStorageItem, removeLocalStorageItem]
}
