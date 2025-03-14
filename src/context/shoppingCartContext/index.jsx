import { createContext, useEffect, useState } from "react"
import { useFetch } from "../../hooks/common/useFetch"
import { ENDPOINTS } from "../../config/api"
// eslint-disable-next-line react-refresh/only-export-components
export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0)
  // Product Detail - Show Product
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const [productToShow, setProductToShow] = useState({})
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)
  //Shopping Cart - Add products to cart
  const [cartProducts, setCartProducts] = useState([])
  //shopping Cart - Show Cart
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)
  //Shopping Cart - Order
  const [order, setOrder] = useState([])
  //Get Products
  const { 
		data: items,
		loading,
    setItems
	} = useFetch(ENDPOINTS.PRODUCTS, [])
  const [filteredItems, setFilteredItems] = useState(null)
   // Search Bar
  const [searchByTitle, setSearchByTitle] = useState(null)

  const filteredItemsBySearchBar = (items, searchByTitle) => {
    return items?.filter(item => item.title?.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  useEffect( () => {
    if(searchByTitle){
      setFilteredItems( filteredItemsBySearchBar( items, searchByTitle ) )
    }
  }, [items, searchByTitle])


  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder,
        items,
        loading,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}