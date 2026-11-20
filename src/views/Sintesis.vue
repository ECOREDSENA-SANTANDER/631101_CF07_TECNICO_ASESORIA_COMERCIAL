<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5(data-aos="fade-right") La siguiente síntesis reúne los principales conceptos relacionados con la postventa, destacando sus fundamentos, la gestión de calidad, los servicios y herramientas utilizados, así como las buenas prácticas para la atención al cliente. Estos elementos permiten comprender cómo las organizaciones desarrollan acciones de seguimiento, atienden las necesidades de los compradores y aplican procedimientos orientados a mejorar la satisfacción, fortalecer la confianza y promover la fidelización del cliente    

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-11.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La postventa integra fundamentos, gestión de calidad, servicios, herramientas y buenas prácticas para fortalecer la atención y fidelización del cliente.")
      .col-auto
        a.anexo.mb-0(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis


</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
