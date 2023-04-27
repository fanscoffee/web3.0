import './App.scss'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import Legal from './pages/Legal/Legal'
import Privacy from './pages/Privacy/Privacy'

function App() {
  return (
    <div className="text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200">
      <Header />
      <Privacy />
      {/* <Legal /> */}
      {/* <Contact /> */}
      {/* <Home /> */}
      <Footer />
    </div>
  )
}

export default App
