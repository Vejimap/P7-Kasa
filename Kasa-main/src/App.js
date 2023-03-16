// Import des différentes pages de l'application
import Home from './pages/home/Home';
import NotFound from './pages/notFound/NotFound';
import About from './pages/about/About';
import Accomodation from './pages/accomodation/Accomodation';
//Import de la fonction createBrowserRouter et de RouterProvider
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Création de la configuration des routes de l'application
const router = createBrowserRouter([
	{
		path: "/Kasa/",
		element: <Home />
	},
	{
		path: "/accomodation/:id",
		element: <Accomodation />
	},
	{
		path: '/about',
		element: <About />
	},
	{
		path: "*",
		element: <NotFound />
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router}/>
		</>
	);
}

export default App;
