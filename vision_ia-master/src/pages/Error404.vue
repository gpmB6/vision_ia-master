<template>
  <div class="fullscreen bg-black text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">
        404
      </div>

      <div class="text-h2" style="opacity:.4">
        Ops. Parece que deixamos algo passar...
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="red"
        unelevated
        to="/"
        label="Retornar"
        no-caps
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Error404 extends Vue {}
</script>
