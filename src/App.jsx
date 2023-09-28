import './App.scss'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Root from './components/Root/Root'
import About from './pages/About/About'
import Bakery from './pages/Bakery/Bakery'
import Coffee from './pages/Coffee/Coffee'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import Legal from './pages/Legal/Legal'
import NotFound from './pages/NotFound/NotFound'
import Pastry from './pages/Pastry/Pastry'
import Privacy from './pages/Privacy/Privacy'
import Join from './pages/Join/Join'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} errorElement={<NotFound />}>
        <Route index element={<Home />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/privacidad" element={<Privacy />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/panaderia" element={<Bakery />} />
        <Route path="/cafeteria" element={<Coffee />} />
        <Route path="/pasteleria" element={<Pastry />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/unete" element={<Join />} />
      </Route>,
    ),
  )
  return (
    <div className="main text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
