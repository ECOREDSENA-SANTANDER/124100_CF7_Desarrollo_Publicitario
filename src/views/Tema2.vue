<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Estructura gráfica del plan

    .row.justify-content-center.align-items-center.bg10
      .col-sm-12.col-md-12.col-lg-7 
        br       
        .titulo-sexto.color-secundario
          h5 Figura 4.
          span
            | Estructura del plan
        figure
          img.p-3(src='@/assets/curso/temas/tema2/tabla1.png' alt=' La tabla señala que para un objetivo pueden existir dos estrategias, cada una con su respectiva estrategia de medios, actividades(4) y sus recursos necesarios, y adicionalmente cada estrategia debe poseer su responsable e indicador.')
      .col-8.col-md-8.col-lg-5
        img.mt-4(src='@/assets/curso/temas/tema2/imagen1.svg' alt='')



</template>

<script>
export default {
  name: 'Tema2',
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
