import { Helmet } from 'react-helmet'

function Join() {
  return (
    <div className="text-center">
      <Helmet>
        <title>Trabaja con nosotros - Fans Coffee & Bakery</title>
        <meta
          name="title"
          content="Trabaja con nosotros - Fans Coffee & Bakery"
        />
        <meta
          name="description"
          content="Si eres una persona responsable, proactiva y puedes adaptarte a nuevas situaciones, queremos conocerte."
        />
      </Helmet>
      <h1 className="mx-auto mt-[5rem] pt-14 text-3xl font-bold">
        Trabaja con nosotros
      </h1>
      <p className="mx-auto mt-5 max-w-xl text-xl">
        ¡Únete a nuestro equipo y forma parte de una familia apasionada por la
        panadería y la excelencia culinaria!
      </p>
      <p className="mx-auto mt-5 max-w-xl text-xl">
        En Fans Coffee & Bakery (En adelante FANS), no solo creamos de
        deliciosos productos y bebidas, sino que también cultivamos experiencias
        inolvidables para nuestros clientes. Sabemos que nuestros empleados son
        la base de nuestro éxito, y es por eso que buscamos personas
        comprometidas, creativas y llenas de energía para unirse a nuestra
        familia.
      </p>

      <p className="mx-auto mt-5 max-w-xl text-xl">
        Nuestra historia comenzó con la pasión de una persona que soñaba con
        llevar la auténtica tradición panadera a cada rincón de la ciudad. A lo
        largo de los años, hemos crecido y evolucionado, pero nuestro espíritu
        sigue siendo el mismo: ofrecer productos que deleiten los sentidos y
        brinden una cálida hospitalidad.
      </p>

      <p className="mx-auto mt-5 max-w-xl text-xl">
        En FANS, no solo encontrarás un lugar de trabajo, sino un ambiente en el
        que tus habilidades y talentos serán valorados y nutridos. Creemos en el
        poder de la creatividad y la innovación, y siempre estamos abiertos a
        nuevas ideas y enfoques frescos.
      </p>

      <p className="mx-auto mt-5 max-w-xl text-xl">
        Valoramos a nuestros empleados como individuos únicos, y estamos
        comprometidos a brindar un entorno inclusivo y respetuoso. Creemos que
        la diversidad de experiencias y perspectivas enriquece nuestro equipo y
        nos ayuda a crecer como empresa.
      </p>

      <p className="mx-auto mt-5 max-w-xl text-xl">
        Además de formar parte de un equipo dinámico y apasionado, ofrecemos
        beneficios y oportunidades de desarrollo para ayudarte a alcanzar tus
        metas profesionales y personales. Queremos que te sientas orgulloso de
        formar parte de FANS y que disfrutes cada día que pases con nosotros.
      </p>

      <p className="mx-auto mt-5 max-w-xl text-xl">
        Si te apasiona la panadería, la repostería, el café y la atención al
        cliente, si buscas un entorno donde tus habilidades sean valoradas y tus
        ideas escuchadas, ¡entonces estás en el lugar correcto! ¡Esperamos
        conocerte y compartir juntos el placer de crear momentos especiales para
        nuestros clientes!
      </p>

      <p className="mx-auto mt-5 max-w-xl text-xl">
        ¡Únete a FANS y sé parte de nuestra historia de éxito!
      </p>

      <p className="mx-auto my-7 mt-5 max-w-xl text-xl font-bold">
        ¡Bienvenido/a a nuestro equipo!
      </p>

      <div className="container m-auto mb-5  max-w-[800px] ">
        <a
          href="mailto:fanscoffee22@gmail.com?subject=CV enviado desde WEB - [Nombre]&body=Recuerda adjuntar tu CV y contarnos un poco sobre ti."
          className="font-small hover:text-md rounded-full bg-green px-8 py-4 text-sm text-white transition-all hover:bg-dark-green hover:font-medium"
        >
          ÚNETE
        </a>
      </div>
    </div>
  )
}

export default Join
