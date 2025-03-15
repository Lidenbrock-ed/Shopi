import { useContext } from "react"
import Layout from "../../components/Layout"
import Card from "../../components/Card"
import ProductDetail from "../../components/ProductDetail"
import { ShoppingCartContext } from "../../context/shoppingCartContext"
import { getRandomRating } from "../../utils"
function Home () {
	const context = useContext(ShoppingCartContext)
	
	const renderView = () => {
		const renderFilteredItems = context.filteredItems?.map( product => {
			const rating = { rate: getRandomRating()}
			let item = {...product, rating: rating}
			return <Card 
				key={item.id}
				id={item.id}
				category={item.category.name}
				price={item.price}
				title={item.title}
				image={item.images?.[0]}
				description={item.description}
				rating={item.rating}
			/>
		})

		const renderAllItems = context.items?.map( product => {
			const rating = { rate: getRandomRating()}
			let item = {...product, rating: rating}
			return <Card 
				key={item.id}
				id={item.id}
				category={item.category.name}
				price={item.price}
				title={item.title}
				image={item.images?.[0]}
				description={item.description}
				rating={item.rating}
			/>
	})
		
		if(context.loading){
			return (
				<div> Loading...</div>
			)
		}
		// Render Items Filtered
		if (context.searchByTitle?.length > 0){
			return renderFilteredItems 
		} 
		// Render all Items
		return renderAllItems

	}
	return (
		<Layout>
			<div className="flex justify-center items-center relative w-80 mb-4">
				<h1 className="font-medium text-2xl">Exclusive Products</h1>
			</div>
			<input 
				type="text" placeholder="Search" 
				className="rounded-lg border border-black w-100 p-2 mb-4 focus:outline-none text-center"
				onChange={(event) => context.setSearchByTitle(event.target.value.trim())}
			/>
			<div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
			{
				renderView()
			}
			</div>
			<ProductDetail />
		</Layout>
	)
}

export default Home