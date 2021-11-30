import React, { useState, useMemo, useEffect } from 'react'
import produce from 'immer'

const BagContext = React.createContext(null)

const initialValue = []
const storageKey = 'bag'
export const BagProvider = ({ children }) => {
  const [bag, setBag] = useState(() => {
    try {
      const item = window.localStorage.getItem(storageKey)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(bag))
  }, [bag])

  const addProduct = (product) => {
    setBag(produce(bag, (draft) => {
      draft.push(product)
    }))
  }

  const removeProduct = (index) => {
    setBag(produce(bag, (draft) => {
      if (index >= 0) draft.splice(index, 1)
    }))
  }

  const value = useMemo(() => ({ bag, addProduct, removeProduct }), [bag])
  return (
    <BagContext.Provider value={value}>
      {children}
    </BagContext.Provider>
  )
}

const useBag = () => React.useContext(BagContext)
export default useBag
