import { useState } from 'react'
import './Header.scss'

function Header() {
  let links = [
    { name: 'Inicio', link: '/' },
    { name: 'Panaderia', link: '/' },
    { name: 'Pasteleria', link: '/' },
    { name: 'Cafeteria', link: '/' },
    { name: 'Contacto', link: '/' },
  ]
  let [open, setOpen] = useState(false)
  return (
    <header className="left-0 top-0 w-full h-screen bg-center bg-fixed bg-cover bg-no-repeat bg-[url('https://media.istockphoto.com/id/1197065241/es/foto/tazas-de-capuchino-de-caf%C3%A9-arom%C3%A1tico.jpg?s=612x612&w=0&k=20&c=C_yFoJQssAPjP6zjuE3H6M_gUQpxDuZk36PBN2P3LnQ=')] text-center text-neutral-600 shadow-md dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
      <div className="items-center justify-between px-7 py-4 md:flex md:px-10">
        <div className="flex cursor-pointer items-center text-2xl font-bold">
          <span className="mr-1 pt-2 text-3xl">
            <img
              className="h-20 w-40"
              src="https://i.imgur.com/Ayu94vl.png"
              alt="Logo"
            />
          </span>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer pt-6 text-3xl md:hidden"
        >
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>
        <ul
          className={`absolute left-0 z-[-1] mt-5 w-full bg-neutral-100 pb-12 pl-1 transition-all duration-500 ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:pb-0 md:pl-0 ${
            open ? 'top-30 opacity-100' : 'top-[-490px]'
          } opacity-0 md:opacity-100 `}
        >
          {links.map((link) => (
            <li key={link.name} className="my-7 text-xl md:my-0 md:ml-8">
              <a
                href={link.link}
                className="text-neutral-700 duration-500 hover:text-neutral-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header
