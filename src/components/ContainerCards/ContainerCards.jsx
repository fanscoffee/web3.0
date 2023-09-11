function ContainerCards() {
  return (
    <div className="p-5">
      <p className="text-4xl font-semibold">Recomendados</p>
      <div className="mt-2 flex h-80 w-auto items-center space-x-6 overflow-x-auto">
        <div className="h-72 w-60 flex-none rounded-lg shadow-md">
          <div className="h-4/6 w-full rounded-t-lg bg-[url(/images/croissant.jpeg)] bg-cover bg-center" />
          <div className=" h-2/6 w-full rounded-b-lg bg-beige">
            <p className="px-4 py-2 text-center text-xl font-bold">Croissant</p>
            <p className="px-4 text-sm ">
              Suave y tierno se combinan para crear la experiencia perfecta.
            </p>
          </div>
        </div>
        <div className="h-72 w-60 flex-none rounded-lg shadow-md">
          <div className="h-4/6 w-full rounded-t-lg bg-[url(/images/batidos.jpeg)] bg-cover bg-center" />
          <div className=" h-2/6 w-full rounded-b-lg bg-beige">
            <p className="px-4 py-2 text-center text-xl font-bold">Batidos</p>
            <p className="px-4 text-sm ">
              Una explosión de frescura y sabor en cada sorbo.
            </p>
          </div>
        </div>

        <div className="h-72 w-60 flex-none rounded-lg shadow-md">
          <div className="h-4/6 w-full rounded-t-lg bg-[url(/images/tartaleta.jpg)] bg-cover bg-center" />
          <div className=" h-2/6 w-full rounded-b-lg bg-beige">
            <p className="px-4 py-2 text-center text-xl font-bold">
              Tres Leches
            </p>
            <p className="px-4 text-sm ">La dulzura suprema en cada bocado.</p>
          </div>
        </div>
        <div className="h-72 w-60 flex-none rounded-lg shadow-md">
          <div className="h-4/6 w-full rounded-t-lg bg-[url(/images/cafe.jpeg)] bg-cover bg-center" />
          <div className=" h-2/6 w-full rounded-b-lg bg-beige">
            <p className="px-4 py-2 text-center text-xl font-bold">Cafés</p>
            <p className="px-4 text-sm ">Sabor inigualable en cada taza.</p>
          </div>
        </div>
        <div className="h-72 w-60 flex-none rounded-lg shadow-md">
          <div className="h-4/6 w-full rounded-t-lg bg-[url(/images/tarta-queso.jpeg)] bg-cover bg-center" />
          <div className=" h-2/6 w-full rounded-b-lg bg-beige">
            <p className="px-4 py-2 text-center text-xl font-bold">
              Tarta de Queso
            </p>
            <p className="px-4 text-sm ">
              El equilibrio perfecto de suavidad y sabor.
            </p>
          </div>
        </div>
        <div className="h-72 w-60 flex-none rounded-lg shadow-md">
          <div className="h-4/6 w-full rounded-t-lg bg-[url(/images/palmeras-chocolate.jpeg)] bg-cover bg-center" />
          <div className=" h-2/6 w-full rounded-b-lg bg-beige">
            <p className="px-4 py-2 text-center text-lg font-bold">
              Palmeritas de chocolate
            </p>
            <p className="px-4 text-sm ">
              Cubierta de chocolate, un placer para los sentidos.
            </p>
          </div>
        </div>
        <div className="h-72 w-60 flex-none rounded-lg shadow-md">
          <div className="h-4/6 w-full rounded-t-lg bg-[url(/images/empanada.jpeg)] bg-cover bg-center" />
          <div className=" h-2/6 w-full rounded-b-lg bg-beige">
            <p className="px-4 py-2 text-center text-xl font-bold">Empanadas</p>
            <p className="px-4 text-sm ">Un viaje en cada bocado.</p>
          </div>
        </div>

        <div className="h-72 w-60 flex-none rounded-lg shadow-md">
          <div className="h-4/6 w-full rounded-t-lg bg-[url(/images/tostadas.jpeg)] bg-cover bg-center" />
          <div className=" h-2/6 w-full rounded-b-lg bg-beige">
            <p className="px-4 py-2 text-center text-xl font-bold">Tostadas</p>
            <p className="px-4 text-sm ">
              Irresistible frescura y sabor sobre un pan artesanal.
            </p>
          </div>
        </div>

        <div className="h-72 w-60 flex-none rounded-lg shadow-md">
          <div className="h-4/6 w-full rounded-t-lg bg-[url(/images/cachito.jpeg)] bg-cover bg-center" />
          <div className=" h-2/6 w-full rounded-b-lg bg-beige">
            <p className="px-4 py-2 text-center text-xl font-bold">Cachito</p>
            <p className="px-4 text-sm ">
              Un sorbo de energía y sabor en cada taza.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContainerCards
