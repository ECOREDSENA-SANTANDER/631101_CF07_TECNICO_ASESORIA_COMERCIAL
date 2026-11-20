<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-6
        img(src='@/assets/curso/intro/1.svg')
      .col-lg-6
        .bg1.p-lg-5.p-4.cen
          p.mb-0 La postventa constituye una etapa fundamental del proceso comercial, ya que permite fortalecer la relación entre la empresa y sus clientes después de concretar una venta. Su adecuada gestión contribuye a mejorar la satisfacción del cliente, atender oportunamente sus necesidades, resolver inquietudes y promover relaciones comerciales duraderas. Para ello, es necesario comprender las etapas y los elementos que conforman el servicio postventa, así como los procedimientos y las herramientas que facilitan su implementación de acuerdo con las políticas de la organización.
    
    p.mb-5(data-aos="fade-left") En este componente formativo se abordarán los fundamentos de la postventa, el proceso de calidad del servicio mediante la planificación, implementación, control y mejora de las actividades, y los procedimientos relacionados con la atención de incidencias, la asistencia técnica y otros servicios complementarios. Asimismo, se estudiarán los tipos de servicios postventa, sus fases y la importancia de las herramientas que permiten desarrollar acciones de seguimiento y atención al cliente, con el propósito de fortalecer la calidad del servicio, contribuir a la fidelización y favorecer el mejoramiento continuo de la gestión comercial

    .row.justify-content-center.align-items-center(data-aos="fade-right")        
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
