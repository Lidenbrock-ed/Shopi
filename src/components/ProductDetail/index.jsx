import { useContext } from "react"
import { IoCloseCircle } from "react-icons/io5"
import { FaStar } from "react-icons/fa6"
import { ShoppingCartContext } from "../../context/shoppingCartContext"

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext)
  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      } h-[calc(100vh-68px)] w-[360px] top-[68px] flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center px-6 py-5">
        <h2 className="font-medium text-xl">Details</h2>
        <IoCloseCircle
          className="text-black w-6 h-6 m-1 cursor-pointer"
          onClick={() => context.closeProductDetail()}
        />
      </div>
      <figure className="px-6 h-70">
        <img
          className="w-full h-full rounded-lg object-cover"
          src={context.productToShow?.image}
          alt={context.productToShow?.title}
        />
        <span className="absolute bottom-[calc(100vh-415px)] left-10 bg-black/80 rounded-lg text-white text-xs px-3 py-0.5 capitalize">
          {context.productToShow?.category}
        </span>
      </figure>
      <p className="flex justify-between px-6">
        <span className="font-medium text-2xl">
          ${context.productToShow?.price}
        </span>
        <span className="flex items-center font-medium text-lg">
          {context.productToShow?.rating?.rate}
          <FaStar className="mx-1 text-yellow-300 w-6 h-6" />
        </span>
      </p>
      <p className="flex flex-col px-6">
        <span className="font-medium text-lg my-2">
          {context.productToShow?.title}
        </span>
        <span className="font-light text-sm">
          {context.productToShow?.description}
        </span>
      </p>
    </aside>
  )
}

export default ProductDetail