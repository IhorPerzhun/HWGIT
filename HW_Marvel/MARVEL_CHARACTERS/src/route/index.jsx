import {BrowserRouter , Routes as RouterRoutes, Route } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import { routes } from './routes.js';
import Layout from '../components/Layout/index.jsx';


function Routes() {
  return (
    <BrowserRouter>
		<RouterRoutes>
			<Route element={<Layout />}>
				<Route path={routes.home} element={<Home />} />
				<Route path={routes.about} element={<About />} />
			</Route	>
				
		</RouterRoutes>
	</BrowserRouter>

  )
}

export default Routes