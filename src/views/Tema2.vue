<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Herramientas postventa

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema2/1.png ')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Las herramientas postventa son los recursos, procedimientos y medios que utilizan las empresas para mantener la comunicación con los clientes después de realizar una compra, atender sus necesidades, resolver inquietudes y fortalecer la relación comercial. Su aplicación permite ofrecer un servicio organizado, oportuno y orientado a la satisfacción del cliente.
            br
            br
            p.mb-0 Estas herramientas facilitan el seguimiento de las compras, la atención de solicitudes, la gestión de garantías, la solución de inconvenientes y la identificación de oportunidades de mejora. Además, permiten recopilar información sobre la experiencia del cliente y utilizarla para mejorar los productos, los servicios y los procesos de atención.
    
    p.mb-5(data-aos="fade-right") Para desarrollar una gestión postventa eficaz, las empresas pueden utilizar las siguientes herramientas:

    .row.justify-content-center.align-items-center.mb-lg-5.mb-4(data-aos="fade-left")
      .col-lg-12
        AcordionA.activ(tipo="a" clase-tarjeta="tarjeta tarjeta--azull").mb-0
          .row.justify-content-center.align-items-center(titulo="Sistema de gestión de relaciones con clientes (CRM)")
            .col-lg-11
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6
                  p.mb-lg-0.mb-4.ps-lg-2 Es una herramienta tecnológica que permite registrar y organizar la información de los clientes, sus compras, preferencias, solicitudes e interacciones con la empresa. Facilita el seguimiento personalizado y ayuda a identificar oportunidades para fortalecer la relación comercial.
                .col-lg-6.col-md-8
                  img(src='@/assets/curso/tema2/2.png')
          .row.justify-content-center.align-items-center(titulo="Encuestas de satisfacción")
            .col-lg-11
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6
                  p.mb-lg-0.mb-4.ps-lg-2 Son instrumentos que permiten conocer la opinión de los clientes sobre los productos adquiridos, la atención recibida y su experiencia de compra. Los resultados ayudan a identificar fortalezas, dificultades y aspectos que requieren mejoras.
                .col-lg-6.col-md-8
                  img(src='@/assets/curso/tema2/3.png')
          .row.justify-content-center.align-items-center(titulo="Canales de atención al cliente")
            .col-lg-11
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6
                  p.mb-lg-0.mb-4.ps-lg-2 Comprenden los medios utilizados para mantener la comunicación después de la compra, como el teléfono, el correo electrónico, la mensajería instantánea, los chats empresariales y las plataformas digitales. Su finalidad es facilitar la atención de consultas, solicitudes y reclamaciones.
                .col-lg-6.col-md-8
                  img(src='@/assets/curso/tema2/4.png')
          .row.justify-content-center.align-items-center(titulo="Sistemas de gestión de peticiones, quejas, reclamos y sugerencias (PQRS)")
            .col-lg-11
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6
                  p.mb-lg-0.mb-4.ps-lg-2 Permiten registrar, clasificar, atender y realizar seguimiento a las solicitudes presentadas por los clientes. Su utilización contribuye a organizar las respuestas, cumplir los procedimientos establecidos y mejorar la calidad del servicio.
                .col-lg-6.col-md-8
                  img(src='@/assets/curso/tema2/5.png')
          .row.justify-content-center.align-items-center(titulo="Programas de fidelización")
            .col-lg-11
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6
                  p.mb-lg-0.mb-4.ps-lg-2 Son estrategias diseñadas para reconocer y fortalecer la relación con los clientes habituales. Pueden incluir acumulación de puntos, beneficios exclusivos, descuentos personalizados y otras acciones que incentiven nuevas compras.
                .col-lg-6.col-md-8
                  img(src='@/assets/curso/tema2/6.png')
          .row.justify-content-center.align-items-center(titulo="Herramientas de seguimiento y evaluación")
            .col-lg-11
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6
                  p.mb-lg-0.mb-4.ps-lg-2 Permiten controlar el cumplimiento de las actividades postventa mediante indicadores como el tiempo de respuesta, la cantidad de solicitudes resueltas, el nivel de satisfacción y la frecuencia de recompra.
                .col-lg-6.col-md-8
                  img(src='@/assets/curso/tema2/7.png')
          .row.justify-content-center.align-items-center(titulo="Sistemas de gestión de garantías y soporte técnico")
            .col-lg-11
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6
                  p.mb-lg-0.mb-4.ps-lg-2 Facilitan el registro y seguimiento de solicitudes relacionadas con fallas, reparaciones, mantenimiento y garantías de productos, de acuerdo con las condiciones aplicables y los derechos del consumidor.
                .col-lg-6.col-md-8
                  img(src='@/assets/curso/tema2/8.png')

    p.mb-0(data-aos="fade-right") La selección de estas herramientas depende del tamaño de la empresa, las características de sus productos o servicios, los recursos disponibles y las necesidades de sus clientes. No todas las organizaciones requieren sistemas tecnológicos complejos; una pequeña empresa puede iniciar con registros organizados, encuestas sencillas y canales de comunicación accesibles.


    separador
    #t_2_1.titulo-segundo.mb-5
      h2 2.1 Importancia del servicio postventa

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-7
        p.mb-4 El servicio postventa es importante porque permite mantener la relación con el cliente después de finalizar la compra. Su propósito no se limita a resolver problemas, sino que también busca garantizar una experiencia satisfactoria, atender nuevas necesidades y generar confianza en los productos y servicios ofrecidos.
        p.mb-4 Cuando una persona adquiere un producto o contrata un servicio, espera que cumpla con las características y condiciones ofrecidas. Sin embargo, durante su utilización pueden surgir inquietudes, dificultades o necesidades adicionales. Por esta razón, es fundamental que la empresa disponga de mecanismos de atención que permitan brindar orientación, solucionar inconvenientes y realizar seguimiento oportuno.
        p.mb-0 Una adecuada gestión postventa contribuye a mejorar la satisfacción del cliente, fortalecer su confianza y aumentar las posibilidades de que vuelva a comprar. También favorece las recomendaciones positivas, ya que los clientes que reciben atención oportuna pueden compartir su experiencia con otras personas.
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema2/9.png')

    p.mb-4(data-aos="fade-right") Entre los principales beneficios del servicio postventa se encuentran:

    .row.mb-5(data-aos="fade-left")
      .col-lg-12
        ul.lista-ul.mb-0
          li.d-flex.mb-2
            i.fas.fa-user
            p.mb-0 #[b Satisfacción del cliente:] permite atender sus necesidades y comprobar si el producto o servicio cumple con sus expectativas.
          li.d-flex.mb-2
            i.fas.fa-user
            p.mb-0 #[b Fidelización:] fortalece la relación comercial y aumenta las posibilidades de que el cliente vuelva a elegir la empresa.
          li.d-flex.mb-2
            i.fas.fa-user
            p.mb-0 #[b Diferenciación frente a la competencia:] proporciona un valor adicional mediante una atención personalizada, responsable y oportuna.
          li.d-flex.mb-2
            i.fas.fa-user
            p.mb-0 #[b Mejoramiento continuo:] facilita la identificación de dificultades y oportunidades para optimizar los productos, servicios y procesos.
          li.d-flex.mb-2
            i.fas.fa-user
            p.mb-0 #[b Fortalecimiento de la reputación:] contribuye a generar confianza y recomendaciones favorables.
          li.d-flex.mb-2
            i.fas.fa-user
            p.mb-0 #[b Identificación de nuevas necesidades:] permite conocer los intereses de los clientes y ofrecer soluciones complementarias cuando resulten pertinentes.
          li.d-flex.mb-0
            i.fas.fa-user
            p.mb-0 #[b Sostenibilidad comercial:] favorece la permanencia de los clientes y puede contribuir a generar ingresos recurrentes.

    p.mb-5(data-aos="fade-right") Es importante comprender que la fidelización no depende únicamente de ofrecer descuentos o promociones. También se construye mediante el cumplimiento de los compromisos, la calidad de los productos, la transparencia en la información y la disposición para solucionar las dificultades que puedan presentarse.

    .bg2.p-lg-5.p-4.mb-5(data-aos="fade-left")
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-5.mb-lg-0.mb-4
          img.img-t.img-a(src='@/assets/curso/tema2/10.svg')
        .col-lg-7
          p.mb-0 Por ejemplo, cuando un cliente compra un teléfono celular y posteriormente recibe orientación sobre su funcionamiento, información clara sobre la garantía y atención oportuna ante alguna dificultad, es más probable que desarrolle confianza hacia el establecimiento comercial.

    p.mb-0(data-aos="fade-right") De esta manera, el servicio postventa se convierte en un elemento fundamental de la gestión comercial, porque permite mantener relaciones duraderas y promover experiencias positivas que beneficien tanto al cliente como a la organización.


    separador
    #t_2_2.titulo-segundo.mb-5
      h2 2.2 Tipos de servicios postventa

    p.mb-4(data-aos="fade-left") Los servicios postventa pueden clasificarse según las necesidades que atienden y los beneficios que ofrecen al cliente después de realizar una compra. Cada tipo cumple una función específica y puede aplicarse de manera independiente o complementaria, dependiendo de las características del producto, del servicio y de las políticas de la organización.

    p.mb-5(data-aos="fade-right") Los principales tipos de servicios postventa son los siguientes

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .tarjetaf.p-lg-5.p-4.mb-0
          SlyderA(tipo="b")(data-aos="zoom-in-left")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Servicio postventa promocional
                    p.mb-4 Comprende las acciones comerciales que buscan mantener el interés del cliente y motivar futuras compras mediante beneficios e incentivos.
                    p.mb-4 Entre las actividades más utilizadas se encuentran los descuentos especiales, programas de puntos, cupones, promociones exclusivas e invitaciones a campañas comerciales.
                    p.mb-4 #[b Por ejemplo], una tienda de ropa puede ofrecer a sus clientes habituales un beneficio especial en su próxima compra como reconocimiento a su preferencia.
                    p.mb-0 Este tipo de servicio contribuye a fortalecer la relación comercial y estimular la recompra, siempre que las promociones sean claras y respondan a las necesidades del cliente.
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema2/11.png")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Servicio postventa de relacionamiento
                    p.mb-4 Incluye las acciones destinadas a mantener una comunicación cercana, respetuosa y personalizada con los clientes, demostrando interés por su satisfacción después de la compra.
                    p.mb-4 Puede desarrollarse mediante mensajes de agradecimiento, felicitaciones en fechas especiales, comunicaciones de seguimiento y consultas sobre la experiencia con el producto o servicio.
                    p.mb-4 #[b Por ejemplo], una empresa de muebles puede contactar al cliente días después de entregar un producto para confirmar que recibió el pedido en las condiciones acordadas y conocer su nivel de satisfacción.
                    p.mb-0 Estas acciones fortalecen la confianza y permiten construir relaciones comerciales basadas en la atención y el reconocimiento de las necesidades individuales.
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema2/16.png")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Servicio postventa de seguridad y garantía
                    p.mb-4 Comprende los mecanismos mediante los cuales la empresa brinda respaldo al cliente frente a posibles fallas, incumplimientos o dificultades relacionadas con los productos y servicios adquiridos.
                    p.mb-4 Incluye la atención de garantías, solicitudes de reparación, cambios, devoluciones y demás soluciones que correspondan según la legislación vigente y las condiciones de la compra.
                    p.mb-4 #[b Por ejemplo], cuando un cliente adquiere una licuadora que presenta una falla de funcionamiento, la empresa debe recibir su solicitud, verificar las condiciones de garantía y gestionar la solución correspondiente.
                    p.mb-0 Este servicio genera confianza porque demuestra el compromiso de la organización con el cumplimiento de sus obligaciones y la protección de los derechos del consumidor.
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema2/15.png")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Servicio postventa de mantenimiento y soporte técnico
                    p.mb-4 Está orientado a conservar el funcionamiento adecuado de los productos y brindar asistencia cuando se presentan dificultades durante su utilización.
                    p.mb-4 Puede incluir mantenimiento preventivo, mantenimiento correctivo, revisiones técnicas, actualizaciones, reparaciones y orientación sobre el uso adecuado de los productos.
                    p.mb-4 #[b Por ejemplo], una empresa comercializadora de computadores puede ofrecer servicios de revisión, limpieza de equipos, actualización de programas y asistencia técnica a sus clientes.
                    p.mb-0 Este servicio resulta especialmente importante para productos que requieren mantenimiento periódico o conocimientos técnicos para su funcionamiento.
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema2/14.png")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Servicio postventa de información y orientación
                    p.mb-4 Consiste en proporcionar al cliente información útil para utilizar correctamente el producto o aprovechar las características del servicio adquirido.
                    p.mb-4 Comprende la entrega de manuales, recomendaciones de uso, instrucciones de instalación, respuestas a preguntas frecuentes y orientación sobre los canales de atención disponibles.
                    p.mb-4 #[b Por ejemplo], una empresa que comercializa equipos de oficina puede ofrecer una guía de instalación y recomendaciones para el mantenimiento básico de una impresora.
                    p.mb-0 Este acompañamiento contribuye a prevenir dificultades, mejorar la experiencia de uso y disminuir solicitudes que pueden resolverse mediante información clara y oportuna.
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema2/13.png")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Servicio postventa de seguimiento de satisfacción
                    p.mb-4 Comprende las actividades destinadas a conocer la experiencia del cliente después de utilizar el producto o servicio.
                    p.mb-4 Se desarrolla mediante encuestas, entrevistas breves, llamadas de seguimiento y otros mecanismos que permitan recopilar opiniones, sugerencias y comentarios.
                    p.mb-4 #[b Por ejemplo], un establecimiento comercial puede enviar una encuesta después de entregar un pedido para conocer si el producto cumplió con las expectativas y si la atención recibida fue satisfactoria.
                    p.mb-0 La información recopilada permite identificar oportunidades de mejora y tomar decisiones orientadas a fortalecer la calidad del servicio.
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema2/12.png")

    p.mb-5(data-aos="fade-right") Los diferentes tipos de servicio postventa pueden complementarse dentro de una misma organización. Por ejemplo, una empresa de electrodomésticos puede brindar orientación sobre el uso de un producto, ofrecer mantenimiento, atender garantías y desarrollar programas de fidelización. Lo importante es que cada acción responda a una necesidad real del cliente y se encuentre articulada con las políticas organizacionales.

    .tit-doble.mb-5(data-aos="fade-left")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/ico.svg')")
      h3 Aplicación práctica del servicio postventa

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.d-none.d-lg-block
        img.mb-0(src="@/assets/curso/tema2/17.png")
      .col-lg-7
        .bg9.p-4.cen
          p.mb-4 Una empresa comercializadora de computadores recibe la comunicación de un cliente que adquirió un equipo y presenta dificultades para configurarlo. El asesor consulta el registro de compra, identifica la necesidad y brinda orientación inicial. Como la dificultad continúa, remite el caso al área de soporte técnico y comunica al cliente el procedimiento que debe seguir.
          p.mb-0 Después de la asistencia, el asesor confirma si el computador funciona correctamente y registra el resultado de la atención. Finalmente, la empresa analiza el caso para determinar si es necesario mejorar la información que entrega a los compradores.

    p.mb-4(data-aos="fade-left") Esta situación permite comprender cómo las herramientas, los tipos de servicio y las fases postventa se articulan para atender las necesidades del cliente, cumplir los procedimientos de la organización y fortalecer la calidad de la atención comercial.

    p.mb-0(data-aos="fade-right") El servicio postventa no termina con la solución de una solicitud. También implica mantener registros adecuados, ofrecer acompañamiento, evaluar la satisfacción y utilizar la información obtenida para mejorar continuamente los procesos comerciales. Por ello, el asesor comercial cumple un papel fundamental en la construcción de relaciones de confianza y en el cumplimiento de los compromisos adquiridos por la empresa.



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
