import Helmet from 'react-helmet'

function Privacy() {
  return (
    <div className="container m-auto mt-[5rem]  lg:mt-[8rem] mb-5 max-w-[800px] pt-7">
      <Helmet>
        <title>Privacy Policy - Fans Coffee Bakery</title>
        <meta name="title" content="Privacy Policy - Fans Coffee & Bakery" />
        <meta
          name="description"
          content="An overview of the privacy policies of Fans Coffee & Bakery with information on their website. By visiting this website, you accept following Terms of Use"
        />
        <link rel="canonical" href="https://fanscoffeebakery.com/privacy" />
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
        <p>
          Fans Coffee & Bakery se compromete a proteger su privacidad y todas
          las personas con cualquier preocupación o pregunta sobre la privacidad
          se les pide que se pongan en contacto con Fans Coffee & Bakery para
          una mayor aclaración.
        </p>
        <div className="my-8 text-center">
          <button className="rounded-full bg-gradient-to-r from-dark-green to-green px-8 py-4 text-white transition-all duration-300 hover:scale-[1.1] hover:from-green hover:to-dark-green">
            Contacto
          </button>
        </div>
      </div>
    </div>
  )
}

export default Privacy
