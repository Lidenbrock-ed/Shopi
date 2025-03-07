import { useContext } from "react"
import { ShoppingCartContext } from "../../context/shoppingCartContext"

const Card = ({ category, price, title, image, description, rating }) => {
  const context = useContext(ShoppingCartContext)
  const product = { category, price, title, image, description, rating }
  const showProductDetails = (productDetail) => {
    context.toggleProductDetail()
    context.setProductToShow(productDetail)
  }
  const addProductsToCart = (event, productData) => {
    event.stopPropagation()
    context.setCartProducts([...context.cartProducts, productData])
    context.openCheckoutSideMenu()
    context.setCount(context.count + 1)
  }

  return (
    <article
      className="bg-white cursor-pointer w-56 h-80 shadow-lg rounded-lg p-4"
      onClick={() => {
        showProductDetails(product)
      }}
    >
      <figure className="relative mb-2 w-full h-3/5 ">
        <span className="absolute bottom-0 left-0 bg-black/80 rounded-lg text-white text-xs m-2 px-3 py-0.5 capitalize">
          {category}
        </span>
        <img
          className="w-full h-full object-contain rounded-lg"
          src={image ? image : ""}
          alt={title}
        />
        <button
          className="absolute top-0 right-0 flex justify-center items-center bg-black/80 text-white w-6 h-6 rounded-full m-2 p-3 cursor-pointer"
          onClick={(event) => {
            event.stopPropagation()
            addProductsToCart(event, product)
          }}
        >
          +
        </button>
      </figure>
      <p className="flex flex-col">
        <span className="text-lg text-end font-medium w-full">${price}</span>
        <span className="text-sm font-light h-fit">{title}</span>
      </p>
    </article>
  )
}

export default Card