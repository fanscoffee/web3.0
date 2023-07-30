import Helmet from 'react-helmet'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Privacy() {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <div className="container m-auto mb-5  mt-[5rem] max-w-[800px] pt-7 lg:mt-[6rem]">
      <Helmet>
        <title>Privacidad - Fans Coffee & Bakery</title>
        <meta name="title" content="Privacidad - Fans Coffee & Bakery" />
        <meta
          name="description"
          content="Una visión general de las políticas de privacidad de Fans Coffee & Bakery con información sobre su sitio web. Al visitar este sitio web, usted acepta las siguientes condiciones de uso."
        />
        <link rel="canonical" href="https://fanscoffeebakery.com/privacidad" />
      </Helmet>
      <div className="mx-4">
        <h1 className="my-5 text-center text-3xl font-bold">
          POLITICAS DE PRIVACIDAD
        </h1>
        <p className="my-4">
          Fans Coffee & Bakery reconoce la necesidad de proteger toda la
          información considerada personal y privada, y requiere como una
          cuestión de política que cualquier y toda la información enviada en
          línea, tales como nombre, empresa, correo electrónico, teléfono, etc.
          sea utilizada únicamente con el propósito expreso de responder a su
          consulta. Toda la información personal es confidencial y sólo se
          comparte sólo se comparte con su consentimiento expreso. No es nuestra
          política enviar no solicitados, y todos los usuarios pueden darse de
          baja de nuestra lista de de correo electrónico en cualquier momento.
        </p>
        <p className="my-4">
          Adicionalmente, es política de Fans Coffee & Bakery prohibir la venta
          y/o cualquier otra distribución de información personal a terceras
          empresas, y Fans Coffee & Bakery hará cumplir todos los acuerdos de
          privacidad para proteger la información de nuestros clientes.
        </p>
        <p className="my-4">
          Fans Coffee & Bakery se compromete a proteger su privacidad y todas
          las personas con cualquier preocupación o pregunta sobre la privacidad
          se les pide que se pongan en contacto con Fans Coffee & Bakery para
          una mayor aclaración.
        </p>
        <div className="my-8 text-center">
          <Link to={'/contacto'}>
            <button className="font-small hover:text-md rounded-full bg-green px-8 py-4 text-sm  text-white transition-all hover:bg-dark-green hover:font-medium">
              CONTACTO
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Privacy
