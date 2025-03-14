import { useContext } from "react"
import Layout from "../../components/Layout"
import Card from "../../components/Card"
import ProductDetail from "../../components/ProductDetail"
import { ShoppingCartContext } from "../../context/shoppingCartContext"

function Home () {
	const context = useContext(ShoppingCartContext)
	return (
		<Layout>
			<div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
				{ 
					(context.loading)?
						<div> Loading...</div>
					:
						context.items?.map( item => {
							return <Card 
								key={item.id}
								id={item.id}
								category={item.category}
								price={item.price}
								title={item.title}
								image={item.image}
								description={item.description}
								rating={item.rating}
							/>
						})
				}
			</div>
			<ProductDetail />
		</Layout>
	)
}

export default Home