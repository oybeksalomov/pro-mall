import { createApp } from 'vue'
import './style.css'

import Primevue from 'primevue/config'
import Lara from './presets/lara'
import Menubar from 'primevue/menubar'
import InputText from 'primevue/inputtext'
import Badge from 'primevue/badge'
import Avatar from 'primevue/avatar'
import MegaMenu from 'primevue/megamenu'

import router from './router'
import App from './App.vue'

const app = createApp(App)

app.use(Primevue, {
    unstyled: true,
    pt: Lara
})
app.component('Menubar', Menubar)
app.component('Badge', Badge)
app.component('InputText', InputText)
app.component('Avatar', Avatar)
app.component('MegaMenu', MegaMenu)
app.use(router)
app.mount('#app')
