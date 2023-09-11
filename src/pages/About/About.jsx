import { useEffect } from 'react'

function About() {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <div className="text-center">
      <h1 className="mx-auto mt-[5rem] pt-14 text-3xl font-bold">Nosotros</h1>
      <p className="mx-auto mt-5 max-w-xl text-xl">
        Somos más que una panadería, somos una experiencia. Nos enorgullece ser
        tu lugar de encuentro para disfrutar de productos artesanales de alta
        calidad en un ambiente único y acogedor.
      </p>
      <p className="mx-auto mt-5 max-w-xl text-xl">
        Nuestro pan, elaborado con masa madre, es el corazón de nuestra
        panadería
      </p>
      <p className="mx-auto mt-5 max-w-xl text-xl">
        Pero no nos detenemos ahí, nuestros postres son una deliciosa mezcla de
        creatividad y calidad que deleitarán tus sentidos.
      </p>
      <p className="mx-auto mt-5 max-w-xl text-xl">
        Nuestro espacio refleja nuestra pasión por lo simple y lo divertido. La
        decoración crea un ambiente relajante para que puedas disfrutar de tus
        alimentos y bebidas favoritas en paz. Además, tenemos una sección
        dedicada a los personajes famosos de Los Simpsons.
      </p>
    </div>
  )
}

export default About
