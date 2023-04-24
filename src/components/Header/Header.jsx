import { useState } from 'react';
import './Header.scss'

function Header() {
  let links = [
    {name:"Inicio",link:"/"},
    {name:"Nosotros",link:"/"},
    {name:"Productos",link:"/"},
    {name:"Pedidos",link:"/"},
    {name:"Contacto",link:"/"},
  ];
  let [open, setOpen] = useState(false);
  return (
    <header className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
      <div className='font-bold text-2xl cursor-pointer flex items-center'>
          <span className='text-3xl mr-1 pt-2'>
          <img className='h-20 w-40' src="https://i.imgur.com/Ayu94vl.png" alt="Logo" />
          </span>
        </div>
        <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
        <ion-icon name={open ? 'close':'menu'}></ion-icon>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-1 transition-all duration-500 ease-in ${open ? 'top-30 opacity-100':'top-[-490px]'} md:opacity-100 opacity-0 `}>
          {
            links.map((link)=>(
              <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                <a href={link.link} className='text-neutral-700 hover:text-neutral-500 duration-500'>{link.name}</a>
              </li>
            ))
          }
        </ul>
      </div>
    </header>
  )
}

export default Header
