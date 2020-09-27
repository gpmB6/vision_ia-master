<template>
  <div>
    <q-input
      @input="(val) => { file = val[0] }"
      filled
      accept=".jpg, .png, .jpeg"
      type="file"
      v-on:change="fileChange"
    />
    <img id='output' height="300px" width="auto">
    <div>
      {{info}}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
@Component
export default class UploadComponent extends Vue {
  private file: any = null
  private info: any = null

  @Watch('file')
  fileChange (newValue: any, oldValue: any) {
    this.info = null
    this.$q.loading.show({
      spinnerColor: "primary",
      spinnerSize: 100
    })

    // Converte a imagem para base64
    var reader = new FileReader()
    var dataURL
    reader.onload = function () {
      dataURL = reader.result
      var output = document.getElementById('output')
      // @ts-ignore
      output.src = dataURL
    }    
    reader.readAsDataURL(newValue)
    setTimeout(() => {
      const src = document.getElementById('output') 
      // Bug na Api (Ao enviar no formato Base64 tem que remover conteúdo inicial onde contem as informações sobre a extenção do arquivo) 
      const base64 = newValue.name.slice(newValue.name.length - 3, newValue.name.length) === 'png'
          // @ts-ignore
        ? src.src.slice(22, src.src.length) 
          // @ts-ignore
        : src.src.slice(23, src.src.length)      
      this.$axios
        .post(
          'https://vision.googleapis.com/v1/images:annotate?key=AIzaSyCu1DNvWICipvk4z3e-yu1gUx--XpXegqQ',
          {
            requests: [
              {                
                image: {                  
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                  content: base64
                },
                features: [
                  {
                    type: 'LABEL_DETECTION',
                    maxResults: 3
                  }
                ]
              }
            ]
          },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
        .then((response) => {
          console.log('response')
          this.info = response.data.responses
        })
        .catch((error) => {
          console.error(error)
        })
        .finally(() => {
          this.$q.loading.hide()
        })
    }, 3000)
  }
}
</script>