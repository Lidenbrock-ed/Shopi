import { useContext } from "react"
import { FaCirclePlus } from 'react-icons/fa6'
import { FaCheckCircle } from "react-icons/fa"
import { ShoppingCartContext } from "../../context/shoppingCartContext"

const Card = ({ id, category, price, title, image, description, rating }) => {
  const context = useContext(ShoppingCartContext)
  const product = { id, category, price, title, image, description, rating }
  const showProductDetails = (productDetail) => {
    context.openProductDetail()
    context.setProductToShow(productDetail)
  }
  const addProductsToCart = (event, productData) => {
    event.stopPropagation()
    context.setCartProducts([...context.cartProducts, productData])
    context.openCheckoutSideMenu()
    context.setCount(context.count + 1)
  }

const renderIcon = (id) => {
  const isInCart = context.cartProducts.filter( product => product.id === id).length > 0
  if(isInCart) {
    return (
      <FaCheckCircle
        onClick={(event) => event.stopPropagation()}
        className="absolute top-0 right-0 w-6 h-6 text-green-400"
      />
    )
  } else {
    return (
      <FaCirclePlus
        className="absolute top-0 right-0 w-6 h-6 text-black"
        onClick={(event) => {
          event.stopPropagation()
          addProductsToCart(event, product)
        }}
      />
    )
  }
}

  return (
    <article
      className="bg-white cursor-pointer w-56 h-80 shadow-lg rounded-lg p-4"
      onClick={() => {
        showProductDetails(product)
      }}
    >
      <figure className="relative mb-2 w-full h-3/5">
        <span className="absolute bottom-0 left-0 bg-black/80 rounded-lg text-white text-xs m-2 px-3 py-0.5 capitalize">
          {category}
        </span>
        <img
          className="w-full h-full object-contain rounded-lg"
          src={image ? image : ""}
          alt={title}
        />
        {renderIcon(product.id)}
      </figure>
      <p className="flex flex-col">
        <span className="text-lg text-end font-medium w-full">${price}</span>
        <span className="text-sm font-light h-fit">{title}</span>
      </p>
    </article>
  )
}

export default Card