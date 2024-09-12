import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'

import panel from '../views/panel.vue'
import panel__lobby from '../views/panel/lobby.vue'
import panel__my_bets from '../views/panel/my-bets.vue'
import panel__favorites from '../views/panel/favorites.vue'
import panel__upcoming from '../views/panel/upcoming.vue'
import panel__live_bets from '../views/panel/live-bets.vue'


import event_page from '../views/events/event-single.vue'





const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/panel/',
      name: 'panel',
      component: panel,
      children: [
        {
          // при совпадении пути с шаблоном /user/:id/profile
          // в <router-view> компонента User будет показан UserProfile
          path: 'lobby',
          name: 'lobby',
          component: panel__lobby,

        },

        {
          // при совпадении пути с шаблоном /user/:id/profile
          // в <router-view> компонента User будет показан UserProfile
          path: 'my-bets',
          name: 'my-bets',
          component: panel__my_bets,

        },

        {
          // при совпадении пути с шаблоном /user/:id/profile
          // в <router-view> компонента User будет показан UserProfile
          path: 'favorites',
          name: 'favorites',
          component: panel__favorites,

        },

        {
          // при совпадении пути с шаблоном /user/:id/profile
          // в <router-view> компонента User будет показан UserProfile
          path: 'upcoming',
          name: 'upcoming',
          component: panel__upcoming,

        },

        {
          // при совпадении пути с шаблоном /user/:id/profile
          // в <router-view> компонента User будет показан UserProfile
          path: 'live-bets',
          name: 'live-bets',
          component: panel__live_bets,

        },


      ]
    },

    {
      path: '/events/:id',
      name: 'eventsID',
      component: event_page,

    }
  ]
})

export default router
