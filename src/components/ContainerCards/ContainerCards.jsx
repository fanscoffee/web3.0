import React from 'react'

const ContainerCards = () => {
  return (
    <div className="p-5 bg-neutral-300">
        <p className="text-4xl font-semibold">Recomendados</p>
        <div className="w-auto h-80 items-center mt-2 overflow-x-auto overscroll-x-contain flex space-x-6">
            <div className='w-60 h-72 shadow-md rounded-lg flex-none'>
                <div className="w-full h-4/6 bg-[url(../public/images/croasant.jpg)] bg-cover bg-center rounded-t-lg">
                </div>
                <div className=" w-full h-2/6 bg-neutral-600 rounded-b-lg">
                    <p className="text-white text-bold text-xl px-4 py-2">Croisant</p>
                    <p className="text-white text-sm px-4">Hecho con masa madre</p>
                </div>
            </div>
            <div className='w-60 h-72 shadow-md rounded-lg flex-none'>
                <div className="w-full h-4/6 bg-[url(../public/images/malteada.jpg)] bg-cover bg-center rounded-t-lg">
                </div>
                <div className=" w-full h-2/6 bg-neutral-600 rounded-b-lg">
                    <p className="text-white text-bold text-xl px-4 py-2">Malteadas</p>
                    <p className="text-white text-sm px-4">Las más refrescantes</p>
                </div>
            </div>

            <div className='w-60 h-72 shadow-md rounded-lg flex-none'>
                <div className="w-full h-4/6 bg-[url(../public/images/tartaleta.jpg)] bg-cover bg-center rounded-t-lg">
                </div>
                <div className=" w-full h-2/6 bg-neutral-600 rounded-b-lg">
                    <p className="text-white text-bold text-xl px-4 py-2">Tartaleta</p>
                    <p className="text-white text-sm px-4">Como esta no hay dos</p>
                </div>
            </div>
            <div className='w-60 h-72 shadow-md rounded-lg flex-none'>
                <div className="w-full h-4/6 bg-[url(../public/images/coffee.jpg)] bg-cover bg-center rounded-t-lg">
                </div>
                <div className=" w-full h-2/6 bg-neutral-600 rounded-b-lg">
                    <p className="text-white text-bold text-xl px-4 py-2">Cafes</p>
                    <p className="text-white text-sm px-4">De clase mundial</p>
                </div>
            </div>
            <div className='w-60 h-72 shadow-md rounded-lg flex-none'>
                <div className="w-full h-4/6 bg-[url(../public/images/torta_chocolate.jpg)] bg-cover bg-center rounded-t-lg">
                </div>
                <div className=" w-full h-2/6 bg-neutral-600 rounded-b-lg">
                    <p className="text-white text-bold text-xl px-4 py-2">Pastel de Chocolate</p>
                    <p className="text-white text-sm px-4">Hara volar tu cabeza</p>
                </div>
            </div>
            <div className='w-60 h-72 shadow-md rounded-lg flex-none'>
                <div className="w-full h-4/6 bg-[url(../public/images/donout.jpg)] bg-cover bg-center rounded-t-lg">
                </div>
                <div className=" w-full h-2/6 bg-neutral-600 rounded-b-lg">
                    <p className="text-white text-bold text-xl px-4 py-2">Donas</p>
                    <p className="text-white text-sm px-4">Esponjosas</p>
                </div>
            </div>
            <div className='w-60 h-72 shadow-md rounded-lg flex-none'>
                <div className="w-full h-4/6 bg-[url(../public/images/empanada.jpg)] bg-cover bg-center rounded-t-lg">
                </div>
                <div className=" w-full h-2/6 bg-neutral-600 rounded-b-lg">
                    <p className="text-white text-bold text-xl px-4 py-2">Empanadas</p>
                    <p className="text-white text-sm px-4">Variedad de rellenos</p>
                </div>
            </div>

            <div className='w-60 h-72 shadow-md rounded-lg flex-none'>
                <div className="w-full h-4/6 bg-[url(../public/images/torta.jpg)] bg-cover bg-center rounded-t-lg">
                </div>
                <div className=" w-full h-2/6 bg-neutral-600 rounded-b-lg">
                    <p className="text-white text-bold text-xl px-4 py-2">Torta bizcocho</p>
                    <p className="text-white text-sm px-4">Como los de la abuela</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContainerCards