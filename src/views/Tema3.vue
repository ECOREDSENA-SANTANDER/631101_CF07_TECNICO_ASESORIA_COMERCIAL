<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Buenas prácticas para la atención al cliente en el servicio postventa

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-lg-12
        .bloque-texto-g.color-secund.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema3 /1.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-0 La atención postventa requiere que el asesor comercial actúe con responsabilidad, profesionalismo y respeto frente a las diferentes situaciones que pueden presentarse después de una compra. Para ofrecer un servicio de calidad, es fundamental que conozca los procedimientos establecidos por la empresa y desarrolle habilidades de comunicación, escucha activa y resolución de conflictos, que le permitan atender las necesidades del cliente y proporcionar respuestas claras y oportunas.
            br 
            br 
            p.mb-0 Las buenas prácticas en el servicio postventa comprenden los comportamientos y las acciones que orientan la atención al cliente, especialmente cuando se presentan inquietudes, solicitudes o inconformidades relacionadas con los productos o servicios adquiridos. Su aplicación contribuye a prevenir malentendidos, facilitar la solución de dificultades y fortalecer la confianza del cliente en la empresa.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-7
        p.mb-4 Cuando un cliente manifiesta insatisfacción por las condiciones del producto recibido, retrasos en la entrega o dificultades con la solución de una solicitud, el asesor debe mantener una actitud respetuosa y orientada a la solución. Para ello, es importante permitir que el cliente explique su situación sin interrupciones, comprender el motivo de su inconformidad y evitar expresiones que puedan generar discusiones o aumentar el conflicto.
        p.mb-0 Para complementar los conocimientos desarrollados en este componente formativo, se invita a visitar el pódcast; un recurso que permitirá comprender la importancia de gestionar adecuadamente las inconformidades, mantener una comunicación oportuna y fortalecer la relación con el cliente mediante un servicio postventa responsable y orientado a la solución.
      .col-lg-5.d-none.d-lg-block
        img.mb-0(src="@/assets/curso/tema3/2.png")

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        img(src='@/assets/curso/tema3/3.svg')
        .row.justify-content-center.g-0
          .col-lg-12
            .tarjeta.color-primario.p-4.rounded-0.h-100
              .tarjeta.bg-white.p-4.p-lg-5.h-100
                TarjetaAudio.color-acento-botones.mb-0(
                texto="PÓDCAST: Cómo recuperar la confianza de un cliente después de una mala experiencia"
                :audio="require_src('@/assets/actividad/audio/end-game-success.mp3')"
              ).mb-0
                p.mb-0 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-lg-0.mb-0.d-none.d-lg-block.pe-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/tema3/4.png')
      .col-lg-7.ps-lg-0(data-aos="fade-left")
        .bg333.mb-0.p-4.cen
          img.img-t.mb-4.mx-lg-2(src='@/assets/curso/tema3/5.svg')
          p.mb-4.mx-lg-2 Es importante tener en cuenta que las inconformidades pueden originarse por diferentes circunstancias, como incumplimientos de la empresa, información insuficiente, dificultades en el uso del producto o expectativas que no corresponden con las condiciones de compra. Por esta razón, antes de ofrecer una solución, el asesor debe verificar los hechos, consultar la información disponible y determinar las alternativas que correspondan, de acuerdo con los procedimientos de la organización y los derechos del consumidor.

    p.mb-5(data-aos="fade-right") La manera en que el asesor se comunica con los clientes durante el servicio postventa influye en la atención de sus inquietudes y en el manejo de situaciones difíciles. Por ello, es importante utilizar expresiones claras, respetuosas y orientadas a la solución, evitando respuestas que puedan generar inconformidad o afectar la confianza del cliente. A continuación, se presentan algunas situaciones frecuentes, acompañadas de expresiones que deben evitarse y alternativas recomendadas para brindar una buena atención.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 4.
          | Qué decir y qué evitar durante la atención postventa
        .tabla-a.tab4.mb-0
          table
            thead
              tr
                th Situación
                th Expresión que debe evitarse
                th Expresión recomendada
            tbody
              tr
                td Cliente molesto
                td “Cálmese, así no puedo atenderlo”.
                td “Comprendo su inconformidad. Revisemos qué ha sucedido”.
              tr
                td Solicitud sin respuesta inmediata
                td “No sé cuándo le van a solucionar”.
                td “Voy a consultar el estado de su solicitud para proporcionarle información confirmada”.
              tr
                td Solicitud fuera de las condiciones aplicables
                td “Eso no tiene garantía”.
                td “Revisemos las condiciones de garantía y las alternativas que correspondan a su caso”.
              tr
                td Retraso en una entrega
                td “Eso es problema de logística”.
                td “Consultaré con el área encargada para conocer el estado de su entrega”.
              tr
                td Cliente que exige una solución no autorizada
                td “Eso no se puede hacer”.
                td “Le explicaré las opciones disponibles de acuerdo con las condiciones de su compra”.
    
    .cajon.color-acento-bo.p-4.mb-0(data-aos="fade-right")
      h4.mb-4 Nota
      p.mb-0 Las expresiones recomendadas son ejemplos de buena comunicación que permiten atender las inconformidades de los clientes con respeto, claridad y responsabilidad, de acuerdo con las políticas y los procedimientos establecidos por la empresa.


    separador
    #t_3_1.titulo-segundo.mb-5
      h2 3.1 Seguimiento al cliente después de la compra

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-5.d-none.d-lg-block
        img.mb-0(src="@/assets/curso/tema3/6.png")
      .col-lg-7
        p.mb-4 El seguimiento al cliente es una actividad que permite mantener la comunicación después de realizar una venta, con el propósito de conocer su experiencia, identificar posibles dificultades y brindar orientación cuando sea necesario.
        p.mb-4 Esta actividad debe desarrollarse de manera oportuna y respetuosa, teniendo en cuenta las características del producto o servicio, las necesidades del cliente y los canales de comunicación autorizados.
        p.mb-0 La evaluación del servicio postventa permite identificar dificultades y establecer oportunidades de mejora en la atención al cliente. A continuación, se presenta una infografía interactiva:
      
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        ImagenInfografica.color-primario
          template(v-slot:imagen)
            img(src='@/assets/curso/tema3/7.svg')
          .tarjeta.color-acento-contenido.p-4.text-center(x="17.2%" y="65.5%" numero="1")
            h5.mb-3 Contacto posterior a la compra
            p.mb-0 Establecer comunicación con el cliente para conocer su experiencia con el producto o servicio adquirido.
          .tarjeta.color-acento-contenido.p-4.text-center(x="22.9%" y="41.7%" numero="2")
            h5.mb-3 Verificación del cumplimiento
            p.mb-0 Comprobar que las condiciones acordadas durante la venta, como la entrega, instalación o prestación del servicio, se hayan cumplido.
          .tarjeta.color-acento-contenido.p-4.text-center(x="38.5%" y="23.7%" numero="3")
            h5.mb-3 Identificación de necesidades
            p.mb-0 Reconocer posibles inquietudes, dificultades o requerimientos adicionales relacionados con la compra.
          .tarjeta.color-acento-contenido.p-4.text-center(x="61.2%" y="23.7%" numero="4")
            h5.mb-3 Orientación al cliente
            p.mb-0  Proporcionar información sobre el uso del producto, las condiciones del servicio o los canales disponibles para recibir asistencia.
          .tarjeta.color-acento-contenido.p-4.text-center(x="76.3%" y="41.7%" numero="5")
            h5.mb-3 Comunicación de novedades
            p.mb-0 Informar oportunamente sobre situaciones que puedan afectar los compromisos adquiridos.
          .tarjeta.color-acento-contenido.p-4.text-center(x="82.8%" y="65.5%" numero="6")
            h5.mb-3 Acompañamiento comercial
            p.mb-0 Mantener una relación de atención que permita responder a las necesidades posteriores a la compra.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-5.d-none.d-lg-block
        img.mb-0(src="@/assets/curso/tema3/8.png")
      .col-lg-7
        p.mb-4 La atención postventa requiere que el asesor comercial mantenga una conducta profesional y actúe con responsabilidad frente a las diferentes situaciones que pueden presentarse después de una compra. Además de conocer los procedimientos establecidos por la empresa, es importante desarrollar habilidades que permitan atender las inquietudes de los clientes, manejar situaciones difíciles y contribuir a una experiencia de servicio satisfactoria.
        p.mb-4 Las buenas prácticas en la atención postventa son comportamientos y acciones que orientan el desempeño del asesor comercial durante su interacción con los clientes. Su aplicación permite prevenir malentendidos, reducir conflictos y fortalecer la confianza en la empresa, especialmente cuando se presentan inconformidades relacionadas con los productos o servicios adquiridos.
        p.mb-0 Una de las situaciones que requiere mayor atención ocurre cuando un cliente manifiesta insatisfacción porque el producto recibido no cumple sus expectativas, se presenta una demora en la entrega o la solución ofrecida no corresponde con lo esperado. En estos casos, el asesor debe mantener una actitud respetuosa, permitir que el cliente explique su situación y evitar respuestas que puedan generar confrontaciones.

    p.mb-4(data-aos="fade-right") Es importante comprender que una inconformidad no siempre significa que la empresa haya incumplido sus obligaciones. En algunas ocasiones, puede originarse por información insuficiente, expectativas diferentes a las condiciones de compra o dificultades en la comprensión de los procedimientos. Por esta razón, antes de proporcionar una respuesta, el asesor debe conocer las circunstancias del caso y verificar la información correspondiente.

    p.mb-4(data-aos="fade-left") Durante la atención de situaciones difíciles, se recomienda aplicar las siguientes buenas prácticas:

    .row.mb-5(data-aos="fade-right")
      .col-lg-12
        ul.lista-ul.mb-0
          li.d-flex.mb-2
            i.fas.fa-user
            p.mb-0 #[b Mantener una actitud profesional:] conservar un trato respetuoso, incluso cuando el cliente manifieste molestia o desacuerdo.
          li.d-flex.mb-2
            i.fas.fa-user
            p.mb-0 #[b Evitar discusiones:] responder con argumentos claros y no utilizar expresiones que puedan interpretarse como confrontaciones o descalificaciones.
          li.d-flex.mb-2
            i.fas.fa-user
            p.mb-0 #[b Reconocer la inconformidad:] demostrar comprensión frente a la situación presentada, sin asumir responsabilidades que todavía no han sido verificadas.
          li.d-flex.mb-2
            i.fas.fa-user
            p.mb-0 #[b Proporcionar información confiable:] comunicar únicamente las condiciones, alternativas y soluciones que hayan sido confirmadas por la empresa.
          li.d-flex.mb-2
            i.fas.fa-user
            p.mb-0 #[b Evitar promesas que no puedan cumplirse:] no ofrecer devoluciones, cambios, descuentos o fechas de solución sin contar con la autorización correspondiente.
          li.d-flex.mb-2
            i.fas.fa-user
            p.mb-0 #[b Explicar las limitaciones del servicio:] informar de manera respetuosa cuando una solicitud no pueda atenderse en las condiciones esperadas, indicando las razones y las alternativas disponibles.
          li.d-flex.mb-2
            i.fas.fa-user
            p.mb-0 #[b Mantener la confidencialidad:] proteger la información personal y comercial del cliente, evitando compartirla con personas no autorizadas.
          li.d-flex.mb-0
            i.fas.fa-user
            p.mb-0 #[b Asumir una actitud orientada a la solución:] contribuir a la búsqueda de alternativas dentro de las responsabilidades del cargo y las políticas de la organización.

    .row.mb-5(data-aos="fade-left")
      .col-lg-12
        img(src='@/assets/curso/tema3/9.png')

    p.mb-5(data-aos="fade-right") Asimismo, el asesor debe evitar comportamientos que puedan afectar la confianza del cliente, como interrumpir sus explicaciones, emitir juicios sobre su comportamiento, utilizar términos técnicos sin aclararlos o responsabilizar a otros trabajadores por los inconvenientes presentados. Aunque algunas situaciones no puedan resolverse inmediatamente, la atención debe conservar criterios de respeto, claridad y responsabilidad.

    .row.mb-0(data-aos="fade-left")
      .col-lg-7
        p.mb-0 La postventa constituye una parte fundamental de la gestión comercial, ya que permite fortalecer las relaciones con los clientes mediante una atención oportuna, el seguimiento de sus necesidades y el cumplimiento de los compromisos adquiridos. A lo largo de este componente formativo se abordaron sus principales etapas, elementos, procedimientos, herramientas y buenas prácticas, destacando la importancia de garantizar un servicio de calidad y orientado a la satisfacción del cliente. La aplicación de estos conocimientos permitirá al aprendiz desarrollar acciones postventa de acuerdo con las políticas de la organización, gestionar adecuadamente las solicitudes e inconformidades y contribuir a la fidelización de los clientes y al mejoramiento continuo de los procesos comerciales.
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema3/10.png')


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
