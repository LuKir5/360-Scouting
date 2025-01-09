import './assets/main.css'

import { createApp } from 'vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//Material Design Icons
import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi.mjs'

import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi', // Standard-Iconset auf Material Design Icons setzen
      aliases,
      sets: {
        mdi,
      },
    },
})

const app = createApp(App)

app.use(router)
app.use(vuetify) // Vuetify einbinden

app.mount('#app')
