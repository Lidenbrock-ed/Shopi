import { useContext } from "react"
import { ShoppingCartContext } from "../../context/shoppingCartContext"

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext)
  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      } h-[calc(100vh-68px)] w-[360px] top-[68px] flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center px-6 py-5 ">
        <h2 className="font-medium text-xl">Details</h2>
        <button
          className="bg-black/80 text-white w-6 h-6 rounded-full m-1 cursor-pointer text-xs"
          onClick={() => context.toggleProductDetail()}
        >
          X
        </button>
      </div>
      <figure className="px-6 h-60">
        <img
          className="w-full h-full rounded-lg object-contain"
          src={context.productToShow?.image}
          alt={context.productToShow?.title}
        />
        <span className="absolute bottom-[calc(100vh-380px)] left-6 bg-black/80 rounded-lg text-white text-xs px-3 py-0.5 capitalize">
          {context.productToShow?.category}
        </span>
      </figure>
      <p className="flex justify-between px-6">
        <span className="font-medium text-2xl">
          ${context.productToShow?.price}
        </span>
        <span className="font-medium text-lg">
          {context.productToShow?.rating?.rate}⭐
        </span>
      </p>
      <p className="flex flex-col px-6">
        <span className="font-medium text-lg my-2">
          {context.productToShow?.title}
        </span>
        <span className="font-ligth text-sm">
          {context.productToShow?.description}
        </span>
      </p>
    </aside>
  )
}

export default ProductDetail