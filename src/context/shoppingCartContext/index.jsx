import { createContext, useEffect, useState } from "react"
import { useFetch } from "../../hooks/common/useFetch"
import { ENDPOINTS } from "../../config/api"
import { getRandomRating } from "../../utils"

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
  const allItems = items?.map( product => {
    const rating = { rate: getRandomRating()}
    return {
      ...product,
      rating: rating,
      images: product.image ? product.image : product.images?.[0],
      category: (product.category?.name) ? product.category.name : product.category	
    }
  })
  const [filteredItems, setFilteredItems] = useState(null)
   // Search Bar
  const [searchByTitle, setSearchByTitle] = useState(null)

  const filteredItemsBySearchBar = (items, searchByTitle) => {
    return items?.filter(item => item.title?.toLowerCase().includes(searchByTitle))
  }
  // Get products by Category
  const [searchByCategory, setSearchByCategory] = useState(null)

  const filteredItemsByCategory= (items, searchByCategory) => {
    return items?.filter(item => item.category.toLowerCase().includes(searchByCategory))
  } 

  const filterBy = ({searchType, items, searchByTitle, searchByCategory}) => {
    if (searchType === 'BY_TITLE'){
      return filteredItemsBySearchBar(items, searchByTitle)
    }
    if (searchType === 'BY_CATEGORY'){
      return filteredItemsByCategory(items, searchByCategory)
    }
    if (searchType === 'BY_TITLE_AND_CATEGORY'){
      return filteredItemsByCategory(items, searchByCategory).filter(item => item.title?.toLowerCase().includes(searchByTitle))
    }
    if(!searchType){
      return allItems
    }
  }

  useEffect( () => {
    if(searchByTitle && searchByCategory){ 
      setFilteredItems( filterBy({
        searchType:'BY_TITLE_AND_CATEGORY',
        items: allItems,
        searchByTitle: searchByTitle.toLowerCase(),
        searchByCategory: searchByCategory.toLowerCase()
        }))
      return
    }
  if(searchByTitle && !searchByCategory){ 
    setFilteredItems( filterBy({
      searchType:'BY_TITLE',
      items: allItems,
      searchByTitle: searchByTitle.toLowerCase(),
      })) 
    return
  }
  if(searchByCategory && !searchByTitle){
    setFilteredItems( filterBy({
      searchType:'BY_CATEGORY',
      items: allItems,
      searchByCategory: searchByCategory.toLowerCase()
      }))
    return
  }
  if(!searchByCategory && !searchByTitle){
    setFilteredItems( filterBy({
      searchType:null
      }))
  }
  }, [items, searchByTitle, searchByCategory])


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
        filteredItems,
        searchByCategory,
        setSearchByCategory,
        filteredItemsByCategory
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}