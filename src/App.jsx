import './App.scss'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'

function App() {
  return (
    <div className="text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200">
      <Header />
      <Contact />
      {/* <Home /> */}
      <Footer />
    </div>
  )
}

export default App
