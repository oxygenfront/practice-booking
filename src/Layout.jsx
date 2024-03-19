import { Outlet } from 'react-router-dom'
import '../src/css/global.css'
import '../src/css/reset.css'
import { Header } from './components'
export function Layout() {
	return (
		<>
			<div className="container"><Header /></div>
			<div className='container'>
				<Outlet />
			</div>
		</>
	)
}
