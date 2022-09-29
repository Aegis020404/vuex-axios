import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import {maska} from "maska";
import axios from "axios";


let app = createApp(App)
app.use(store)

app.mount('#app')

app.directive(maska)
app.directive(axios)
