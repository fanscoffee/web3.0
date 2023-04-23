import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import emailjs from 'emailjs-com'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import Swal from 'sweetalert2'

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
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        },
      )
    e.target.reset()
  }
  const check = () => {
    let agree = document.querySelector('#contactFormAgree')

    let status = agree.checked ? true : false
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
    <div className="my-3">
      <Helmet>
        <title>Contacto General - Fans Coffee & Bakery</title>
        <meta name="title" content="Contacto General - Fans Coffee & Bakery" />
        <meta
          name="description"
          content="Pagina de contacto donde podras encontrar la información para comunicarte con nosotros."
        />
        <link rel="canonical" href="https://fanscoffeebakery.com/contacto" />
      </Helmet>
      <div className="grid-1 grid gap-8 md:grid-cols-2">
        <form
          onSubmit={sendEmail}
          className="mx-6 py-10 text-center md:text-left"
        >
          <div className="mb-3">
            <h3 className="text-xl font-extrabold mt-6">
              FORMULARIO DE CONTACTO
            </h3>
            <div className="mb-3">
              <label
                htmlFor="nombre"
                className="block text-md font-medium my-2"
              >
                Ingresa tu nombre
              </label>
              <input
                type="text"
                name="nombre"
                className="border rounded appearance-none shadow w-full py-1 leading-tight focus:outline-none focus:shadow-outline"
                id="nombre"
                autoComplete="off"
                placeholder="Nombre"
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="telefono"
                className="block text-md font-medium my-2"
              >
                Ingresa tu movíl
              </label>

              <PhoneInput
                international
                autoComplete="off"
                defaultCountry="ES"
                value={value}
                onChange={setValue}
                name="telefono"
                className="border rounded appearance-none shadow w-full py-1 leading-tight focus:outline-none  focus:shadow-outline"
              />
            </div>
            <label htmlFor="email" className="block text-md font-medium my-2">
              Ingresa tu correo electrónico
            </label>
            <input
              type="email"
              className="border rounded appearance-none shadow w-full py-1 leading-tight focus:outline-none  focus:shadow-outline"
              id="email"
              aria-describedby="emailHelp"
              name="email"
              autoComplete="off"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="mensaje" className="block text-md font-medium my-2">
              Ingresa tu consulta
            </label>
            <textarea
              className="border rounded appearance-none shadow w-full py-1 leading-tight focus:outline-none focus:shadow-outline"
              autoComplete="off"
              id="mensaje"
              name="mensaje"
              rows="3"
              placeholder="Consulta"
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <input
              type="checkbox"
              value="1"
              className="text-md font-medium my-2 mx-1 checked:bg-blue-500 indeterminate:bg-gray-300 default:ring-2"
              id="contactFormAgree"
              onChange={check}
              required
            />
            <label className="mx-1" htmlFor="contactFormAgree">
              Doy mi consentimiento para el tratamiento de los datos personales
              que facilito. He leído y acepto la{' '}
              <a
                href="./aviso-legal"
                className="text-emerald-600 hover:text-emerald-500 dark:text-emerald-400"
              >
                Política de privacidad
              </a>
              .
            </label>
          </div>

          <button
            type="submit"
            className="px-8 py-4 font-small text-sm text-white rounded-full bg-emerald-700  hover:bg-emerald-800 hover:text-md hover:font-medium transition-all"
            onClick={showAlert}
          >
            ENVIAR
          </button>
        </form>

        <div className="mx-6 py-10">
          <h3 className="text-xl font-extrabold mt-6">
            INFORMACIÓN DE CONTACTO{' '}
          </h3>
          <p className="mt-2">
            Si deseas contactar con nosotros, puedes hacerlo de las formas
            habituales.{' '}
          </p>
          <p className="mt-2">
            <strong>Dirección:</strong> Calle Doctor Esquerdo 180, 28007, Madrid
          </p>
          <iframe
            title="google"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.315829639117!2d-3.6768293491456254!3d40.40185366436702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4227f0d51d1505%3A0xbfa018432bd3d379!2sFans%20Coffee%20%26%20Bakery!5e0!3m2!1ses!2ses!4v1620941613287!5m2!1ses!2ses"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="my-2"
          ></iframe>

          <p className="border-y my-2 py-2">
            <strong>Teléfono:</strong>{' '}
            <a href="tel:+34628984413">(+34) 628 984 413</a>
          </p>
        </div>
      </div>
    </div>
  )
}
