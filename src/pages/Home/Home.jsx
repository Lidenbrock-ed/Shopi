import Layout from "../../components/Layout"
import Card from "../../components/Card"
import ProductDetail from "../../components/ProductDetail"

function Home () {
	const items =[{}]
	return (
		<Layout>
			<div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
				{ 
					items?.map( item => {
						return <Card 
							key={item.id}
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