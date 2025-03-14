import { useContext } from "react"
import { Link } from "react-router-dom";
import Layout from "../../components/Layout"
import OrdersCard from "../../components/OrdersCard"
import { ShoppingCartContext } from "../../context/shoppingCartContext";

function MyOrders () {
	const context = useContext(ShoppingCartContext)

    return (
			<Layout>
				<div className="flex justify-center items-center relative w-80 mb-4">
					<h1 className="font-medium text-xl">My Orders</h1>
				</div>
				{
					context.order.map( (order)  => (
						<Link key={order.id} to={`/my-orders/${order.id}`}>
							<OrdersCard
								totalPrice={order.totalPrice}
								totalProducts={order.totalProducts}
							/>
						</Link>
					))
				}
			</Layout>
		)
}

export default MyOrders;