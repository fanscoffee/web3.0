import { Link } from 'react-router-dom'
import { BsInstagram } from 'react-icons/bs'

function Footer() {
  return (
    <footer className="text-center text-neutral-600 dark:text-neutral-200">
      <div className="flex items-center justify-center">
        <a
          href="https://www.instagram.com/fanscoffee.es/"
          className="text-neutral-600 hover:text-green dark:text-neutral-200"
        >
          <BsInstagram className="text-3xl" />
        </a>
      </div>

      <div className="mx-auto py-10">
        <div className="grid-1 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
            <p className="mb-4">
              <Link
                to="/unete"
                className="text-neutral-600 hover:text-green dark:text-neutral-200"
              >
                Trabaja con nosotros
              </Link>
            </p>
          </div>

          <div className="pl-12 text-center">
            <iframe
              title="google"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.315829639117!2d-3.6768293491456254!3d40.40185366436702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4227f0d51d1505%3A0xbfa018432bd3d379!2sFans%20Coffee%20%26%20Bakery!5e0!3m2!1ses!2ses!4v1620941613287!5m2!1ses!2ses"
              style={{ border: 0, borderRadius: 10 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-rows-1  p-6 text-center md:grid-cols-2 md:text-left">
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
