import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import App from './App.vue';
import MovieCard from './components/MovieCard';

library.add(fas);

const app = createApp(App)

app.component('base-card', MovieCard)
app.component('fa', FontAwesomeIcon)

app.mount('#app')
