<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Postventa
  
    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-lg-12
        .bloque-texto-g.color-secund.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema1/1.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-0 La postventa comprende el conjunto de actividades que realiza una empresa después de concretar la venta de un producto o servicio, con el propósito de atender las necesidades del cliente, verificar su satisfacción y mantener una relación comercial positiva. Estas actividades permiten resolver inquietudes, gestionar solicitudes, atender reclamaciones y ofrecer acompañamiento durante el uso o aprovechamiento del producto adquirido.
            br 
            br 
            p.mb-0 La postventa no se limita a solucionar problemas cuando se presentan. También incluye acciones preventivas y de seguimiento que contribuyen a mejorar la experiencia del cliente, fortalecer su confianza y generar oportunidades de fidelización. Por ejemplo, una empresa que comercializa electrodomésticos puede contactar al comprador después de la entrega para confirmar que el producto funciona correctamente, orientar sobre su uso y proporcionar información acerca de los canales de asistencia técnica.
    
    p.mb-5 Entre las principales actividades del servicio postventa se encuentran:
    
    .row.mb-5
      .col-lg-12
        ul.lista-ul.mb-0
          li.d-flex.mb-2
            i.fas.fa-user
            p.mb-0 #[b Seguimiento de la compra:] verificar que el cliente haya recibido el producto o servicio en las condiciones acordadas.
          li.d-flex.mb-2
            i.fas.fa-user
            p.mb-0 #[b Atención de solicitudes e incidencias:] responder consultas, inquietudes, quejas y reclamaciones relacionadas con la compra.
          li.d-flex.mb-2
            i.fas.fa-user
            p.mb-0 #[b Gestión de garantías:] orientar al cliente sobre las condiciones de garantía y tramitar las solicitudes correspondientes.
          li.d-flex.mb-2
            i.fas.fa-user
            p.mb-0 #[b Mantenimiento y reparación:] proporcionar asistencia para conservar o recuperar el funcionamiento de los productos.
          li.d-flex.mb-2
            i.fas.fa-user
            p.mb-0 #[b Orientación al cliente:] ofrecer recomendaciones sobre el uso, cuidado y aprovechamiento del producto o servicio.
          li.d-flex.mb-2
            i.fas.fa-user
            p.mb-0 #[b Evaluación de la satisfacción:] recopilar opiniones y valorar la experiencia del cliente para identificar oportunidades de mejora.
          li.d-flex.mb-0
            i.fas.fa-user
            p.mb-0 #[b Fidelización:] desarrollar acciones de comunicación y acompañamiento que favorezcan la continuidad de la relación comercial.

    p.mb-5 La implementación de estas actividades proporciona beneficios tanto para los clientes como para las empresas. Sin embargo, requiere recursos, personal capacitado y procedimientos que permitan garantizar una atención oportuna y organizada.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 1.
          | Ventajas y aspectos que deben gestionarse en el servicio postventa
        .tabla-a.tab1.mb-0
          table
            thead
              tr
                th Ventajas
                th Aspectos que deben gestionarse
            tbody
              tr
                td Favorece la satisfacción y confianza del cliente.
                td Requiere recursos económicos, tecnológicos y humanos.
              tr
                td Fortalece la reputación de la empresa.
                td Exige seguimiento y control de los procedimientos.
              tr
                td Permite identificar necesidades y oportunidades de mejora.
                td Puede aumentar inicialmente el registro de solicitudes y reclamaciones al facilitar los canales de atención.
              tr
                td Contribuye a la fidelización y recomendación de la marca.
                td Demanda personal capacitado y tiempos de respuesta definidos.
              tr
                td Facilita nuevas oportunidades comerciales.
                td Requiere coordinación entre las diferentes áreas de la organización.

    p.mb-0 Una gestión adecuada de la postventa permite aprovechar sus beneficios y atender las necesidades operativas que surgen durante su implementación. Para ello, es importante establecer responsabilidades, canales de comunicación y mecanismos de evaluación que contribuyan al mejoramiento continuo del servicio.


    separador
    #t_1_1.titulo-segundo.mb-5
      h2 1.1 Etapas de la postventa

    p.mb-4 La relación comercial con el cliente continúa después de realizar la venta. Por esta razón, las empresas deben desarrollar acciones organizadas que permitan acompañar al comprador, atender sus necesidades y fortalecer su confianza durante el uso del producto o servicio.

    p.mb-5 Aunque las actividades pueden variar según el tipo de empresa, el proceso postventa puede organizarse en las siguientes etapas:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-10
        PasosA.color-acento-contenido.mb-0(tipo="n")
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-10
              h4 Confirmación de la entrega y cumplimiento de la venta
              p.mb-0 Consiste en verificar que el cliente haya recibido el producto o servicio de acuerdo con las condiciones pactadas. Se comprueban aspectos como la entrega oportuna, el estado del producto, la documentación correspondiente y el cumplimiento de los compromisos comerciales.
            .col-lg-2.cel
              figure
                img.img-a.img-t(src='@/assets/curso/tema1/2.svg', alt='')
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-2.cel
              figure
                img.img-a.img-t(src='@/assets/curso/tema1/3.svg', alt='')
            .col-lg-10.text-end
              h4 Contacto y seguimiento inicial
              p.mb-0 La empresa establece comunicación con el cliente después de la compra para conocer su experiencia, resolver inquietudes y confirmar que puede utilizar el producto o servicio adecuadamente. Este contacto puede realizarse mediante llamadas, mensajes, correos electrónicos o canales digitales autorizados.
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-10
              h4 Atención de solicitudes y necesidades
              p.mb-0 Comprende la recepción y gestión de consultas, solicitudes de información, reclamaciones, garantías, devoluciones y requerimientos de asistencia. Es importante ofrecer respuestas claras y cumplir los procedimientos establecidos por la organización y la normativa aplicable.
            .col-lg-2.cel
              figure
                img.img-a.img-t(src='@/assets/curso/tema1/4.svg', alt='')
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-2.cel
              figure
                img.img-a.img-t(src='@/assets/curso/tema1/5.svg', alt='')
            .col-lg-10.text-end
              h4 Evaluación de la satisfacción
              p.mb-0 Permite conocer la percepción del cliente sobre el producto adquirido y la atención recibida. Para ello, pueden utilizarse encuestas breves, registros de satisfacción, entrevistas o mecanismos de valoración del servicio.
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-10
              h4 Fidelización y continuidad de la relación comercial
              p.mb-0 Consiste en mantener una comunicación pertinente con el cliente, proporcionar información útil y ofrecer servicios complementarios cuando correspondan a sus necesidades. Estas acciones buscan fortalecer la confianza y favorecer futuras relaciones comerciales.
            .col-lg-2.cel
              figure
                img.img-a.img-t(src='@/assets/curso/tema1/2.svg', alt='')

    p.mb-5 Estas etapas permiten desarrollar un seguimiento organizado y adaptar las acciones postventa a las características de cada cliente. En las micro, pequeñas y medianas empresas (MiPymes), algunas funciones pueden integrarse con el área de servicio al cliente, siempre que existan responsabilidades y procedimientos definidos.

    .bg2.p-lg-5.p-4.mb-0(data-aos="fade-right")
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-5.mb-lg-0.mb-4
          img.img-t.img-a(src='@/assets/curso/tema1/7.svg')
        .col-lg-7
          h4.mb-4 Ejemplo práctico
          p.mb-4 Una empresa que vende computadores portátiles puede aplicar estas etapas de la siguiente manera:
          p.mb-0 1) Confirma que el computador fue entregado en buen estado.
          p.mb-0 2) Contacta al comprador para verificar su funcionamiento inicial.
          p.mb-0 3) Atiende una consulta relacionada con la configuración del equipo.
          p.mb-0 4) Solicita una valoración de la atención recibida.
          p.mb-0 5) Comparte información sobre mantenimiento preventivo y servicios de soporte disponibles.


    separador
    #t_1_2.titulo-segundo.mb-5
      h2 1.2 Elementos de la postventa

    p.mb-4 Para desarrollar un servicio postventa efectivo, la empresa debe considerar elementos que faciliten la atención de las necesidades del cliente y el cumplimiento de los compromisos adquiridos durante la venta.

    p.mb-5 Los elementos fundamentales son los siguientes:

    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-right")
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4.text-center
          .caja-img.mb-4
            img(src='@/assets/curso/tema1/8.svg')
          h4.mb-4 1. Comunicación efectiva
          p.mb-0 Consiste en proporcionar información clara, oportuna y comprensible sobre los productos, servicios, garantías, procedimientos y canales de atención. También implica escuchar activamente las inquietudes del cliente, confirmar que se ha comprendido su solicitud y mantenerlo informado sobre el estado de su caso.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4.text-center
          .caja-img.mb-4
            img(src='@/assets/curso/tema1/9.svg')
          h4.mb-4 2. Atención y solución de necesidades
          p.mb-0 Comprende la capacidad de la empresa para identificar las solicitudes del cliente y ofrecer alternativas de solución. Incluye la gestión de incidencias, el acompañamiento técnico, la atención de reclamaciones y la coordinación con las áreas responsables.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4.text-center
          .caja-img.mb-4
            img(src='@/assets/curso/tema1/10.svg')
          h4.mb-4 3. Seguimiento y evaluación de la satisfacción
          p.mb-0 Permite verificar que las solicitudes hayan sido atendidas y conocer el nivel de satisfacción del cliente con las soluciones proporcionadas. La información recopilada contribuye a identificar fallas, prevenir situaciones recurrentes y mejorar los procedimientos de atención.

    p.mb-0 Estos elementos deben aplicarse de manera articulada. Por ejemplo, cuando un cliente solicita la reparación de un producto, la empresa debe comunicar el procedimiento, gestionar la asistencia correspondiente y realizar seguimiento hasta verificar el resultado de la atención.


    separador
    #t_1_3.titulo-segundo.mb-5
      h2 1.3 Proceso de la calidad del servicio postventa

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-lg-0.mb-0.d-none.d-lg-block.pe-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/tema1/11.png')
      .col-lg-7.ps-lg-0(data-aos="fade-left")
        .bg3.mb-0.p-4.cen
          img.img-t.mb-4.mx-lg-2(src='@/assets/curso/tema1/12.svg')
          p.mb-4.mx-lg-2 La calidad del servicio postventa se relaciona con la capacidad de la empresa para atender los requerimientos del cliente de manera oportuna, confiable y coherente con los compromisos comerciales y las políticas organizacionales.
          p.mb-0.mx-lg-2 Una atención de calidad requiere procedimientos definidos, personal capacitado, recursos disponibles y mecanismos de seguimiento que permitan evaluar los resultados. También implica cumplir las obligaciones legales relacionadas con las garantías, la protección del consumidor y el tratamiento de la información personal.






    separador
    #t_1_4.titulo-segundo.mb-5
      h2 1.4 Procedimiento para estructurar un servicio postventa





</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
