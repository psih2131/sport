import './assets/style/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Импортируем директиву
import clickOutside from './directives/clickOutside'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// Регистрируем директиву на экземпляре приложения
app.directive('click-outside', clickOutside)

app.use(createPinia())
app.use(router)

app.mount('#app')
