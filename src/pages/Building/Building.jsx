import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

function Building() {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <div className="text-center">
      <Helmet>
        <title>En Construcción - Fans Coffee & Bakery</title>
        <meta name="title" content="En construcción - Fans Coffee & Bakery" />
        <meta
          name="description"
          content="Nuestra página esta bajo construcción, sabiendo esto aún puedes contactarte con nosotros a través de nuestra página de contacto rellenando el formulario y te atenderemos tan pronto como sea posible."
        />
      </Helmet>
      <h1 className="mx-auto mt-[5rem] pt-14 text-3xl font-bold">
        En Construcción
      </h1>
      <p className="mx-auto mt-5 max-w-lg text-xl">
        Nuestra página esta bajo construcción, sabiendo esto aún puedes
        contactarte con nosotros a través de nuestra página de contacto
        rellenando el formulario y te atenderemos tan pronto como sea posible.
      </p>

      <div className="container m-auto mb-5  max-w-[600px] ">
        <Link to="/">
          <img src="https://i.imgur.com/qIufhof.png" alt="En construcción" />
        </Link>
      </div>
    </div>
  )
}

export default Building
