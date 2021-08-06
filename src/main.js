import { createApp } from 'vue'
import App from './App.vue'
import MovieCard from './components/MovieCard';

const app = createApp(App)

app.component('base-card', MovieCard)

app.mount('#app')
