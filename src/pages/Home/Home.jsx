import Layout from "../../components/Layout"
import Card from "../../components/Card"
import ProductDetail from "../../components/ProductDetail"
import { useFetch } from "../../hooks/common/useFetch"
import { ENDPOINTS } from "../../config/api"

function Home () {
	const { 
		data: items,
		loading,
	 } = useFetch(ENDPOINTS.PRODUCTS, [])
	return (
		<Layout>
			<div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
				{ 
					(loading)?
						<div> Loading...</div>
					:
						items?.map( item => {
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