import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

function NotFound() {
  return (
    <div className="text-center">
      <Header />
      <Helmet>
        <title>Error 404 - Fans Coffee & Bakery</title>
        <meta name="title" content="Error 404 - Fans Coffee & Bakery" />
        <meta
          name="description"
          content="Si ves este mensaje significa que no has elegido el camino correcto, debes volver a la página de inicio."
        />
      </Helmet>
      <h1 className="mx-auto mt-[5rem] pt-14 text-3xl font-bold">Error 404</h1>
      <p className="mx-auto mt-5 max-w-lg text-xl">
        Lo sentimos, no hemos podido encontrar la página que busca. Tal vez haya
        escrito mal la URL? Asegúrese de revisar su ortografía.
      </p>

      <div className="container m-auto mb-5  max-w-[800px] ">
        <Link to="/">
          <img
            className="notFound__img"
            src="https://i.imgur.com/lDJZJoX.png"
            alt="404"
          />
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default NotFound
