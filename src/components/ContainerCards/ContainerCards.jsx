function ContainerCards() {
  return (
    <div className="p-5">
      <p className="text-4xl font-semibold">Recomendados</p>
      <div className="mt-2 flex h-80 w-auto items-center space-x-6 overflow-x-auto">
        <div className="h-72 w-60 flex-none rounded-lg shadow-md">
          <div className="h-4/6 w-full rounded-t-lg bg-[url(/images/croasant.jpg)] bg-cover bg-center"></div>
          <div className=" h-2/6 w-full rounded-b-lg ">
            <p className="px-4 py-2 text-xl font-bold ">Croisant</p>
            <p className="px-4 text-sm ">Hecho con masa madre</p>
          </div>
        </div>
        <div className="h-72 w-60 flex-none rounded-lg shadow-md">
          <div className="h-4/6 w-full rounded-t-lg bg-[url(/images/malteada.jpg)] bg-cover bg-center"></div>
          <div className=" h-2/6 w-full rounded-b-lg ">
            <p className="px-4 py-2 text-xl font-bold ">Malteadas</p>
            <p className="px-4 text-sm ">Las más refrescantes</p>
          </div>
        </div>

        <div className="h-72 w-60 flex-none rounded-lg shadow-md">
          <div className="h-4/6 w-full rounded-t-lg bg-[url(/images/tartaleta.jpg)] bg-cover bg-center"></div>
          <div className=" h-2/6 w-full rounded-b-lg ">
            <p className="px-4 py-2 text-xl font-bold ">Tartaleta</p>
            <p className="px-4 text-sm ">Como esta no hay dos</p>
          </div>
        </div>
        <div className="h-72 w-60 flex-none rounded-lg shadow-md">
          <div className="h-4/6 w-full rounded-t-lg bg-[url(/images/coffee.jpg)] bg-cover bg-center"></div>
          <div className=" h-2/6 w-full rounded-b-lg ">
            <p className="px-4 py-2 text-xl font-bold ">Cafes</p>
            <p className="px-4 text-sm ">De clase mundial</p>
          </div>
        </div>
        <div className="h-72 w-60 flex-none rounded-lg shadow-md">
          <div className="h-4/6 w-full rounded-t-lg bg-[url(/images/torta_chocolate.jpg)] bg-cover bg-center"></div>
          <div className=" h-2/6 w-full rounded-b-lg ">
            <p className="px-4 py-2 text-xl font-bold ">Pastel de Chocolate</p>
            <p className="px-4 text-sm ">Hara volar tu cabeza</p>
          </div>
        </div>
        <div className="h-72 w-60 flex-none rounded-lg shadow-md">
          <div className="h-4/6 w-full rounded-t-lg bg-[url(/images/donout.jpg)] bg-cover bg-center"></div>
          <div className=" h-2/6 w-full rounded-b-lg ">
            <p className="px-4 py-2 text-xl font-bold ">Donas</p>
            <p className="px-4 text-sm ">Esponjosas</p>
          </div>
        </div>
        <div className="h-72 w-60 flex-none rounded-lg shadow-md">
          <div className="h-4/6 w-full rounded-t-lg bg-[url(/images/empanada.jpg)] bg-cover bg-center"></div>
          <div className=" h-2/6 w-full rounded-b-lg ">
            <p className="px-4 py-2 text-xl font-bold ">Empanadas</p>
            <p className="px-4 text-sm ">Variedad de rellenos</p>
          </div>
        </div>

        <div className="h-72 w-60 flex-none rounded-lg shadow-md">
          <div className="h-4/6 w-full rounded-t-lg bg-[url(/images/torta.jpg)] bg-cover bg-center"></div>
          <div className=" h-2/6 w-full rounded-b-lg ">
            <p className="px-4 py-2 text-xl font-bold ">Torta bizcocho</p>
            <p className="px-4 text-sm ">Como los de la abuela</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContainerCards
