import { createApp } from 'vue'
import FankeIcons from 'fanke-icons'
import './style.css'
import App from './App.vue'

const app = createApp(App)

app.use(FankeIcons)
app.mount('#app')
