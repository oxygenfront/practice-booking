import { Outlet } from 'react-router-dom'
import { Header } from './components'
import '../src/css/reset.css'
import '../src/css/global.css'
export function Layout() {
	return (
		<>
			<Header />
			<div className='container'>
				<Outlet />
			</div>
		</>
	)
}
