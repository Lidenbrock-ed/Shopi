import { BrowserRouter } from 'react-router-dom'
import AppRoutes from '../../routes/AppRoutes'
import Navbar from '../../components/Navbar'
const leftMenu = [
	{
		path: '/',
		name: 'All'
	},
	{
		path: '/clothes',
		name: 'Clothes'
	},
	{
		path: '/electronics',
		name: 'Electronics'
	},
	{
		path: '/furnitures',
		name: 'Furnitures'
	},
	{
		path: '/toys',
		name: 'Toys'
	},
	{
		path: '/others',
		name: 'Others'
	}
]

const rightMenu = [
	{
		path: '/my-account',
		name: 'My Account'
	},
	{
		path: '/my-order',
		name: 'My Order'
	},
	{
		path: '/my-orders',
		name: 'My Orders'
	},
	{
		path: '/sign-in',
		name: 'Sign In'
	}
]

function App() {
	return (
		<>
		<BrowserRouter>
			<AppRoutes />
			<Navbar 
				leftMenu={leftMenu}
				rightMenu={rightMenu}
				emailUser='email@example.com'
			/>
		</BrowserRouter>
		</>
	)
}

export default App
