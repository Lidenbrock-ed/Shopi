import { useContext } from "react"
import { Link } from "react-router-dom"
import { IoCloseCircle } from "react-icons/io5"
import { ShoppingCartContext } from "../../context/shoppingCartContext"
import OrderCard from '../OrderCard/'
import { totalPrice } from "../../utils"

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter( product => product.id !== id)
    context.setCartProducts(filteredProducts)
    context.setCount( prevCount => prevCount - 1)
  }

  const handleCheckout = () => {
    const orderToAdd = {
      id: crypto.randomUUID(),
      date: new Date(),
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    }

    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
    context.closeCheckoutSideMenu()
  }
  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } h-[calc(100vh-68px)] w-[360px] top-[68px] flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center px-6 py-5 ">
        <h2 className="font-medium text-xl">
          My Order
        </h2>
        <IoCloseCircle
          className="text-black w-6 h-6 m-1 cursor-pointer"
          onClick={() => context.closeCheckoutSideMenu()}
          aria-label="Close cart"
        />
      </div>
      <div className="px-6 overflow-auto flex-1">
        {
          context.cartProducts.map( (product, index) => {
            return <OrderCard 
              key={index}
              id={product.id}
              title={product.title}
              imageUrl={product.image}
              price={product.price}
              handleDelete={handleDelete}
            />
          })
        }
      </div>
      <div className="px-6 pb-6 pt-2 sticky bottom-0 rounded-b-lg bg-white w-full h-fit ">
        <p className="flex justify-between items-center h-6 text-xl font-medium mb-2">
          <span>Total:</span>
          <span>${totalPrice(context.cartProducts)}</span>
        </p>
        <Link to={"/my-orders/last"}>
          <button
            onClick={() => { handleCheckout()}}
            className="w-full bg-black py-3 text-white font-medium rounded-lg"
            aria-label="Proceed to checkout"
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu