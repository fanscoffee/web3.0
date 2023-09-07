import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { FaSun, FaMoon } from 'react-icons/fa'
import useDarkMode from '../../hooks/useDarkMode'
import './Header.scss'

function Header() {
  const [darkMode, setDarkMode] = useDarkMode()
  const [scroll, setScroll] = useState(false)
  const [open, setOpen] = useState(false)
  const handleMode = () => setDarkMode(!darkMode)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setScroll(window.scrollY > 200))
    }
  }, [])

  let logoSrc = ''
  let iconColor = ''
  let bgColor = ''
  let letterColor = ''

  if (pathname === '/') {
    if (darkMode) {
      logoSrc = '/fans-logo-blanco.png' // Logo claro siempre que tengamos darkMode en true
      iconColor = 'text-white'
      bgColor = open ? 'bg-neutral-600' : 'bg-transparent'
      letterColor = 'text-neutral-200'
    } else {
      logoSrc = scroll ? '/fans-logo-oscuro.png' : '/fans-logo-blanco.png' // Logo oscuro después de hacer scroll o blanco sin scroll
      iconColor = scroll ? 'text-neutral-600' : 'text-neutral-200'
      bgColor = open ? 'bg-beige' : 'bg-transparent'
      letterColor = scroll || open ? 'text-neutral-600' : 'text-neutral-200'
    }
  } else {
    logoSrc = darkMode ? '/fans-logo-blanco.png' : '/fans-logo-oscuro.png' // Logo blanco en otro path con tema oscuro o logo oscuro con tema normal
    iconColor = darkMode ? 'text-neutral-200' : 'text-neutral-600'
    bgColor = darkMode ? 'bg-neutral-600' : 'bg-beige'
  }

  const links = [
    { name: 'Inicio', link: '/' },
    { name: 'Panaderia', link: '/panaderia' },
    { name: 'Pasteleria', link: '/pasteleria' },
    { name: 'Cafeteria', link: '/cafeteria' },
    { name: 'Contacto', link: '/contacto' },
  ]

  return (
    <header
      className={`${
        scroll || pathname !== '/'
          ? 'bg-beige dark:bg-neutral-600'
          : 'md:bg-transparent'
      } fixed left-0 top-0 w-full text-center shadow-lg  dark:text-neutral-200 lg:text-left`}
    >
      <div className="items-center justify-between px-7 pb-2 md:flex md:px-10">
        <div className="flex cursor-pointer items-center text-2xl font-bold">
          <Link to="/" className="right-0 pt-2 text-3xl">
            <img className="h-20 w-40" src={logoSrc} alt="Logo" />
          </Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          onKeyDown={() => setOpen(!open)}
          className={`absolute right-8 top-6 cursor-pointer pt-6 text-3xl ${iconColor} md:hidden`}
          role="button"
          tabIndex="0"
        >
          <ion-icon name={open ? 'close' : 'menu'} />
        </div>
        <ul
          className={`absolute left-0 z-[-1] w-full pb-12 pl-1 md:static md:z-auto md:mt-5 md:flex md:w-auto md:items-center ${letterColor} ${bgColor} md:pb-0 md:pl-0 ${
            open ? 'top-[99%] opacity-100' : 'top-[-490px]'
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
