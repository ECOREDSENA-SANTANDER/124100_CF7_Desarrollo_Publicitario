<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 Las estrategias y acciones que se plasmen en un plan de comunicaciones deben ser el camino para alcanzar el objetivo deseado a través de los medios y el mensaje. En el siguiente diagrama se presentan los temas tratados en el componente formativo, enunciando todas aquellas actividades que una empresa puede emplear en su plan de comunicaciones.

    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.png", alt="En el diagrama se presentan los temas abordados dentro del componente formativo, se detallan y relacionan los conceptos más importantes.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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
