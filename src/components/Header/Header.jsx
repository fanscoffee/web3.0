import { useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import useDarkMode from '../../hooks/useDarkMode'
import { Link } from 'react-router-dom'
import './Header.scss'

function Header() {
  const [darkMode, setDarkMode] = useDarkMode()
  const handleMode = () => setDarkMode(!darkMode)

  const links = [
    { name: 'Inicio', link: '/' },
    { name: 'Panaderia', link: '/panaderia' },
    { name: 'Pasteleria', link: '/pasteleria' },
    { name: 'Cafeteria', link: '/cafeteria' },
    { name: 'Contacto', link: '/contacto' },
  ]
  let [open, setOpen] = useState(false)

  return (
    <header className="fixed left-0 top-0 z-10 w-full text-center text-neutral-600 shadow-lg dark:text-neutral-200 lg:text-left">
      <div className="items-center justify-between px-7 pb-2 md:flex md:px-10">
        <div className="flex cursor-pointer items-center text-2xl font-bold">
          <span className="mr-1 pt-2 text-3xl">
            <img
              className="h-20 w-40"
              src="https://i.imgur.com/f8IEWXq.png"
              alt="Logo"
            />
          </span>
        </div>
        <div
          onClick={() => setOpen(!open)}
          onKeyDown={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer pt-6 text-3xl md:hidden"
          role="button"
          tabIndex="0"
        >
          <ion-icon name={open ? 'close' : 'menu'} />
        </div>
        <ul
          className={`absolute left-0 z-[-1] w-full bg-black/75 pb-12 pl-1 text-neutral-200 dark:text-neutral-200 md:static md:z-auto md:mt-5 md:flex md:w-auto md:items-center md:pb-0 md:pl-0 md:bg-transparent ${
            open ? 'top-30 opacity-100' : 'top-[-490px]'
          } opacity-0 md:opacity-100 `}
        >
          {links.map((link) => (
            <li
              key={link.name}
              className="my-7 text-xl font-medium md:my-0 md:ml-8"
            >
              <Link to={link.link} className=" hover:text-green">
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={handleMode}
              className="my-7 inline-block text-xl hover:text-green md:my-0 md:ml-8"
            >
              {darkMode ? (
                <FaSun size="24" className="top-navigation-icon" />
              ) : (
                <FaMoon size="24" className="top-navigation-icon" />
              )}
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
