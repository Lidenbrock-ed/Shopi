import { useContext } from "react"
import { IoCloseCircle } from "react-icons/io5"
import { ShoppingCartContext } from "../../context/shoppingCartContext"
import OrderCard from '../OrderCard/'

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)
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
        />
      </div>
      <div className="px-6 overflow-auto">
        {
          context.cartProducts.map( (product, index) => {
            return <OrderCard 
              key={index}
              id={product.id}
              title={product.title}
              imageUrl={product.image}
              price={product.price}
            />
          })
        }
      </div>
    </aside>
  )
}

export default CheckoutSideMenu