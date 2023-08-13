import React from 'react'

const BigBackground = () => {
  return (
    <div className="left-0 top-0 z-10 h-screen w-full bg-[url('https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-fixed bg-no-repeat text-neutral-600 shadow-lg dark:bg-neutral-600 dark:text-neutral-200 text-left">
        <h1 className="ml-10 md:ml-40 pt-60 md:pt-80 text-8xl text-neutral-200">
          Fans Coffee <br />
          Bakery
        </h1>
        <p className="ml-10 md:ml-40 mt-10 font-semibold text-neutral-200">
          Donde tus antojos soñados,
          <br />
          cobran realidad...
        </p>
    </div>
  )
}

export default BigBackground
