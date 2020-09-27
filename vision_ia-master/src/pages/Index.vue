<template>
  <q-page class="row items-center justify-evenly">
   <upload-component/>
  </q-page>
</template>

<script lang="ts">
import UploadComponent from 'components/home/UploadComponent.vue'
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: { UploadComponent }
})
export default class PageIndex extends Vue {}
</script>
