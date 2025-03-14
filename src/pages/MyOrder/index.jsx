import { useContext } from "react"
import { Link } from "react-router-dom"
import { FaChevronLeft } from "react-icons/fa"
import Layout from "../../components/Layout"
import OrderCard from "../../components/OrderCard"
import { ShoppingCartContext } from "../../context/shoppingCartContext";

function MyOrder () {
	const context = useContext(ShoppingCartContext)
  const currentPath = window.location.pathname
  let id = currentPath.substring(currentPath.lastIndexOf("/") + 1)
  if ( id === "last" ){
    let position = context.order.length - 1
    id = context.order[position]?.id
  }
  const orderSelected = context.order.find(order => order.id === id)
    return (
			<Layout>
        <div className="flex items-center w-80 mb-6">
					<Link to={`/my-orders`} className="relative flex justify-between w-50">
						<FaChevronLeft className="text-black w-6 h-6 cursor-pointer mx-1" />
						<h1 className="font-medium text-xl">My Order</h1>
					</Link>
				</div>
				<div className="flex flex-col w-80">
        {
          orderSelected.products?.map(product => (
            <OrderCard 
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.image}
              price={product.price}
            />
          ))
        }
      </div>
			</Layout>
		)
}

export default MyOrder;