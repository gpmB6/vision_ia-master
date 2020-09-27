import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },

  {
      path: "/grupo",
      title: 'Grupo',
      component: () =>
        import('layouts/Equipe.vue'),
      meta: {
        visible: true
      }
    },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    name: "not-found",
    component: () => 
      import('pages/Error404.vue'),
    meta: { 
      visible: false}
  }

]

export default routes
