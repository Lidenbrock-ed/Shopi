import { BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../context'
import AppRoutes from '../../routes/AppRoutes'
import Navbar from '../../components/Navbar'
import { leftMenu, rightMenu } from '../../Config/constants'

function App() {
	return (
		<ShoppingCartProvider>
			<BrowserRouter>
				<AppRoutes />
				<Navbar 
					leftMenu={leftMenu}
					rightMenu={rightMenu}
					emailUser='email@example.com'
				/>
			</BrowserRouter>
		</ShoppingCartProvider>
	)
}

export default App
