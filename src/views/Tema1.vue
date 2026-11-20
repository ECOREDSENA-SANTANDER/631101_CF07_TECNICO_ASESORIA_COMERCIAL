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
    
    p.mb-5(data-aos="fade-left") Entre las principales actividades del servicio postventa se encuentran:
    
    .row.mb-5(data-aos="fade-right")
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

    p.mb-4(data-aos="fade-right") La implementación de estas actividades proporciona beneficios tanto para los clientes como para las empresas. Sin embargo, requiere recursos, personal capacitado y procedimientos que permitan garantizar una atención oportuna y organizada.

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

    p.mb-0(data-aos="fade-right") Una gestión adecuada de la postventa permite aprovechar sus beneficios y atender las necesidades operativas que surgen durante su implementación. Para ello, es importante establecer responsabilidades, canales de comunicación y mecanismos de evaluación que contribuyan al mejoramiento continuo del servicio.


    separador
    #t_1_1.titulo-segundo.mb-5
      h2 1.1 Etapas de la postventa

    p.mb-4(data-aos="fade-left") La relación comercial con el cliente continúa después de realizar la venta. Por esta razón, las empresas deben desarrollar acciones organizadas que permitan acompañar al comprador, atender sus necesidades y fortalecer su confianza durante el uso del producto o servicio.

    p.mb-5(data-aos="fade-right") Aunque las actividades pueden variar según el tipo de empresa, el proceso postventa puede organizarse en las siguientes etapas:

    .row.justify-content-center.align-items-center.mb-lg-5.mb-4(data-aos="fade-left")
      .col-lg-10
        PasosA.color-acento-contenido.mb-0(tipo="n")
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-10
              h4 Confirmación de la entrega y cumplimiento de la venta
              p.mb-0 Consiste en verificar que el cliente haya recibido el producto o servicio de acuerdo con las condiciones pactadas. Se comprueban aspectos como la entrega oportuna, el estado del producto, la documentación correspondiente y el cumplimiento de los compromisos comerciales.
            .col-lg-2.cel
              figure
                img.img-a.img-t(src='@/assets/curso/tema1/2.svg')
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-2.cel
              figure
                img.img-a.img-t(src='@/assets/curso/tema1/3.svg')
            .col-lg-10.text-end
              h4 Contacto y seguimiento inicial
              p.mb-0 La empresa establece comunicación con el cliente después de la compra para conocer su experiencia, resolver inquietudes y confirmar que puede utilizar el producto o servicio adecuadamente. Este contacto puede realizarse mediante llamadas, mensajes, correos electrónicos o canales digitales autorizados.
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-10
              h4 Atención de solicitudes y necesidades
              p.mb-0 Comprende la recepción y gestión de consultas, solicitudes de información, reclamaciones, garantías, devoluciones y requerimientos de asistencia. Es importante ofrecer respuestas claras y cumplir los procedimientos establecidos por la organización y la normativa aplicable.
            .col-lg-2.cel
              figure
                img.img-a.img-t(src='@/assets/curso/tema1/4.svg')
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-2.cel
              figure
                img.img-a.img-t(src='@/assets/curso/tema1/5.svg')
            .col-lg-10.text-end
              h4 Evaluación de la satisfacción
              p.mb-0 Permite conocer la percepción del cliente sobre el producto adquirido y la atención recibida. Para ello, pueden utilizarse encuestas breves, registros de satisfacción, entrevistas o mecanismos de valoración del servicio.
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-10
              h4 Fidelización y continuidad de la relación comercial
              p.mb-0 Consiste en mantener una comunicación pertinente con el cliente, proporcionar información útil y ofrecer servicios complementarios cuando correspondan a sus necesidades. Estas acciones buscan fortalecer la confianza y favorecer futuras relaciones comerciales.
            .col-lg-2.cel
              figure
                img.img-a.img-t(src='@/assets/curso/tema1/2.svg')

    p.mb-5(data-aos="fade-right") Estas etapas permiten desarrollar un seguimiento organizado y adaptar las acciones postventa a las características de cada cliente. En las micro, pequeñas y medianas empresas (MiPymes), algunas funciones pueden integrarse con el área de servicio al cliente, siempre que existan responsabilidades y procedimientos definidos.

    .bg2.p-lg-5.p-4.mb-0(data-aos="fade-left")
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

    p.mb-4(data-aos="fade-right") Para desarrollar un servicio postventa efectivo, la empresa debe considerar elementos que faciliten la atención de las necesidades del cliente y el cumplimiento de los compromisos adquiridos durante la venta.

    p.mb-5(data-aos="fade-left") Los elementos fundamentales son los siguientes:

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

    p.mb-0(data-aos="fade-left") Estos elementos deben aplicarse de manera articulada. Por ejemplo, cuando un cliente solicita la reparación de un producto, la empresa debe comunicar el procedimiento, gestionar la asistencia correspondiente y realizar seguimiento hasta verificar el resultado de la atención.


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

    p.mb-5(data-aos="fade-right") Para gestionar la calidad del servicio postventa, la empresa puede desarrollar un proceso de cuatro etapas:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema1/13.png')
      .col-lg-9
        TabsA.color-acento-botones.mb-0
          .tarjeta.color-a.p-4(titulo="Planificación")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 Establecer los objetivos, las actividades, los responsables, los recursos y los indicadores del servicio.
          .tarjeta.color-a.p-4(titulo="Implementación")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 Ejecutar las actividades programadas y atender los requerimientos de los clientes.
          .tarjeta.color-a.p-4(titulo="Control")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 Verificar el cumplimiento de los procedimientos y evaluar los resultados mediante indicadores y registros.
          .tarjeta.color-a.p-4(titulo="Mejora")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 Identificar oportunidades de ajuste y aplicar acciones que permitan fortalecer la calidad del servicio.

    p.mb-5(data-aos="fade-right") Estas etapas conforman un proceso continuo. Los resultados obtenidos durante el control y la mejora proporcionan información para ajustar la planificación y fortalecer las actividades posteriores.

    .tit-doble.mb-5(data-aos="fade-left")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/ico.svg')")
      h3 Planificación de la actividad postventa

    p.mb-4(data-aos="fade-right") La planificación consiste en organizar anticipadamente las actividades necesarias para prestar el servicio postventa. Su finalidad es establecer qué se debe hacer, cómo se realizará, quién será responsable, qué recursos se necesitan y cómo se evaluarán los resultados.

    p.mb-4(data-aos="fade-left") Para desarrollar esta etapa se deben considerar los siguientes aspectos:

    .row.mb-5(data-aos="fade-right")
      .col-lg-12
        ul.lista-ul.mb-0
          li.d-flex.mb-2
            i.fas.fa-user
            p.mb-0 #[b Objetivo:] definir el resultado que se pretende alcanzar. 
          li.d-flex.mb-2
            i.fas.fa-user
            p.mb-0 #[b Actividades:] identificar los servicios que se ofrecerán, como instalación, mantenimiento, reparación o seguimiento.
          li.d-flex.mb-2
            i.fas.fa-user
            p.mb-0 #[b Tareas:] establecer las acciones específicas que deben ejecutarse.
          li.d-flex.mb-2
            i.fas.fa-user
            p.mb-0 #[b Responsables:] asignar las personas o áreas encargadas.
          li.d-flex.mb-2
            i.fas.fa-user
            p.mb-0 #[b Tiempo:] determinar la duración estimada y los plazos de atención.
          li.d-flex.mb-2
            i.fas.fa-user
            p.mb-0 #[b Recursos y presupuesto:] identificar los materiales, herramientas, personal y costos necesarios.
          li.d-flex.mb-0
            i.fas.fa-user
            p.mb-0 #[b Indicadores:] definir cómo se medirá el cumplimiento de las actividades.

    p.mb-4(data-aos="fade-left") A continuación, se presenta un ejemplo de planificación para una empresa comercializadora de equipos tecnológicos.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 2.
          | Ejemplo de planificación de actividades postventa
        .tabla-a.tab2.mb-0
          table
            thead
              tr
                th Actividad
                th Tarea
                th Responsable
                th Tiempo estimado
                th Indicador
            tbody
              tr
                td Instalación
                td Instalar y verificar tres equipos adquiridos por clientes.
                td Técnico de instalación
                td 6 horas
                td Cumplimiento del tiempo programado
              tr
                td Mantenimiento
                td Revisar el funcionamiento y reemplazar un componente cuando corresponda.
                td Técnico de mantenimiento
                td 2 horas
                td Cumplimiento del servicio.
              tr
                td Reparación
                td Diagnosticar y reparar un equipo que presenta fallas.
                td Técnico de soporte
                td 4 horas
                td Tiempo de solución.
              tr
                td Seguimiento
                td Contactar a cinco clientes para evaluar la atención recibida.
                td Asesor comercial
                td 2 horas
                td Porcentaje de clientes contactados.
        
    .tit-doble.mb-5(data-aos="fade-left")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/ico.svg')")
      h3 Indicadores del servicio postventa

    p.mb-4(data-aos="fade-right") Los indicadores permiten medir los resultados de las actividades y determinar si se están cumpliendo los objetivos establecidos. Su selección depende de las características del servicio y de la información disponible en la organización.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 3.
          | Indicadores para evaluar el servicio postventa
        .tabla-a.tab3.mb-0
          table
            thead
              tr
                th Indicador
                th Descripción
                th Ejemplo de aplicación
            tbody
              tr
                td Tiempo de primera respuesta
                td Tiempo transcurrido desde la recepción de una solicitud hasta la primera respuesta de la empresa.
                td Un cliente presenta una solicitud a las 9:00 a. m. y recibe respuesta a las 10:00 a. m. El tiempo de respuesta es de una hora.
              tr
                td Tiempo de solución
                td Tiempo requerido para resolver una incidencia desde su registro hasta el cierre.
                td Una reclamación se registra el lunes y se soluciona el miércoles. El tiempo de solución es de dos días calendario.
              tr
                td Cumplimiento de servicios programados
                td Porcentaje de actividades ejecutadas dentro de los plazos establecidos.
                td De 20 servicios programados, 18 se realizaron oportunamente. El cumplimiento es del 90 %.
              tr
                td Porcentaje de casos solucionados
                td Proporción de solicitudes resueltas frente al total de casos registrados.
                td De 50 solicitudes recibidas, 45 fueron solucionadas. El porcentaje de solución es del 90 %.
              tr
                td Satisfacción del cliente
                td Nivel de satisfacción expresado por los clientes después de recibir el servicio.
                td De 40 clientes encuestados, 36 manifestaron estar satisfechos. La satisfacción es del 90 %.
              tr
                td Número de reclamaciones
                td Cantidad de reclamaciones registradas durante un periodo determinado.
                td Durante septiembre se recibieron 15 reclamaciones relacionadas con entregas y garantías.
              tr
                td Tasa de reincidencia
                td Porcentaje de casos en los que vuelve a presentarse una falla o incidencia previamente atendida.
                td De 40 casos solucionados, 4 presentaron nuevamente la misma dificultad. La reincidencia es del 10 %.
              tr
                td Costo del servicio postventa
                td Recursos económicos utilizados para desarrollar las actividades de atención y soporte.
                td Durante un mes, la empresa destinó $1.500.000 a reparaciones, transporte y atención postventa.
              tr
                td Cumplimiento de garantías
                td Porcentaje de solicitudes de garantía atendidas dentro de los plazos aplicables.
                td De 20 solicitudes de garantía, 19 fueron atendidas dentro del plazo correspondiente. El cumplimiento es del 95 %.
              tr
                td Resolución en el primer contacto
                td Porcentaje de solicitudes solucionadas durante la primera interacción con el cliente, sin requerir contactos adicionales.
                td De 30 solicitudes recibidas, 24 se resolvieron en el primer contacto. El resultado es del 80 %.
              tr
                td Tasa de recompra
                td Porcentaje de clientes que realizan una nueva compra durante un periodo determinado.
                td De 100 clientes que compraron durante un periodo, 25 realizaron otra compra en el periodo evaluado. La tasa de recompra es del 25 %.

    .tit-doble.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/ico.svg')")
      h3 Implementación de la actividad postventa

    .row.mb-5(data-aos="fade-left")
      .col-lg-12
        img(src='@/assets/curso/tema1/14.png')

    p.mb-4(data-aos="fade-right") La implementación consiste en ejecutar las actividades definidas durante la planificación, utilizando los recursos disponibles y siguiendo los procedimientos establecidos por la organización.

    p.mb-4(data-aos="fade-left") Durante esta etapa, es fundamental que el personal conozca sus responsabilidades y disponga de la información necesaria para atender correctamente las solicitudes de los clientes.

    p.mb-4(data-aos="fade-right") Para implementar las actividades postventa se recomienda:

    .row.mb-5(data-aos="fade-left")
      ol.lista-ol--cuadro.lista-ol--separador.mb-0
        li.d-flex
          .lista-ol--cuadro__vineta
            span a
          p.mb-0 #[b Asignar responsabilidades:] identificar quién recibe las solicitudes, quién las gestiona y quién verifica su solución.
        li.d-flex
          .lista-ol--cuadro__vineta
            span b
          p.mb-0 #[b Disponer de los recursos necesarios:] garantizar la disponibilidad de personal, herramientas, repuestos, equipos y medios de comunicación.
        li.d-flex
          .lista-ol--cuadro__vineta
            span c
          p.mb-0 #[b Aplicar los procedimientos:] desarrollar las actividades de acuerdo con los protocolos de atención, las condiciones comerciales y la normativa correspondiente.
        li.d-flex
          .lista-ol--cuadro__vineta
            span d
          p.mb-0 #[b Registrar las actuaciones:] documentar las solicitudes recibidas, las acciones ejecutadas, los tiempos de atención y los resultados obtenidos.
        li.d-flex
          .lista-ol--cuadro__vineta
            span e
          p.mb-0 #[b Mantener informado al cliente:] comunicar el estado de su solicitud, los pasos siguientes y los plazos estimados.
        li.d-flex
          .lista-ol--cuadro__vineta
            span f
          p.mb-0 #[b Verificar la prestación del servicio:] comprobar que las actividades se hayan bejecutado y que los compromisos adquiridos se hayan cumplido.
        .br

    .tit-doble.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/ico.svg')")
      h3 Control de la actividad postventa

    .row.mb-5(data-aos="fade-left")
      .col-lg-12
        img(src='@/assets/curso/tema1/15.png')

    p.mb-4(data-aos="fade-right") El control permite verificar que las actividades postventa se desarrollen de acuerdo con lo planificado y que los resultados cumplan los criterios de calidad establecidos por la empresa.

    p.mb-4(data-aos="fade-left") Este proceso comprende la revisión de registros, la medición de indicadores y la identificación de situaciones que puedan afectar la atención al cliente.

    p.mb-4(data-aos="fade-right") Entre las principales acciones de control se encuentran:

    .row.mb-5(data-aos="fade-left")
      .col-lg-12
        ul.lista-ul.mb-0
          li.d-flex.mb-2
            i.fas.fa-user
            p.mb-0 #[b Revisar el cumplimiento de los tiempos:] comprobar que las solicitudes sean atendidas dentro de los plazos establecidos.
          li.d-flex.mb-2
            i.fas.fa-user
            p.mb-0 #[b Verificar los procedimientos:] confirmar que el personal aplique correctamente los protocolos de atención.
          li.d-flex.mb-2
            i.fas.fa-user
            p.mb-0 #[b Evaluar los indicadores:] comparar los resultados obtenidos con las metas definidas.
          li.d-flex.mb-2
            i.fas.fa-user
            p.mb-0 #[b Revisar las reclamaciones:] identificar las causas más frecuentes de inconformidad.
          li.d-flex.mb-2
            i.fas.fa-user
            p.mb-0 #[b Registrar las acciones correctivas:] documentar los ajustes realizados para solucionar incumplimientos.
          li.d-flex.mb-0
            i.fas.fa-user
            p.mb-0 #[b Comprobar el cierre de los casos:] verificar que las solicitudes cuenten con una solución o con una gestión debidamente informada y documentada.

    p.mb-5(data-aos="fade-right") Una herramienta útil para desarrollar este control es la lista de verificación, que permite comprobar el cumplimiento de las actividades establecidas.

    .tit-doble.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/ico.svg')")
      h3 Mejora de la actividad postventa

    .row.mb-5(data-aos="fade-left")
      .col-lg-12
        img(src='@/assets/curso/tema1/16.png')
    
    p.mb-4(data-aos="fade-right") La mejora consiste en realizar ajustes a los procedimientos, recursos y actividades del servicio postventa, a partir de los resultados obtenidos durante el seguimiento y control.

    p.mb-4(data-aos="fade-left") Su propósito es corregir fallas, prevenir su repetición y fortalecer la satisfacción del cliente. Para ello, la empresa debe analizar la información de las solicitudes, peticiones, quejas, reclamos y sugerencias, así como los indicadores de desempeño.

    p.mb-4(data-aos="fade-right") El proceso de mejora puede desarrollarse mediante las siguientes acciones:

    .row.mb-0(data-aos="fade-right")
      ol.lista-ol--cuadro.lista-ol--separador.mb-0
        li.d-flex
          .lista-ol--cuadro__vineta
            span a
          p.mb-0 #[b Identificar el problema:] reconocer las situaciones que afectan la calidad del servicio.
        li.d-flex
          .lista-ol--cuadro__vineta
            span b
          p.mb-0 #[b Analizar las causas:] determinar los factores que originan los incumplimientos o las dificultades.
        li.d-flex
          .lista-ol--cuadro__vineta
            span c
          p.mb-0 #[b Definir las acciones de mejora:] establecer los cambios necesarios en los procedimientos, recursos o responsabilidades.
        li.d-flex
          .lista-ol--cuadro__vineta
            span d
          p.mb-0 #[b Implementar los ajustes:] ejecutar las acciones propuestas y comunicar los cambios al personal involucrado.
        li.d-flex
          .lista-ol--cuadro__vineta
            span e
          p.mb-0 #[b Evaluar los resultados:] verificar si las medidas aplicadas permitieron solucionar el problema.
        .br


    separador
    #t_1_4.titulo-segundo.mb-5
      h2 1.4 Procedimiento para estructurar un servicio postventa

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-lg-0.mb-0.d-none.d-lg-block.pe-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/tema1/17.png')
      .col-lg-7.ps-lg-0(data-aos="fade-left")
        .bg33.mb-0.p-4.cen
          img.img-t.mb-4.mx-lg-2(src='@/assets/curso/tema1/18.svg')
          p.mb-0.mx-lg-2 Estructurar un servicio postventa implica definir cómo se recibirán, gestionarán y solucionarán las solicitudes de los clientes después de la compra. Para ello, la empresa debe establecer procedimientos claros, asignar responsabilidades y disponer de los recursos necesarios para garantizar la continuidad de la atención.
          p.mb-4.mx-lg-2 El servicio postventa debe mantener una relación coordinada con las áreas de ventas, servicio al cliente, logística, almacén y asistencia técnica, según las características de la organización.
          p.mb-0.mx-lg-2 En las empresas de mayor tamaño, estas funciones pueden desarrollarse mediante departamentos especializados. En las MiPymes, pueden integrarse dentro de una misma área o apoyarse en proveedores externos, siempre que se garantice el cumplimiento de las responsabilidades de la empresa frente al cliente.

    p.mb-5(data-aos="fade-right") Para estructurar el servicio postventa se recomienda desarrollar el siguiente procedimiento:

    .row.fondo1.p-5.fond.mb-5(data-aos="fade-down")
      .col-lg-12
        .tarjeta.tarjeta--gris.p-4
          PasosB.color-acento-contenido
            .row.justify-content-center.align-items-center.mb-0(titulo="")
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.order-lg-1.order-2
                    img.img-a.img-t(src='@/assets/curso/tema1/19.png')
                  .col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4
                    h4.mb-4 Paso 1. Identificar las necesidades del cliente
                    p.mb-0 Determinar cuáles son las solicitudes más frecuentes después de la compra, como garantías, mantenimiento, devoluciones, reparaciones o consultas.
            .row.justify-content-center.align-items-center.mb-0(titulo="")
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.order-lg-1.order-2
                    img.img-a.img-t(src='@/assets/curso/tema1/20.png')
                  .col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4
                    h4.mb-4 Paso 2. Definir los servicios que se ofrecerán
                    p.mb-0 Establecer el alcance de la atención postventa y las condiciones de prestación de cada servicio.
            .row.justify-content-center.align-items-center.mb-0(titulo="")
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.order-lg-1.order-2
                    img.img-a.img-t(src='@/assets/curso/tema1/21.png')
                  .col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4
                    h4.mb-4 Paso 3. Asignar responsables
                    p.mb-0 Determinar las personas o áreas encargadas de recibir, tramitar y solucionar los requerimientos.
            .row.justify-content-center.align-items-center.mb-0(titulo="")
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.order-lg-1.order-2
                    img.img-a.img-t(src='@/assets/curso/tema1/22.png')
                  .col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4
                    h4.mb-4 Paso 4. Establecer los canales de atención
                    p.mb-0 Habilitar medios presenciales, telefónicos o digitales para recibir las solicitudes.
            .row.justify-content-center.align-items-center.mb-0(titulo="")
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.order-lg-1.order-2
                    img.img-a.img-t(src='@/assets/curso/tema1/23.png')
                  .col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4
                    h4.mb-4 Paso 5. Diseñar los procedimientos
                    p.mb-0 Definir las actividades que deben ejecutarse desde la recepción de una solicitud hasta su cierre.
            .row.justify-content-center.align-items-center.mb-0(titulo="")
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.order-lg-1.order-2
                    img.img-a.img-t(src='@/assets/curso/tema1/24.png')
                  .col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4
                    h4.mb-4 Paso 6. Establecer tiempos e indicadores
                    p.mb-0 Determinar los plazos de atención y los mecanismos para evaluar el cumplimiento del servicio.
            .row.justify-content-center.align-items-center.mb-0(titulo="")
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.order-lg-1.order-2
                    img.img-a.img-t(src='@/assets/curso/tema1/25.png')
                  .col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4
                    h4.mb-4 Paso 7. Implementar mecanismos de seguimiento
                    p.mb-0 Registrar los casos, verificar su evolución y recopilar información para mejorar la atención.

    p.mb-5(data-aos="fade-right") Este procedimiento debe adaptarse a las características de los productos comercializados, la capacidad operativa de la empresa y las obligaciones legales aplicables.

    .tit-doble.mb-4(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/ico.svg')")
      h3 Recepción y atención de incidencias

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-7
        p.mb-4 Una incidencia es una situación que afecta o puede afectar la experiencia del cliente después de la compra y que requiere atención por parte de la empresa. Puede estar relacionada con fallas del producto, incumplimientos en la entrega, dificultades de funcionamiento o inconformidades con el servicio recibido.
        p.mb-0 La recepción y atención de incidencias constituye el primer contacto formal para gestionar este tipo de situaciones. Su propósito es identificar el requerimiento, proporcionar orientación y coordinar las acciones necesarias para ofrecer una respuesta adecuada.
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema1/26.png')

    .tit-doble.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/ico.svg')")
      h3 Procedimiento para atender una incidencia

    .row.mb-5(data-aos="fade-left")
      ol.lista-ol--cuadro.lista-ol--separador.mb-0
        li.d-flex
          .lista-ol--cuadro__vineta
            span a
          p.mb-0 #[b Recibir la solicitud:] atender al cliente mediante los canales establecidos, manteniendo una comunicación respetuosa y clara.
        li.d-flex
          .lista-ol--cuadro__vineta
            span b
          p.mb-0 #[b Registrar la información:] documentar los datos necesarios, el producto o servicio involucrado, la descripción de la situación y la fecha de recepción.
        li.d-flex
          .lista-ol--cuadro__vineta
            span c
          p.mb-0 #[b Clasificar la incidencia:] identificar si corresponde a una consulta, reclamación, solicitud de garantía, devolución, reparación u otro requerimiento.
        li.d-flex
          .lista-ol--cuadro__vineta
            span d
          p.mb-0 #[b Verificar las condiciones aplicables:] revisar la información de compra, las condiciones del servicio y las obligaciones legales correspondientes.
        li.d-flex
          .lista-ol--cuadro__vineta
            span e
          p.mb-0 #[b Asignar el caso:] remitir la solicitud al área o responsable competente.
        li.d-flex
          .lista-ol--cuadro__vineta
            span f
          p.mb-0 #[b Informar al cliente:] explicar el procedimiento, los plazos aplicables y los canales disponibles para consultar el estado del caso.
        li.d-flex
          .lista-ol--cuadro__vineta
            span g
          p.mb-0 #[b Realizar seguimiento:] verificar el avance de las actividades y comunicar las novedades pertinentes.
        li.d-flex
          .lista-ol--cuadro__vineta
            span h
          p.mb-0 #[b Registrar el resultado:] documentar la solución proporcionada y verificar el cierre de la gestión.
        .br

    .bg5.p-lg-5.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-7.order-lg-2.order-2
          h4.mb-4 Ejemplo práctico
          p.mb-4 Un cliente informa que recibió un electrodoméstico con un accesorio faltante. El asesor registra la incidencia, verifica la información del pedido y coordina con el almacén la entrega del elemento pendiente. Finalmente, confirma el resultado de la gestión y actualiza el registro del caso.
          p.mb-0 Una atención organizada permite evitar la pérdida de información, mejorar los tiempos de respuesta y fortalecer la confianza del cliente.
        .col-lg-4.mb-lg-0.mb-4.order-lg-2.order-1
          img.img-t.img-a(src='@/assets/curso/tema1/27.svg')

    .tit-doble.mb-5(data-aos="fade-left")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/ico.svg')")
      h3 Servicio de asistencia técnica
    
    .row.mb-5(data-aos="fade-right")
      .col-lg-12
        img(src='@/assets/curso/tema1/28.png')

    p.mb-4(data-aos="fade-left") El servicio de asistencia técnica comprende las actividades especializadas que permiten orientar al cliente, diagnosticar fallas, realizar mantenimiento y solucionar problemas relacionados con el funcionamiento de un producto.

    p.mb-4(data-aos="fade-right") Este servicio puede prestarse directamente por la empresa comercializadora, por el fabricante o mediante proveedores autorizados, según las características del producto y las condiciones correspondientes.

    p.mb-4(data-aos="fade-left") Entre las principales modalidades de asistencia técnica se encuentran:
    
    .row.mb-5(data-aos="fade-right")
      .col-lg-12
        ul.lista-ul.mb-0
          li.d-flex.mb-2
            i.fas.fa-user
            p.mb-0 #[b Asistencia presencial:] atención realizada por personal técnico en las instalaciones del cliente o en un centro de servicio autorizado. Es utilizada cuando se requiere una revisión física, instalación, mantenimiento o reparación.
          li.d-flex.mb-2
            i.fas.fa-user
            p.mb-0 #[b Asistencia telefónica:] orientación proporcionada mediante llamadas para resolver consultas o realizar verificaciones básicas de funcionamiento.
          li.d-flex.mb-2
            i.fas.fa-user
            p.mb-0 #[b Asistencia digital:] atención mediante correo electrónico, chat, videollamadas, plataformas de soporte o sistemas de gestión de solicitudes.
          li.d-flex.mb-2
            i.fas.fa-user
            p.mb-0 #[b Asistencia remota:] intervención técnica realizada mediante herramientas que permiten diagnosticar o solucionar problemas de equipos y sistemas a distancia, con la autorización del cliente y las medidas de seguridad correspondientes.
          li.d-flex.mb-2
            i.fas.fa-user
            p.mb-0 #[b Mantenimiento preventivo:] actividades programadas para conservar el funcionamiento de los productos y disminuir la probabilidad de fallas.
          li.d-flex.mb-0
            i.fas.fa-user
            p.mb-0 #[b Mantenimiento correctivo:] acciones orientadas a diagnosticar y solucionar fallas que afectan el funcionamiento del producto.

    .bg6.p-lg-5.p-4.mb-5(data-aos="fade-left")
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-4.mb-lg-0.mb-4
          img.img-t.img-a(src='@/assets/curso/tema1/29.svg')
        .col-lg-7
          h4.mb-4 Ejemplo práctico
          p.mb-4 Una empresa que comercializa impresoras recibe una solicitud porque uno de sus equipos presenta dificultades para imprimir. Inicialmente, el personal de soporte proporciona orientación telefónica. Si el problema continúa, programa una revisión técnica para identificar la causa y determinar las acciones necesarias.
          p.mb-0 La asistencia técnica debe coordinarse con el servicio de atención al cliente para garantizar que las solicitudes sean registradas, atendidas y verificadas oportunamente.

    .tit-doble.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/ico.svg')")
      h3 Otros servicios implicados en la postventa

    .row.mb-5(data-aos="fade-left")
      .col-lg-12
        img(src='@/assets/curso/tema1/30.png')

    p.mb-4(data-aos="fade-right") Además de la recepción de incidencias y la asistencia técnica, existen otros servicios que complementan la atención postventa y requieren la participación de diferentes áreas de la organización.

    p.mb-4(data-aos="fade-left") Entre estos servicios se encuentran:

    .row.mb-5(data-aos="fade-right")
      .col-lg-12
        ul.lista-ul.mb-0
          li.d-flex.mb-2
            i.fas.fa-user
            p.mb-0 #[b Gestión logística:] comprende la coordinación del transporte, la recogida y la entrega de productos relacionados con cambios, devoluciones, mantenimiento o reparaciones.
          li.d-flex.mb-2
            i.fas.fa-user
            p.mb-0 #[b Gestión de almacén e inventarios:] permite verificar la disponibilidad de repuestos, accesorios y productos necesarios para atender las solicitudes.
          li.d-flex.mb-2
            i.fas.fa-user
            p.mb-0 #[b Gestión de garantías:] incluye la recepción, evaluación y trámite de las solicitudes de garantía, conforme a las condiciones aplicables y los derechos del consumidor.
          li.d-flex.mb-2
            i.fas.fa-user
            p.mb-0 #[b Cambios y devoluciones:] comprende la atención de solicitudes relacionadas con el cambio o la devolución de productos, de acuerdo con la normativa y las políticas comerciales que correspondan.
          li.d-flex.mb-2
            i.fas.fa-user
            p.mb-0 #[b Orientación y capacitación:] proporciona instrucciones y recomendaciones que facilitan el uso, cuidado y aprovechamiento de los productos o servicios adquiridos.
          li.d-flex.mb-2
            i.fas.fa-user
            p.mb-0 #[b Seguimiento de satisfacción:] consiste en contactar al cliente después de la atención para conocer su experiencia e identificar oportunidades de mejora.
          li.d-flex.mb-0
            i.fas.fa-user
            p.mb-0 #[b Gestión de información:] permite organizar los registros de solicitudes, historial de atención y resultados del servicio mediante herramientas tecnológicas o sistemas de gestión de clientes.
    
    p.mb-4(data-aos="fade-right") La coordinación de estos servicios contribuye a que la empresa proporcione respuestas integrales y evite que el cliente deba repetir su solicitud ante diferentes áreas.

    .row.fd3.fon.mb-0(data-aos="fade-down")
      .col-lg-12
        
        .tit-ico.mb-5(data-aos="fade-right")
          img.tit-ico__img(src="@/assets/curso/tema1/31.svg")
          h4.mb-0 Caso práctico: procedimiento para estructurar un servicio postventa
        
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-6
            img(src='@/assets/curso/tema1/32.svg')
          .col-lg-6
            .bg7.p-4.cen
              .bg8.p-2.mb-4
                h4.text-white.mb-0 Situación empresarial
              p.mb-4 La empresa Computer Working se dedica a la comercialización de computadores de escritorio, equipos todo en uno y computadores portátiles. Como parte de su servicio postventa, ofrece orientación sobre el funcionamiento de los equipos, gestión de garantías, mantenimiento y reparación.
              p.mb-0 Un cliente que adquirió un computador portátil informa que el equipo presenta fallas al encender. La empresa debe atender la solicitud y coordinar las actividades necesarias para proporcionar una solución.
        
        h4.mb-4 Desarrollo del procedimiento:

        .row.mb-5(data-aos="fade-left")
          ol.lista-ol--cuadro.lista-ol--separador.mb-0
            li.d-flex
              .lista-ol--cuadro__vineta
                span 1
              .ms-1
                strong Recepción de la incidencia
                p.mb-0
                  | El cliente se comunica con la empresa mediante el canal de atención disponible. El asesor recibe la solicitud y registra la información necesaria para identificar el producto y describir la falla.
            li.d-flex
              .lista-ol--cuadro__vineta
                span 2
              .ms-1
                strong Verificación de la información
                p.mb-0
                  | El asesor consulta los datos de compra, identifica las condiciones de garantía aplicables y verifica si existen registros anteriores relacionados con el equipo.
            li.d-flex
              .lista-ol--cuadro__vineta
                span 3
              .ms-1
                strong Clasificación y asignación
                p.mb-0
                  | La solicitud se clasifica como una incidencia técnica y se remite al área de soporte para realizar el diagnóstico correspondiente.
            li.d-flex
              .lista-ol--cuadro__vineta
                span 4
              .ms-1
                strong Diagnóstico técnico
                p.mb-0
                  | El personal especializado revisa el equipo e identifica las posibles causas de la falla. Si el problema puede solucionarse mediante una orientación básica, se proporciona la asistencia correspondiente. En caso contrario, se continúa con el procedimiento técnico establecido.
            li.d-flex
              .lista-ol--cuadro__vineta
                span 5
              .ms-1
                strong Gestión de la solución
                p.mb-0
                  | De acuerdo con el diagnóstico y las condiciones aplicables, se determina la acción correspondiente, que puede incluir reparación, cambio del producto u otra medida legalmente procedente. La empresa informa al cliente sobre el trámite y los plazos de atención.
            li.d-flex
              .lista-ol--cuadro__vineta
                span 6
              .ms-1
                strong Seguimiento de la solicitud
                p.mb-0
                  | El asesor verifica el avance del caso, mantiene informado al cliente y registra las acciones realizadas por el área técnica.
            li.d-flex
              .lista-ol--cuadro__vineta
                span 7
              .ms-1
                strong Entrega y verificación
                p.mb-0
                  | Una vez ejecutada la solución, se realiza la entrega del equipo o se comunica el resultado de la gestión. Se documentan las actuaciones y se verifica que el cliente haya recibido la información correspondiente.
            li.d-flex
              .lista-ol--cuadro__vineta
                span 8
              .ms-1
                strong Evaluación y cierre
                p.mb-0
                  | La empresa registra el resultado final y, cuando corresponda, solicita al cliente una valoración del servicio recibido. Esta información se utiliza para identificar oportunidades de mejora.
            .br
        
        .cajon.color-acento-b.p-4.mb-4(data-aos="fade-right")
          h4.mb-4 Análisis del caso
          p.mb-0 La situación presentada permite identificar la importancia de coordinar las actividades comerciales, administrativas y técnicas dentro del servicio postventa. Una atención efectiva no depende únicamente de reparar el producto, sino también de registrar correctamente la solicitud, proporcionar información oportuna, cumplir los procedimientos y realizar seguimiento hasta finalizar la gestión.

        .cajon.color-acento-bo.p-4.mb-0(data-aos="fade-left")
          h4.mb-4 Actividad de reflexión
          p.mb-4 A partir del caso de Computer Working, responda:
          p.mb-0 a) ¿Qué información debe registrar el asesor al recibir la solicitud del cliente?
          p.mb-0 b) ¿Por qué es importante verificar las condiciones de garantía antes de gestionar el caso?
          p.mb-0 c) ¿Qué áreas de la empresa deben participar para solucionar la incidencia?
          p.mb-0 d) ¿Qué indicadores permitirían evaluar la calidad de la atención prestada?
          p.mb-0 e) ¿Qué acciones podría implementar Computer Working para prevenir situaciones similares y mejorar su servicio postventa?


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
