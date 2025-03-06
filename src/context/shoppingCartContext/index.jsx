import { createContext, useState } from "react"

// eslint-disable-next-line react-refresh/only-export-components
export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
  const [count, setCount] = useState(0)
  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}