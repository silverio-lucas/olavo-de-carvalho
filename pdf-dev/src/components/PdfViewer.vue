<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    this.openPdf()
  },
  methods: {
    openPdf() {
      const file = this.$route.params.file
      const pdfUrl = '/o_minimo_que_voce_precisa_saber_para_nao_ser_um_idiota' + file + '.pdf'
      // window.open(pdfUrl, '_blank')
    }
  }
}
</script>
