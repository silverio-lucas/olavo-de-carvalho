<template>
  <div>
    <!-- 此处可以添加你的应用程序内容 -->
  </div>
</template>

<script>
export default {
  mounted() {
    this.openPdf()
  },
  methods: {
    openPdf() {
      const file = 'o_minimo_que_voce_precisa_saber_para_nao_ser_um_idiota.pdf' // 将'your-file-name'替换为实际的文件名
      window.open(`/${file}`, '_self')
    }
  }
}
</script>
