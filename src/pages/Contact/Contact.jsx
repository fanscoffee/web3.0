import { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import emailjs from 'emailjs-com'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

export default function Contact() {
  const [Check, setCheck] = useState(false)
  const [value, setValue] = useState()

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        e.target,
        import.meta.env.VITE_EMAIL_USER,
      )
      .then(
        (result) => {
          throw result.text
        },
        (error) => {
          throw error.text
        },
      )
    e.target.reset()
  }
  const check = () => {
    const agree = document.querySelector('#contactFormAgree')

    const status = !!agree.checked
    setCheck(status)
  }

  const showAlert = () => {
    if (Check) {
      Swal.fire({
        title: 'Confirmado',
        text: 'Hemos recibido tu mensaje, revisaremos la información y estaremos en contacto pronto.',
        icon: 'success',
        button: 'OK',
        timer: '3000',
        timerProgressBar: 'true',
      })
    } else {
      Swal.fire({
        title: 'Espera',
        text: 'Tienes que terminar de rellenar la información.',
        icon: 'info',
        button: 'OK',
        timer: '3000',
        timerProgressBar: 'true',
      })
    }
  }
  return (
    <div className="mb-5  mt-[5rem] lg:mt-[6rem]">
      <Helmet>
        <title>Contacto General - Fans Coffee</title>
        <meta name="title" content="Contacto General - Fans Coffee" />
        <meta
          name="description"
          content="Pagina de contacto donde podrás encontrar la información para comunicarte con nosotros."
        />
        <link rel="canonical" href="https://fanscoffee.es/contacto" />
      </Helmet>
      <div className="grid-1 grid gap-8 md:grid-cols-2">
        <form
          onSubmit={sendEmail}
          className="mx-6 py-10 text-center md:text-left"
        >
          <div className="mb-3">
            <h3 className="mt-6 text-xl font-extrabold">
              FORMULARIO DE CONTACTO
            </h3>
            <div className="mb 3">
              <label htmlFor="tipo" className="text-md my-2 block font-medium">
                Tipo
                <select
                  name="tipo"
                  id="tipo"
                  defaultChecked
                  className="focus:shadow-outline w-full rounded border py-1 leading-tight shadow focus:outline-none"
                >
                  <option value="consulta">Consulta</option>
                  <option value="reserva">Reserva</option>
                </select>
              </label>
            </div>
            <div className="mb-3">
              <label
                htmlFor="nombre"
                className="text-md my-2 block font-medium"
              >
                Ingresa tu nombre
                <input
                  type="text"
                  name="nombre"
                  className="focus:shadow-outline w-full rounded border p-1 leading-tight shadow focus:outline-none"
                  id="nombre"
                  autoComplete="off"
                  placeholder="Nombre"
                  required
                />
              </label>
            </div>
            <div className="mb-3">
              <label
                htmlFor="telefono"
                className="text-md my-2 block font-medium"
              >
                Ingresa tu movíl
                <PhoneInput
                  international
                  id="telefono"
                  autoComplete="off"
                  defaultCountry="ES"
                  value={value}
                  onChange={setValue}
                  name="telefono"
                  className="focus:shadow-outline w-full rounded border bg-white p-2 leading-tight shadow focus:outline-none"
                />
              </label>
            </div>
            <label htmlFor="email" className="text-md my-2 block font-medium">
              Ingresa tu correo electrónico
              <input
                type="email"
                className="focus:shadow-outline w-full  rounded border p-1 leading-tight shadow  focus:outline-none"
                id="email"
                aria-describedby="emailHelp"
                name="email"
                autoComplete="off"
                placeholder="Email"
                required
              />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="mensaje" className="text-md my-2 block font-medium">
              ¿Podrías proporcionarnos más información al respecto?
              <textarea
                className="focus:shadow-outline w-full  rounded border p-1 leading-tight shadow focus:outline-none"
                autoComplete="off"
                id="mensaje"
                name="mensaje"
                rows="3"
                placeholder="Información"
                required
              />
            </label>
          </div>

          <div className="mb-3">
            <input
              type="checkbox"
              value="1"
              className="text-md indeterminate:bg-gray-300 mx-1 my-2 font-medium default:ring-2 checked:bg-blue-500"
              id="contactFormAgree"
              onChange={check}
              required
            />
            <label className="mx-1" htmlFor="contactFormAgree">
              Doy mi consentimiento para el tratamiento de los datos personales
              que facilito. He leído y acepto la{' '}
              <Link
                to="/privacidad"
                className="text-green hover:text-dark-green dark:text-green"
              >
                Política de privacidad
              </Link>
              .
            </label>
          </div>

          <button
            type="submit"
            className="font-small hover:text-md rounded-full bg-green px-8 py-4 text-sm text-white transition-all hover:bg-dark-green hover:font-medium"
            onClick={showAlert}
          >
            ENVIAR
          </button>
        </form>

        <div className="mx-6 py-10">
          <h3 className="mt-6 text-xl font-extrabold">
            INFORMACIÓN DE CONTACTO
          </h3>
          <p className="mt-2">
            Si deseas contactar con nosotros, puedes hacerlo de las formas
            habituales.
          </p>
          <p className="mt-2">
            <strong>Dirección:</strong> Calle Doctor Esquerdo 180, 28007, Madrid
          </p>
          <p className="my-2 py-2">
            <strong>Teléfono:</strong>
            <a href="tel:+34628984413">(+34) 628 984 413</a>
          </p>
          <iframe
            title="google"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.315829639117!2d-3.6768293491456254!3d40.40185366436702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4227f0d51d1505%3A0xbfa018432bd3d379!2sFans%20Coffee%20%26%20Bakery!5e0!3m2!1ses!2ses!4v1620941613287!5m2!1ses!2ses"
            style={{ border: 0, borderRadius: 10 }}
            allowFullScreen=""
            loading="lazy"
            className="my-2"
          />
        </div>
      </div>
    </div>
  )
}
