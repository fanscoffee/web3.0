import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-700 dark:text-neutral-200 lg:text-left">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        <div className="mr-12 hidden lg:block">
          <span>Conéctate con nosotros en las redes sociales:</span>
        </div>

        <div className="flex justify-center">
          <a
            href="https://www.facebook.com/fanscoffeebakery/"
            className="mr-6 text-neutral-600 hover:text-green dark:text-neutral-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>

          <a
            href="https://www.instagram.com/fanscoffeeandbakery/"
            className="mr-6 text-neutral-600 hover:text-green dark:text-neutral-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <h6 className="mb-4 flex justify-center font-semibold uppercase">
              Productos
            </h6>
            <p className="mb-4">
              <Link
                to="/panaderia"
                className="text-neutral-600 hover:text-green dark:text-neutral-200"
              >
                Panadería
              </Link>
            </p>
            <p className="mb-4">
              <Link
                to="/pasteleria"
                className="text-neutral-600 hover:text-green dark:text-neutral-200"
              >
                Pastelería
              </Link>
            </p>
            <p className="mb-4">
              <Link
                to="/cafeteria"
                className="text-neutral-600 hover:text-green dark:text-neutral-200"
              >
                Cafetería
              </Link>
            </p>
          </div>
          <div className="text-center">
            <h6 className="mb-4 flex justify-center font-semibold uppercase">
              Enlaces útiles
            </h6>
            <p className="mb-4">
              <Link
                to="/nosotros"
                className="text-neutral-600 hover:text-green dark:text-neutral-200"
              >
                Nosotros
              </Link>
            </p>
            <p className="mb-4">
              <Link
                to="/contacto"
                className="text-neutral-600 hover:text-green dark:text-neutral-200"
              >
                Contacto
              </Link>
            </p>
          </div>

          <div className="text-center">
            <h6 className="mb-4 flex justify-center font-semibold uppercase">
              Contacto Tradicional
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
              Doctor Esquerdo 180, 28007, Madrid
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clip-rule="evenodd"
                />
              </svg>
              <a href="tel:+34628984413" className="hover:text-green">
                + 34 628 984 413
              </a>
            </p>
          </div>
          <div className="ps-auto text-center md:ps-0">
            <iframe
              title="google"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.315829639117!2d-3.6768293491456254!3d40.40185366436702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4227f0d51d1505%3A0xbfa018432bd3d379!2sFans%20Coffee%20%26%20Bakery!5e0!3m2!1ses!2ses!4v1620941613287!5m2!1ses!2ses"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-rows-1 bg-neutral-200 p-6 text-center dark:bg-neutral-700 md:grid-cols-2 md:text-left">
        <span className="">
          <Link to="/privacidad" className="hover:text-green">
            Politicas de privacidad
          </Link>{' '}
          |{' '}
          <Link to="/legal" className="hover:text-green">
            Aviso Legal
          </Link>
        </span>
        <span className="">
          © 2023 Copyright FANS COFFEE FRIENDS S.L.L. Todos los derechos
          reservados.
        </span>
      </div>
    </footer>
  )
}

export default Footer
