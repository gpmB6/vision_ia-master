<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Quasar e Google Vision :: Tópicos em IA
        </q-toolbar-title>

        <div>Versão {{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Links Importantes
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>


<script lang="ts">

//Adicionado depois
import EssentialLink from '../components/menu/EssentialLink.vue'

const linksData = [
  {
    title: 'Código no Github',
    caption: 'Endereço do github com os arquivos do projeto',
    icon: 'code',
    link: 'https://github.com/RogerBaracy/vision_ia'
  },

  {
    title: 'Documentação Quasar',
    caption: 'Endereço da documentação do Quasar',
    icon: 'widgets',
    link: 'https://quasar.dev/start/pick-quasar-flavour'
  },

    {
    title: 'Documentação Google Vision',
    caption: 'Endereço da documentação do Google Vision',
    icon: 'stars',
    link: 'https://cloud.google.com/vision'
  },

  {
    title: 'Grupo',
    caption: 'Lista dos componentes do grupo do proejto',
    icon: 'people',
    link: "../Equipe.vue",
  }

]
import EssentialLink from 'components/menu/EssentialLink.vue'
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: { EssentialLink }
})

export default class MainLayout extends Vue {
  leftDrawerOpen = true;
  essentialLinks = linksData;
}
</script>
