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
    
    p.mb-5 Para desarrollar una gestión postventa eficaz, las empresas pueden utilizar las siguientes herramientas:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        AcordionA.activ(tipo="a" clase-tarjeta="tarjeta tarjeta--azull").mb-0
          .row.justify-content-center.align-items-center(titulo="Enfoque hidrológico")
            .col-lg-11
              p.mb-4 



















    separador
    #t_2_1.titulo-segundo.mb-5
      h2 2.1 Importancia del servicio postventa


    separador
    #t_2_2.titulo-segundo.mb-5
      h2 2.2 Tipos de servicios postventa


    .tit-doble.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/ico.svg')")
      h3 


    .tit-doble.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/ico.svg')")
      h3 



    .tit-doble.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/ico.svg')")
      h3 



    .tit-doble.mb-5(data-aos="fade-right")
      img.tit-doble__ico(:src="require_src('@/assets/curso/tema1/ico.svg')")
      h3 







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
